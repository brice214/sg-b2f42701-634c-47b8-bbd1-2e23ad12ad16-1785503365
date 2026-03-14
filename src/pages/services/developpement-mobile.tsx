import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Smartphone,
  Tablet,
  Zap,
  Users,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function DeveloppementMobile() {
  const services = [
    {
      icon: Smartphone,
      title: "Applications iOS",
      description: "Apps natives pour iPhone et iPad avec Swift et UIKit",
      features: ["Design iOS natif", "App Store ready", "Performance optimale", "Intégration iCloud"],
    },
    {
      icon: Tablet,
      title: "Applications Android",
      description: "Apps natives pour smartphones et tablettes Android",
      features: ["Material Design", "Play Store ready", "Multi-résolutions", "Services Google"],
    },
    {
      icon: Globe,
      title: "Apps Cross-Platform",
      description: "Une seule codebase pour iOS et Android avec React Native",
      features: ["Économie de temps", "Cohérence design", "Maintenance simplifiée", "Hot reload"],
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "Applications web installables fonctionnant hors ligne",
      features: ["Sans installation", "Notifications push", "Mode hors ligne", "Multi-plateforme"],
    },
  ];

  const technologies = [
    "React Native",
    "Swift",
    "Kotlin",
    "Flutter",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "Redux",
  ];

  const useCases = [
    {
      icon: Users,
      title: "Applications Métier",
      description: "Solutions mobiles pour optimiser vos processus internes",
    },
    {
      icon: Star,
      title: "E-commerce Mobile",
      description: "Boutiques mobiles avec paiement intégré",
    },
    {
      icon: TrendingUp,
      title: "Apps Marketing",
      description: "Applications pour engager vos clients et prospects",
    },
    {
      icon: Shield,
      title: "Apps Sécurisées",
      description: "Solutions avec authentification et chiffrement",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Idéation & UX",
      description: "Définition des fonctionnalités et wireframes",
    },
    {
      step: "02",
      title: "Design UI",
      description: "Interface adaptée aux standards iOS/Android",
    },
    {
      step: "03",
      title: "Développement",
      description: "Programmation et intégration des APIs",
    },
    {
      step: "04",
      title: "Publication",
      description: "Déploiement sur App Store et Play Store",
    },
  ];

  return (
    <>
      <SEO
        title="Développement Mobile au Gabon - Applications iOS & Android"
        description="Création d'applications mobiles natives et cross-platform au Gabon. React Native, Swift, Kotlin. Expertise iOS et Android."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">Développement Mobile</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Applications Mobile
                <br />
                <span className="text-xeta-blue-light">iOS & Android</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transformez vos idées en applications mobiles performantes et engageantes
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Discuter de mon Projet
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/realisations">
                    Voir nos Apps
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
                Nos Solutions Mobile
              </h2>
              <p className="text-xl text-muted-foreground">
                Native, cross-platform ou PWA : la solution adaptée à vos besoins
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
                Technologies Mobile
              </h2>
              <p className="text-xl text-muted-foreground">
                Stack technique moderne et éprouvé
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
                Cas d'Usage
              </h2>
              <p className="text-xl text-muted-foreground">
                Des applications mobiles pour tous vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {useCase.description}
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
                Notre Processus
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="p-8 border-2 card-hover">
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

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Lancez Votre Application Mobile
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Discutons de votre projet et recevez un devis détaillé
              </p>
              <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                <Link href="/contact">
                  Demander un Devis
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