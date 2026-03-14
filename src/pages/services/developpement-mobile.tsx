import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Smartphone,
  Apple,
  Play,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Battery,
  Wifi,
  Bell,
  Award,
  TrendingUp,
  Code2,
} from "lucide-react";

export default function DeveloppementMobile() {
  const features = [
    {
      icon: Apple,
      title: "iOS & Android",
      description: "Applications natives ou cross-platform performantes",
    },
    {
      icon: Zap,
      title: "Performance Native",
      description: "Rapidité et fluidité optimales",
    },
    {
      icon: Shield,
      title: "Sécurité Maximum",
      description: "Protection des données utilisateurs",
    },
    {
      icon: Battery,
      title: "Optimisation Batterie",
      description: "Consommation énergétique réduite",
    },
    {
      icon: Wifi,
      title: "Mode Hors Ligne",
      description: "Fonctionnalités disponibles sans connexion",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Engagez vos utilisateurs efficacement",
    },
  ];

  const platforms = [
    {
      name: "React Native",
      description: "Cross-platform iOS & Android",
      icon: Code2,
      benefits: ["Code unique", "Déploiement rapide", "Coût optimisé"],
    },
    {
      name: "Native iOS",
      description: "Swift pour iPhone & iPad",
      icon: Apple,
      benefits: ["Performance max", "Intégration Apple", "UX premium"],
    },
    {
      name: "Native Android",
      description: "Kotlin pour Google Play",
      icon: Play,
      benefits: ["Personnalisation", "Large audience", "Google Services"],
    },
  ];

  const appExamples = [
    {
      title: "App E-commerce",
      type: "Shopping",
      downloads: "10,000+",
      rating: "4.8",
      features: ["Paiement mobile", "Suivi commandes", "Chat support"],
    },
    {
      title: "App Fintech",
      type: "Finance",
      downloads: "25,000+",
      rating: "4.9",
      features: ["Transferts", "Historique", "Sécurité bancaire"],
    },
    {
      title: "App Santé",
      type: "Médical",
      downloads: "5,000+",
      rating: "4.7",
      features: ["Rendez-vous", "Dossier médical", "Téléconsultation"],
    },
  ];

  return (
    <>
      <SEO
        title="Développement Mobile iOS & Android | Applications Natives - XETA Digital"
        description="Création d'applications mobiles performantes pour iOS et Android au Gabon. React Native, Swift, Kotlin. Apps natives et cross-platform."
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,149,218,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Apps iOS & Android
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
                Développement Mobile
                <span className="block text-xeta-blue-light mt-2">Nouvelle Génération</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Applications mobiles natives et cross-platform qui engagent vos utilisateurs. Performance, design et expérience utilisateur au rendez-vous.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 shadow-xl group">
                  <Link href="/contact">
                    Créer Mon Application
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/tarifs">
                    Voir les Prix
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Publication Stores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Support Technique</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Fonctionnalités</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Applications Complètes et Performantes
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Toutes les fonctionnalités dont vous avez besoin pour réussir
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-8 border-2 card-hover group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/20">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Plateformes</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Choisissez Votre Technologie
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous adaptons la stack technique à vos besoins et budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <Card key={index} className="p-8 border-2 card-hover group text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {platform.description}
                    </p>
                    <div className="space-y-3">
                      {platform.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Réalisations</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Apps à Succès
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des applications qui font la différence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {appExamples.map((app, index) => (
                <Card key={index} className="overflow-hidden border-2 card-hover group">
                  <div className="h-56 bg-gradient-to-br from-xeta-blue to-xeta-blue-dark relative flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-white/30" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                      ⭐ {app.rating}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-1">
                        {app.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{app.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{app.downloads} téléchargements</span>
                    </div>
                    <div className="space-y-2 pt-2 border-t">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="relative z-10 space-y-8">
                <div className="inline-block">
                  <Award className="w-16 h-16 mb-4" />
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  Lancez Votre Application Mobile
                </h2>
                <p className="text-xl max-w-2xl mx-auto opacity-90">
                  Devis gratuit, développement professionnel, publication sur les stores. Votre app en quelques semaines.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                    <Link href="/contact">
                      Demander un Devis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/realisations">
                      Voir le Portfolio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}