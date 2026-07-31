import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message envoyé avec succès ! Nous vous répondrons rapidement.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Erreur lors de l'envoi. Veuillez réessayer.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Libreville, Gabon",
      link: null,
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+241 77 69 47 23",
      link: "tel:+24177694723",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@xeta-digital.com",
      link: "mailto:contact@xeta-digital.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h - 18h",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/XetaDigitalCorp/?locale=fr_FR",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://ga.linkedin.com/company/xeta-digital",
    },
  ];

  return (
    <>
      <SEO
        title="Contact - XETA Digital Corp | Agence Web Gabon"
        description="Contactez XETA Digital Corp pour votre projet web, mobile ou hébergement. Notre équipe à Libreville, Gabon est prête à vous accompagner."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">Contactez-nous</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Parlons de Votre
                <br />
                <span className="text-xeta-blue-light">Projet Digital</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Notre équipe est prête à transformer vos idées en réalité digitale
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-heading font-bold mb-4">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                  </p>
                </div>

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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+241 77 69 47 23"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="En quoi pouvons-nous vous aider ?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez votre projet ou votre question..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                      <Send className="mr-2 w-5 h-5" />
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-heading font-bold mb-4">
                    Informations de Contact
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Vous pouvez également nous contacter directement
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a
                        href={info.link}
                        className="text-lg text-muted-foreground hover:text-xeta-blue transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-lg text-muted-foreground">
                        {info.content}
                      </p>
                    );

                    return (
                      <Card key={index} className="p-6 border-2 card-hover">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-xeta-blue-light flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-xeta-blue" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold mb-1">
                              {info.title}
                            </h3>
                            {content}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                <Card className="p-8 border-2 bg-gradient-to-br from-xeta-blue-light/20 to-transparent">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Suivez-nous
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Restez connecté avec XETA Digital sur les réseaux sociaux
                  </p>
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-xeta-blue flex items-center justify-center hover:bg-xeta-blue-dark transition-colors"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </Card>

                <Card className="p-8 border-2 bg-gradient-hero text-white">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Devis Gratuit
                  </h3>
                  <p className="mb-6 opacity-90">
                    Obtenez une estimation détaillée de votre projet sans engagement
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-white text-xeta-blue hover:bg-white/90"
                  >
                    Demander un Devis
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}