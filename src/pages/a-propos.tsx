import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function APropos() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Adoption des dernières technologies pour des solutions à la pointe",
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Engagement total envers la qualité et la satisfaction client",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe et partenariat étroit avec nos clients",
    },
    {
      icon: Globe,
      title: "Impact Local",
      description: "Contribuer à la transformation digitale du Gabon",
    },
  ];

  const team = [
    {
      name: "Brice Emery MBENDJE",
      role: "Fondateur & Directeur Technique",
      description: "Expert en développement full-stack et architecture cloud",
    },
    {
      name: "Équipe Développement",
      role: "Développeurs Web & Mobile",
      description: "Spécialistes React, Next.js, React Native et technologies modernes",
    },
    {
      name: "Équipe Support",
      role: "Support Technique",
      description: "Assistance dédiée pour hébergement et maintenance",
    },
  ];

  const milestones = [
    { year: "2016", event: "Création de XETA Digital" },
    { year: "2018", event: "Lancement des services d'hébergement" },
    { year: "2021", event: "Expansion mobile et 30+ clients" },
    { year: "2024", event: "50+ projets livrés avec succès" },
  ];

  return (
    <>
      <SEO
        title="À Propos - XETA Digital Corp | Notre Histoire et Vision"
        description="Découvrez XETA Digital Corp, agence web gabonaise pionnière du développement web et mobile au Gabon. Notre mission, nos valeurs et notre équipe."
      />
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4 animate-fade-in-up">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">À Propos de Nous</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white animate-fade-in-up animation-delay-100">
                Notre Histoire
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
                Pionniers de la transformation digitale au Gabon depuis 2016
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-spacing">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  Qui Sommes-Nous ?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">XETA Digital Corp</strong> est une agence digitale gabonaise fondée en 2016, spécialisée dans le développement de solutions web et mobiles innovantes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Basée à Libreville, nous combinons expertise technique internationale et compréhension approfondie du marché local pour offrir des solutions digitales qui propulsent la croissance de nos clients.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Avec plus de <strong className="text-foreground">50 projets réalisés</strong> et <strong className="text-foreground">40+ clients satisfaits</strong>, nous sommes fiers d'être un partenaire de confiance pour la transformation digitale des entreprises gabonaises.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center border-2 card-hover bg-gradient-to-br from-xeta-blue-light/20 to-transparent">
                  <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">
                    50+
                  </div>
                  <p className="text-muted-foreground">Projets Réalisés</p>
                </Card>
                <Card className="p-6 text-center border-2 card-hover bg-gradient-to-br from-xeta-blue-light/20 to-transparent">
                  <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">
                    40+
                  </div>
                  <p className="text-muted-foreground">Clients Actifs</p>
                </Card>
                <Card className="p-6 text-center border-2 card-hover bg-gradient-to-br from-xeta-blue-light/20 to-transparent">
                  <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">
                    5+
                  </div>
                  <p className="text-muted-foreground">Ans d'Expérience</p>
                </Card>
                <Card className="p-6 text-center border-2 card-hover bg-gradient-to-br from-xeta-blue-light/20 to-transparent">
                  <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">
                    8+
                  </div>
                  <p className="text-muted-foreground">Ans d'Expérience</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                Notre Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 border-2 card-hover bg-gradient-to-br from-background to-xeta-blue-light/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Notre Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Démocratiser l'accès aux technologies digitales de pointe au Gabon en offrant des solutions web et mobiles accessibles, performantes et adaptées aux besoins locaux. Nous nous engageons à accompagner chaque entreprise dans sa transformation digitale avec excellence et innovation.
                </p>
              </Card>

              <Card className="p-8 border-2 card-hover bg-gradient-to-br from-background to-xeta-blue-light/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Notre Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le leader incontournable du développement digital en Afrique Centrale, reconnu pour notre expertise technique, notre innovation constante et notre contribution à l'écosystème entrepreneurial gabonais. Nous aspirons à créer un impact durable sur l'économie numérique africaine.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Nos Valeurs
              </h2>
              <p className="text-xl text-muted-foreground">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover group bg-gradient-to-br from-background to-xeta-blue-light/5">
                    <div className="w-16 h-16 rounded-2xl bg-xeta-blue-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-xeta-blue" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-spacing bg-gradient-to-br from-background to-xeta-blue-light/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Notre Équipe
              </h2>
              <p className="text-xl text-muted-foreground">
                Des experts passionnés au service de votre réussite
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="p-8 text-center border-2 card-hover group bg-gradient-to-br from-background to-xeta-blue-light/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xeta-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Notre Parcours
              </h2>
              <p className="text-xl text-muted-foreground">
                Une croissance continue depuis notre création
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-xeta-blue via-xeta-blue-light to-xeta-blue" />
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative mb-12 last:mb-0">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card className="p-6 border-2 card-hover inline-block bg-gradient-to-br from-background to-xeta-blue-light/10">
                          <div className="text-3xl font-heading font-bold text-xeta-blue mb-2">
                            {milestone.year}
                          </div>
                          <p className="text-foreground font-medium">
                            {milestone.event}
                          </p>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-xeta-blue border-4 border-background shadow-lg animate-pulse" />
                      <div className="w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in-up">
                  Rejoignez Notre Aventure
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-100">
                  Ensemble, construisons l'avenir digital du Gabon
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
                  <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 group">
                    <Link href="/contact">
                      Démarrer un Projet
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-xeta-blue">
                    <Link href="/realisations">
                      Voir nos Réalisations
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