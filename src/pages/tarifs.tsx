import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

export default function Tarifs() {
  const webPlans = [
    {
      name: "Site Vitrine",
      price: "70,000",
      period: "à partir de",
      description: "Parfait pour présenter votre activité en ligne",
      features: [
        "Design sur mesure responsive",
        "Jusqu'à 5 pages",
        "En HTML/CSS (sans base de données)",
        "Nom de domaine et hébergement gratuit 1 an",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Certificat SSL inclus",
        "Formation à la gestion",
        "Support 3 mois",
      ],
      icon: Sparkles,
      popular: false,
    },
    {
      name: "Site E-commerce",
      price: "850,000",
      period: "à partir de",
      description: "Solution complète pour vendre en ligne",
      features: [
        "Design professionnel responsive",
        "Catalogue produits illimité",
        "Panier et paiement en ligne",
        "Gestion des stocks",
        "Dashboard admin complet",
        "SEO avancé",
        "Formation complète",
        "Support 6 mois",
      ],
      icon: Crown,
      popular: true,
    },
    {
      name: "Application Web",
      price: "Sur devis",
      period: "projet personnalisé",
      description: "Plateforme web sur mesure pour vos besoins",
      features: [
        "Développement 100% personnalisé",
        "Architecture évolutive",
        "Base de données optimisée",
        "API & intégrations",
        "Dashboard analytics",
        "Sécurité renforcée",
        "Formation équipe",
        "Support 12 mois",
      ],
      icon: Zap,
      popular: false,
    },
  ];

  const mobilePlans = [
    {
      name: "App Mobile Basique",
      price: "300,000",
      period: "à partir de",
      description: "Application mobile Android",
      features: [
        "Android uniquement",
        "Design UX/UI sur mesure",
        "5-8 écrans",
        "Notifications push",
        "Publication sur Play Store",
        "Formation",
        "Support 3 mois",
      ],
    },
    {
      name: "App Mobile Avancée",
      price: "700,000",
      period: "à partir de",
      description: "Application avec fonctionnalités complexes",
      features: [
        "Android & iOS",
        "Design premium",
        "Backend API inclus",
        "Authentification & profils",
        "Paiement intégré",
        "Mode hors ligne",
        "Analytics intégrés",
        "Support 6 mois",
      ],
      popular: true,
    },
  ];

  const hostingPlans = [
    {
      name: "Starter",
      price: "15,000",
      period: "FCFA/mois",
      features: [
        "5 GB stockage SSD",
        "Bande passante illimitée",
        "1 nom de domaine gratuit",
        "SSL gratuit",
        "Email professionnel (5)",
        "Support 24/7",
      ],
    },
    {
      name: "Business",
      price: "35,000",
      period: "FCFA/mois",
      features: [
        "50 GB stockage SSD",
        "Bande passante illimitée",
        "3 noms de domaine gratuits",
        "SSL gratuit",
        "Email professionnel (25)",
        "Sauvegardes quotidiennes",
        "Support prioritaire 24/7",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "75,000",
      period: "FCFA/mois",
      features: [
        "200 GB stockage SSD",
        "Bande passante illimitée",
        "Domaines illimités",
        "SSL gratuit",
        "Email professionnel illimités",
        "Sauvegardes automatiques",
        "CDN inclus",
        "Support dédié 24/7",
      ],
    },
  ];

  const domainPrices = [
    { extension: ".com", price: "12,000 FCFA/an" },
    { extension: ".ga (Gabon)", price: "20,000 FCFA/an" },
    { extension: ".africa", price: "20,000 FCFA/an" },
    { extension: ".net", price: "13,000 FCFA/an" },
    { extension: ".org", price: "13,000 FCFA/an" },
    { extension: ".biz", price: "15,000 FCFA/an" },
  ];

  return (
    <>
      <SEO
        title="Tarifs - XETA Digital Corp | Développement Web & Mobile au Gabon"
        description="Découvrez nos tarifs pour le développement web, mobile, l'hébergement et les noms de domaine. Solutions digitales accessibles et transparentes."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Tarifs Transparents
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Des solutions digitales accessibles pour toutes les entreprises gabonaises
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Développement Web
              </h2>
              <p className="text-xl text-muted-foreground">
                Sites web professionnels et performants
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {webPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <Card
                    key={index}
                    className={`relative p-8 border-2 card-hover ${
                      plan.popular
                        ? "border-xeta-blue shadow-xl ring-2 ring-xeta-blue/20"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-hero text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                          Le Plus Populaire
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-xeta-blue-light flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-xeta-blue" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-heading font-bold text-xeta-blue">
                          {plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          FCFA
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.period}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-xeta-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href="/contact">
                        Demander un Devis
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Développement Mobile
              </h2>
              <p className="text-xl text-muted-foreground">
                Applications iOS et Android performantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mobilePlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 border-2 card-hover ${
                    plan.popular
                      ? "border-xeta-blue shadow-xl ring-2 ring-xeta-blue/20"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-hero text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        Recommandé
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-heading font-bold text-xeta-blue">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">FCFA</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-xeta-blue mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">
                      Demander un Devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Hébergement Web
              </h2>
              <p className="text-xl text-muted-foreground">
                Hébergement performant et sécurisé
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {hostingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 border-2 card-hover ${
                    plan.popular
                      ? "border-xeta-blue shadow-xl ring-2 ring-xeta-blue/20"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-hero text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        Populaire
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-heading font-bold text-xeta-blue">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-xeta-blue mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">
                      Commander
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Noms de Domaine
              </h2>
              <p className="text-xl text-muted-foreground">
                Enregistrez votre présence en ligne
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {domainPrices.map((domain, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 card-hover text-center"
                >
                  <h3 className="text-3xl font-heading font-bold text-xeta-blue mb-2">
                    {domain.extension}
                  </h3>
                  <p className="text-lg font-semibold">{domain.price}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a
                  href="https://spiderhoster.com/portail/cart.php?a=add&domain=register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir Tous les Prix
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Besoin d'un Devis Personnalisé ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Chaque projet est unique. Contactez-nous pour obtenir une offre sur mesure
              </p>
              <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                <Link href="/contact">
                  Demander un Devis Gratuit
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