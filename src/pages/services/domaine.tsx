import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  Search,
  Shield,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  Users,
  Award,
} from "lucide-react";

export default function Domaine() {
  const extensions = [
    { ext: ".com", price: "12 000 FCFA/an", popular: true },
    { ext: ".ga", price: "8 000 FCFA/an", popular: false },
    { ext: ".net", price: "14 000 FCFA/an", popular: false },
    { ext: ".org", price: "14 000 FCFA/an", popular: false },
    { ext: ".info", price: "15 000 FCFA/an", popular: false },
    { ext: ".biz", price: "16 000 FCFA/an", popular: false },
    { ext: ".africa", price: "20 000 FCFA/an", popular: true },
    { ext: ".io", price: "35 000 FCFA/an", popular: false },
  ];

  const services = [
    {
      icon: Search,
      title: "Recherche de Domaine",
      description: "Vérification instantanée de la disponibilité de votre nom de domaine idéal",
    },
    {
      icon: Globe,
      title: "Enregistrement",
      description: "Réservation rapide et sécurisée de votre nom de domaine",
    },
    {
      icon: RefreshCw,
      title: "Transfert de Domaine",
      description: "Migration facile de vos domaines existants vers nos services",
    },
    {
      icon: Lock,
      title: "Protection WHOIS",
      description: "Confidentialité de vos informations personnelles garantie",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Activation Instantanée",
      description: "Votre domaine actif en quelques minutes seulement",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection contre le vol de domaine et verrouillage inclus",
    },
    {
      icon: Users,
      title: "Gestion Simplifiée",
      description: "Panneau de contrôle intuitif pour gérer tous vos domaines",
    },
    {
      icon: Award,
      title: "Support Expert",
      description: "Assistance technique pour toutes vos questions",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Recherchez",
      description: "Trouvez le nom de domaine parfait pour votre marque",
    },
    {
      number: "02",
      title: "Choisissez",
      description: "Sélectionnez l'extension qui correspond à vos besoins",
    },
    {
      number: "03",
      title: "Enregistrez",
      description: "Finalisez votre achat en toute sécurité",
    },
    {
      number: "04",
      title: "Lancez",
      description: "Connectez votre domaine à votre site web",
    },
  ];

  return (
    <>
      <SEO
        title="Nom de Domaine au Gabon - Enregistrement .com .ga .africa"
        description="Enregistrement et gestion de noms de domaine au Gabon. Extensions .com, .ga, .africa disponibles. Activation instantanée et support expert."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Nom de Domaine</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Trouvez Votre
                <br />
                <span className="text-xeta-blue-light">Nom de Domaine Idéal</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Réservez votre identité en ligne avec les meilleures extensions disponibles
              </p>
              
              <div className="max-w-2xl mx-auto mt-8">
                <div className="bg-white rounded-2xl p-2 shadow-2xl flex items-center space-x-2">
                  <Search className="w-6 h-6 text-muted-foreground ml-4" />
                  <input
                    type="text"
                    placeholder="Recherchez votre nom de domaine..."
                    className="flex-1 px-4 py-4 text-lg outline-none"
                  />
                  <Button size="lg" className="whitespace-nowrap">
                    Rechercher
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Exemples: monentreprise.com, maboutique.ga, monprojet.africa
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Extensions Disponibles
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez parmi une large sélection d'extensions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {extensions.map((ext, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center border-2 card-hover ${
                    ext.popular ? "border-xeta-blue" : ""
                  }`}
                >
                  {ext.popular && (
                    <div className="inline-block bg-xeta-blue text-white text-xs px-2 py-1 rounded-full mb-2">
                      Populaire
                    </div>
                  )}
                  <div className="text-3xl font-heading font-bold text-xeta-blue mb-2">
                    {ext.ext}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {ext.price}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Nos Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Pourquoi Choisir XETA Digital ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="p-8 border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue-light flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-xeta-blue" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-br from-background to-xeta-blue-light/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Comment Ça Marche ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-8 border-2 card-hover text-center">
                  <div className="text-6xl font-heading font-bold text-xeta-blue-light mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Réservez Votre Domaine Aujourd'hui
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Ne laissez pas passer le nom de domaine de vos rêves
              </p>
              <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                <Link href="/contact">
                  Commencer la Recherche
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}