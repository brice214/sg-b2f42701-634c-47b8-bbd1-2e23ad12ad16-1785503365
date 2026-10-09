import React from "react";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Globe, Send, Building2, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const DOMAIN_EXTENSIONS = [
  { value: ".ga", label: ".GA", price: 20000 },
  { value: ".com", label: ".COM", price: 15000 },
  { value: ".org", label: ".ORG", price: 15000 },
  { value: ".net", label: ".NET", price: 15000 },
  { value: ".info", label: ".INFO", price: 15000 },
];

function formatPrice(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function parsePrice(value: string | string[] | undefined): number {
  if (!value) return 0;
  const str = Array.isArray(value) ? value[0] : value;
  const clean = str.replace(/[^\d]/g, "");
  return parseInt(clean, 10) || 0;
}

export default function CommandeEmail() {
  const router = useRouter();
  const planName = (router.query.plan as string) || "Starter";
  const planPeriod = (router.query.period as string) || "FCFA/mois";
  const planUsers = (router.query.users as string) || "";
  const planPrice = parsePrice(router.query.price);

  const [wantsDomain, setWantsDomain] = React.useState("non");
  const [domainName, setDomainName] = React.useState("");
  const [extension, setExtension] = React.useState(DOMAIN_EXTENSIONS[0].value);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const selectedExtension = DOMAIN_EXTENSIONS.find((e) => e.value === extension) || DOMAIN_EXTENSIONS[0];
  const domainPrice = wantsDomain === "oui" ? selectedExtension.price : 0;
  const totalPrice = planPrice + domainPrice;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (wantsDomain === "oui" && !domainName.trim()) {
      setSubmitStatus({ type: "error", message: "Veuillez indiquer le nom de domaine souhaité." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute("6LeCAYQtAAAAACPhnsoYKwhLfprUW8sw2Wb3UUBH", { action: "submit_order_form" })
            .then(resolve)
            .catch(reject);
        });
      });

      const response = await fetch("/api/order-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName,
          planPrice,
          planPeriod,
          planUsers,
          wantsDomain: wantsDomain === "oui",
          domainName: wantsDomain === "oui" ? domainName : "",
          domainExtension: wantsDomain === "oui" ? selectedExtension.label : "",
          domainPrice,
          totalPrice,
          firstName,
          lastName,
          company,
          email,
          phone,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Votre commande a été envoyée avec succès ! Notre équipe vous contactera rapidement.",
        });
        setFirstName("");
        setLastName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setDomainName("");
        setWantsDomain("non");
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Erreur lors de l'envoi. Veuillez réessayer.",
        });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Erreur de connexion. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Commander un Forfait Email - XETA-DIGITAL CORP"
        description="Finalisez votre commande de messagerie professionnelle et ajoutez un nom de domaine en option."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-16 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Finaliser votre commande</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Forfait {planName}
              </h1>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-8">
              <Card className="p-6 border-2 bg-xeta-blue-light/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Forfait sélectionné</p>
                    <p className="text-xl font-heading font-bold">{planName}</p>
                    {planUsers && <p className="text-sm text-xeta-blue font-semibold">{planUsers}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Montant forfait</p>
                    <p className="text-2xl font-heading font-bold text-xeta-blue">
                      {formatPrice(planPrice)} FCFA
                    </p>
                    <p className="text-xs text-muted-foreground">{planPeriod}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-xeta-blue" />
                      Souhaitez-vous également un nom de domaine ?
                    </Label>
                    <RadioGroup value={wantsDomain} onValueChange={setWantsDomain} className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oui" id="domain-oui" />
                        <Label htmlFor="domain-oui" className="font-normal cursor-pointer">Oui</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non" id="domain-non" />
                        <Label htmlFor="domain-non" className="font-normal cursor-pointer">Non</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {wantsDomain === "oui" && (
                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="domainName">Nom de domaine souhaité</Label>
                        <Input
                          id="domainName"
                          placeholder="votreentreprise"
                          value={domainName}
                          onChange={(e) => setDomainName(e.target.value)}
                          required={wantsDomain === "oui"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="extension">Extension</Label>
                        <Select value={extension} onValueChange={setExtension}>
                          <SelectTrigger id="extension">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {DOMAIN_EXTENSIONS.map((ext) => (
                              <SelectItem key={ext.value} value={ext.value}>
                                {ext.label} — {formatPrice(ext.price)} FCFA
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-4 bg-xeta-blue/10 rounded-lg border-2 border-xeta-blue/30">
                    <span className="font-heading font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-xeta-blue" />
                      Montant global
                    </span>
                    <span className="text-2xl font-heading font-bold text-xeta-blue">
                      {formatPrice(totalPrice)} FCFA
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Entreprise (facultatif)
                    </Label>
                    <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+241 77 69 47 23" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                  </div>

                  <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                    <Send className="mr-2 w-5 h-5" />
                    {isSubmitting ? "Envoi en cours..." : "Valider ma commande"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}