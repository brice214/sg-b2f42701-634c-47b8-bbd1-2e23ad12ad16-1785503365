import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code2,
  Layout,
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Palette,
  Database,
  Cloud,
  Search,
} from "lucide-react";

export default function DeveloppementWeb() {
  const services = [
    {
      icon: Layout,
      title: "Sites Vitrine",
      description: "Sites web élégants et professionnels pour présenter votre entreprise avec impact",
      features: ["Design sur mesure", "Responsive mobile", "SEO optimisé", "Performance maximale"],
    },
    {
      icon: Code2,
      title: "Applications Web",
      description: "Plateformes web complexes et évolutives pour vos besoins métier spécifiques",
      features: ["Architecture robuste", "Interface intuitive", "Sécurité renforcée", "Scalabilité"],
    },
    {
      icon: Database,
      title: "E-commerce",
      description: "Boutiques en ligne complètes avec gestion des paiements et des stocks",
      features: ["Paiement sécurisé", "Gestion catalogue", "Analytics avancés", "Multi-devises"],
    },
    {
      icon: Palette,
      title: "Refonte & Modernisation",
      description: "Transformation de sites existants avec les dernières technologies",
      features: ["Audit complet", "Design moderne", "Migration sécurisée", "Formation incluse"],
    },
  ];

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "WordPress",
    "PHP & Laravel",
    "PostgreSQL",
    "MongoDB",
  ];

  const process = [
    {
      step: "01",
      title: "Analyse & Stratégie",
      description: "Étude approfondie de vos besoins et définition des objectifs",
    },
    {
      step: "02",
      title: "Design & Maquettage",
      description: "Création de l'interface utilisateur et validation du design",
    },
    {
      step: "03",
      title: "Développement",
      description: "Programmation avec les meilleures pratiques et technologies",
    },
    {
      step: "04",
      title: "Tests & Déploiement",
      description: "Validation qualité et mise en ligne de votre projet",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Sites ultra-rapides pour une expérience utilisateur exceptionnelle",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection avancée contre les menaces et les vulnérabilités",
    },
    {
      icon: Search,
      title: "SEO Intégré",
      description: "Optimisation pour les moteurs de recherche dès la conception",
    },
    {
      icon: TrendingUp,
      title: "Évolutivité",
      description: "Architecture permettant la croissance future de votre projet",
    },
  ];

  return (
    <>
      <SEO
        title="Développement Web au Gabon - XETA Digital Corp"
        description="Création de sites web professionnels et applications web sur mesure au Gabon. React, Next.js, WordPress. Devis gratuit."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <Code2 className="w-5 h-5" />
                <span className="text-sm font-medium">Développement Web</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Sites Web Professionnels
                <br />
                <span className="text-xeta-blue-light">Performants et Évolutifs</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                De la simple vitrine aux applications web complexes, nous créons des solutions digitales qui propulsent votre business
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Demander un Devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/realisations">
                    Voir nos Projets
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
                Nos Solutions Web
              </h2>
              <p className="text-xl text-muted-foreground">
                Des services adaptés à chaque type de projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue-light flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-xeta-blue" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-xeta-blue flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                Technologies Modernes
              </h2>
              <p className="text-xl text-muted-foreground">
                Nous utilisons les outils les plus performants du marché
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6 text-center border-2 card-hover">
                  <p className="font-heading font-semibold">{tech}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Notre Processus
              </h2>
              <p className="text-xl text-muted-foreground">
                Une méthodologie éprouvée pour garantir votre réussite
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="p-8 border-2 card-hover relative">
                  <div className="text-6xl font-heading font-bold text-xeta-blue-light mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-br from-background to-xeta-blue-light/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Nos Avantages
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
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

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Prêt à Lancer Votre Site Web ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Obtenez un devis gratuit et personnalisé en moins de 24h
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