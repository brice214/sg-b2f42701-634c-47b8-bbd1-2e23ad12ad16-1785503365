import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Code2,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Realisations() {
  const projects = [
    {
      title: "TSANGOO SAAS",
      category: "Application SaaS",
      description: "Plateforme cloud de facturation et comptabilité pour PME gabonaises avec gestion multi-devises",
      image: "/tsangoo-accueil-site-web-gabon.png",
      technologies: ["Next.js", "TypeScript", "Cloud", "API"],
      results: ["Interface intuitive", "Gestion temps réel", "Conformité fiscale"],
      icon: Globe,
      link: "https://www.tsangoo.com/",
    },
    {
      title: "SCOFEES",
      category: "Plateforme Scolaire",
      description: "Plateforme de gestion des frais scolaires pour établissements de la zone CEMAC avec paiement mobile",
      image: "/SCOFEES-Plateforme-de-Gestion-des-Frais-Scolaires-CEMAC-05-17-2026_09_27_PM.png",
      technologies: ["Next.js", "Cloud", "Mobile Money", "Multi-pays"],
      results: ["Gestion simplifiée", "Paiements sécurisés", "Suivi en temps réel"],
      icon: Globe,
      link: "https://www.scofees.com/",
    },
    {
      title: "AFRILITT",
      category: "Place de Marché Académique",
      description: "Marketplace dédiée aux publications académiques et à la diffusion de la recherche scientifique africaine",
      image: "/AFRILITT.png",
      technologies: ["Next.js", "Cloud", "E-commerce", "Recherche"],
      results: ["Publications vérifiées", "Diffusion internationale", "Auteurs africains"],
      icon: Globe,
      link: "https://www.afrilitt.com/",
    },
    {
      title: "Site Vitrine Cabinet Juridique",
      category: "Site Vitrine",
      description: "Site web élégant et professionnel avec système de prise de rendez-vous",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      results: ["300% trafic organique", "Page 1 Google", "50+ leads/mois"],
      icon: Code2,
    },
    {
      title: "Plateforme Éducative en Ligne",
      category: "Application Web",
      description: "LMS complet avec vidéos, quiz et certification pour formations professionnelles",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
      results: ["1,000+ étudiants", "95% satisfaction", "200+ cours"],
      icon: Globe,
    },
    {
      title: "App Livraison de Repas",
      category: "Développement Mobile",
      description: "Solution complète restaurant, livreur et client avec géolocalisation en temps réel",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
      technologies: ["React Native", "Maps API", "Real-time"],
      results: ["5,000+ commandes", "30 min livraison", "4.7/5 étoiles"],
      icon: Smartphone,
    },
    {
      title: "Site Corporate Multilingue",
      category: "Site Vitrine",
      description: "Site institutionnel avec gestion multilingue et CMS personnalisé",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["Next.js", "i18n", "Headless CMS"],
      results: ["3 langues", "SEO optimisé", "Design premium"],
      icon: Globe,
    },
  ];

  const stats = [
    { number: "50+", label: "Projets Réalisés" },
    { number: "40+", label: "Clients Satisfaits" },
    { number: "5+", label: "Années d'Expérience" },
    { number: "99%", label: "Taux de Satisfaction" },
  ];

  return (
    <>
      <SEO
        title="Nos Réalisations - Portfolio XETA Digital Corp"
        description="Découvrez nos projets web et mobile au Gabon. Sites web, applications mobiles, e-commerce et plus. Portfolio de XETA Digital Corp."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Nos Réalisations
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Des projets qui transforment les entreprises gabonaises
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center border-2 card-hover">
                  <div className="text-5xl font-heading font-bold text-xeta-blue mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Portfolio de Projets
              </h2>
              <p className="text-xl text-muted-foreground">
                Des solutions digitales qui génèrent des résultats concrets
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="overflow-hidden border-2 card-hover group">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-xeta-blue flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-heading font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-xeta-blue-light text-xeta-blue text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                          Résultats
                        </h4>
                        <div className="space-y-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle2 className="w-5 h-5 text-xeta-blue flex-shrink-0" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {project.link && (
                        <Button asChild className="w-full">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visiter
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
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
                Votre Projet Sera le Prochain
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Transformons ensemble vos idées en succès digital
              </p>
              <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                <Link href="/contact">
                  Démarrer un Projet
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