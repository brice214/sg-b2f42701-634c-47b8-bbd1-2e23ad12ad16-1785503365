import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Server,
  Shield,
  Zap,
  Globe,
  HardDrive,
  Lock,
  CheckCircle2,
  ArrowRight,
  Clock,
  Headphones,
  Wifi,
  Database,
} from "lucide-react";

export default function Hebergement() {
  const plans = [
    {
      name: "Starter",
      price: "15 000",
      period: "/mois",
      description: "Parfait pour les sites vitrines et blogs",
      features: [
        "10 GB d'espace disque",
        "Bande passante illimitée",
        "5 comptes email",
        "Certificat SSL gratuit",
        "Sauvegarde hebdomadaire",
        "Support par email",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "35 000",
      period: "/mois",
      description: "Idéal pour les entreprises en croissance",
      features: [
        "50 GB d'espace disque",
        "Bande passante illimitée",
        "Comptes email illimités",
        "Certificat SSL gratuit",
        "Sauvegarde quotidienne",
        "Support prioritaire 24/7",
        "CDN inclus",
        "Base de données optimisée",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "Solutions personnalisées haute performance",
      features: [
        "Ressources dédiées",
        "Bande passante illimitée",
        "Infrastructure sur mesure",
        "Certificats SSL avancés",
        "Sauvegarde en temps réel",
        "Support dédié 24/7",
        "CDN premium",
        "Optimisation personnalisée",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Performance Maximale",
      description: "Serveurs SSD ultra-rapides pour des temps de chargement optimaux",
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection DDoS, pare-feu et SSL inclus de série",
    },
    {
      icon: Clock,
      title: "Disponibilité 99.9%",
      description: "Infrastructure redondante pour une disponibilité garantie",
    },
    {
      icon: Headphones,
      title: "Support Expert",
      description: "Équipe technique disponible 24/7 pour vous assister",
    },
  ];

  const advantages = [
    {
      icon: Globe,
      title: "Datacenters Optimisés",
      description: "Serveurs stratégiquement placés pour minimiser la latence en Afrique",
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "MySQL, PostgreSQL et MongoDB supportés avec optimisations",
    },
    {
      icon: Wifi,
      title: "CDN Intégré",
      description: "Réseau de distribution de contenu pour une vitesse mondiale",
    },
    {
      icon: Lock,
      title: "Sauvegardes Auto",
      description: "Sauvegardes quotidiennes automatiques avec restauration en un clic",
    },
  ];

  return (
    <>
      <SEO
        title="Hébergement Web au Gabon - XETA-DIGITAL CORP"
        description="Solutions d'hébergement web fiables et performantes au Gabon. Serveurs SSD, SSL gratuit, support 24/7. Hébergement professionnel pour votre site web."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <Server className="w-5 h-5" />
                <span className="text-sm font-medium">Hébergement Web</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Hébergement Web
                <br />
                <span className="text-xeta-blue-light">Fiable et Performant</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Des solutions d'hébergement adaptées à tous vos besoins, avec support technique local
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Choisir mon Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/contact">
                    Contactez-nous
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Nos Offres d'Hébergement
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez la solution adaptée à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 border-2 relative ${
                    plan.popular
                      ? "border-xeta-blue shadow-2xl scale-105"
                      : "card-hover"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-xeta-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Plus Populaire
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-end justify-center mb-2">
                      <span className="text-4xl font-heading font-bold text-xeta-blue">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-xeta-blue flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular ? "" : "variant-outline"
                    }`}
                  >
                    <Link href="/contact">Commander</Link>
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
                Pourquoi Nous Choisir ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
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
                Fonctionnalités Avancées
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
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Prêt à Héberger Votre Site ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Contactez-nous pour trouver la solution d'hébergement parfaite
              </p>
              <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                <Link href="/contact">
                  Démarrer Maintenant
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