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
  Code2,
  Zap,
  Shield,
  Smartphone,
  Search,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Rocket,
  Award,
  Layers,
  Database,
} from "lucide-react";

export default function DeveloppementWeb() {
  const features = [
    {
      icon: Code2,
      title: "Code de Qualité",
      description: "Standards professionnels, maintenabilité garantie",
    },
    {
      icon: Smartphone,
      title: "100% Responsive",
      description: "Parfait sur mobile, tablette et desktop",
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Vitesse de chargement ultra-rapide",
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "SSL, protection contre les attaques",
    },
    {
      icon: Search,
      title: "SEO Avancé",
      description: "Optimisé pour les moteurs de recherche",
    },
    {
      icon: TrendingUp,
      title: "Évolutif",
      description: "Architecture scalable pour votre croissance",
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse & Stratégie",
      description: "Comprendre vos besoins et définir la roadmap",
      duration: "1-2 jours",
    },
    {
      number: "02",
      title: "Design UX/UI",
      description: "Maquettes et prototypes interactifs",
      duration: "3-5 jours",
    },
    {
      number: "03",
      title: "Développement",
      description: "Codage professionnel et tests rigoureux",
      duration: "2-4 semaines",
    },
    {
      number: "04",
      title: "Tests & QA",
      description: "Validation complète multi-navigateurs",
      duration: "3-5 jours",
    },
    {
      number: "05",
      title: "Déploiement",
      description: "Mise en ligne et formation",
      duration: "1-2 jours",
    },
    {
      number: "06",
      title: "Support",
      description: "Maintenance et évolutions continues",
      duration: "Continu",
    },
  ];

  const portfolioExamples = [
    {
      title: "E-commerce Mode",
      category: "Boutique en ligne",
      tech: ["React", "Node.js", "Stripe"],
      results: "+250% ventes en 6 mois",
    },
    {
      title: "Plateforme SaaS",
      category: "Application web",
      tech: ["Next.js", "PostgreSQL", "AWS"],
      results: "1000+ utilisateurs actifs",
    },
    {
      title: "Site Vitrine Premium",
      category: "Corporate",
      tech: ["Next.js", "Tailwind", "Vercel"],
      results: "Score PageSpeed 98/100",
    },
  ];

  return (
    <>
      <SEO
        title="Développement Web au Gabon | Sites Modernes et Performants - XETA-DIGITAL CORP"
        description="Création de sites web professionnels, e-commerce et applications web sur mesure au Gabon. React, Next.js, performance optimale. Devis gratuit."
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Solutions Web Sur Mesure
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
                Développement Web
                <span className="block text-xeta-blue-light mt-2">Ultra-Performant</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Sites web modernes, rapides et sécurisés qui transforment vos visiteurs en clients. Expertise technique + Design premium.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 shadow-xl group">
                  <Link href="/contact">
                    Démarrer Mon Projet
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/realisations">
                    Voir Nos Réalisations
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Devis Gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Garantie Satisfait</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Avantages</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Pourquoi Choisir XETA-DIGITAL CORP ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une expertise technique pointue au service de votre réussite digitale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 border-2 card-hover group"
                  >
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
              <Badge className="mb-4">Technologies</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Stack Technologique Moderne
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous maîtrisons les dernières technologies web pour des résultats optimaux
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="p-6 text-center card-hover group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-hero/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-hero transition-colors">
                    <Globe className="w-8 h-8 text-xeta-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Processus</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Notre Méthodologie Éprouvée
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un processus structuré pour garantir la réussite de votre projet
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 mb-12 group"
                >
                  {index !== processSteps.length - 1 && (
                    <div className="absolute left-[30px] top-[60px] w-0.5 h-full bg-gradient-to-b from-xeta-blue to-transparent" />
                  )}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <Card className="flex-1 p-6 border-2 card-hover">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-heading font-bold">
                        {step.title}
                      </h3>
                      <Badge variant="outline" className="text-xeta-blue border-xeta-blue">
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/20">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <Badge className="mb-4">Portfolio</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Projets Réalisés
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des résultats concrets pour nos clients gabonais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {portfolioExamples.map((project, index) => (
                <Card key={index} className="overflow-hidden border-2 card-hover group">
                  <div className="h-48 bg-gradient-to-br from-xeta-blue to-xeta-blue-dark relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="w-5 h-5" />
                        <span className="font-semibold">{project.results}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/realisations">
                  Voir Tous Nos Projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
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
                  Prêt à Transformer Votre Présence en Ligne ?
                </h2>
                <p className="text-xl max-w-2xl mx-auto opacity-90">
                  Obtenez un devis gratuit et personnalisé en moins de 24h. Notre équipe d'experts est à votre écoute.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                    <Link href="/contact">
                      Demander un Devis Gratuit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/tarifs">
                      Voir les Tarifs
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