import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Server,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Sites web modernes et performants, adaptés à vos besoins professionnels.",
      href: "/services/developpement-web",
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications mobiles iOS et Android natives et cross-platform.",
      href: "/services/developpement-mobile",
    },
    {
      icon: Server,
      title: "Hébergement Web",
      description: "Solutions d'hébergement fiables et sécurisées pour votre présence en ligne.",
      href: "/services/hebergement",
    },
    {
      icon: Globe,
      title: "Nom de Domaine",
      description: "Enregistrement et gestion de noms de domaine pour votre identité digitale.",
      href: "/services/domaine",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Performance",
      description: "Technologies de pointe pour des solutions rapides et efficaces",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Protection optimale de vos données et de vos utilisateurs",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Support technique réactif et formation personnalisée",
    },
  ];

  const stats = [
    { value: "50+", label: "Projets Réalisés" },
    { value: "40+", label: "Clients Satisfaits" },
    { value: "5+", label: "Années d'Expérience" },
    { value: "100%", label: "Engagement Qualité" },
  ];

  return (
    <>
      <SEO
        title="XETA Digital Corp - Agence Web Gabon | Développement & Hébergement"
        description="Agence digitale gabonaise spécialisée en développement web et mobile, hébergement web et enregistrement de noms de domaine. Transformez vos idées en solutions numériques."
        image="/og-image.png"
      />
      <Header />

      <main className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.1),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(30,58,138,0.1),transparent)] pointer-events-none" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
                Votre Partenaire Digital
                <br />
                <span className="text-xeta-blue-light">au Gabon</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Développement web & mobile, hébergement et domaines. Nous transformons vos idées en solutions numériques performantes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 text-lg px-8">
                  <Link href="/contact">
                    Démarrer un Projet
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue text-lg px-8">
                  <Link href="/services/developpement-web">
                    Nos Services
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                Nos Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Des solutions digitales complètes pour propulser votre entreprise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-xeta-blue group cursor-pointer"
                  >
                    <Link href={service.href}>
                      <div className="w-16 h-16 rounded-2xl bg-xeta-blue-light flex items-center justify-center mb-6 group-hover:bg-xeta-blue transition-colors">
                        <Icon className="w-8 h-8 text-xeta-blue group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-xeta-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-xeta-blue font-medium group-hover:gap-2 transition-all">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-br from-xeta-blue-light/30 to-transparent">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  Pourquoi Choisir{" "}
                  <span className="gradient-text">XETA Digital</span> ?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Leader de l'innovation digitale au Gabon, nous combinons expertise technique et compréhension des enjeux locaux pour vous offrir des solutions sur mesure.
                </p>
                
                <div className="space-y-6 pt-4">
                  {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-xeta-blue flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold mb-2">
                            {advantage.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button asChild size="lg" className="mt-6">
                  <Link href="/a-propos">
                    Découvrir notre histoire
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="p-8 border-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-lg italic mb-4">
                    "XETA Digital a transformé notre présence en ligne. Leur expertise et leur professionnalisme sont remarquables."
                  </p>
                  <p className="font-semibold">Client Satisfait</p>
                  <p className="text-sm text-muted-foreground">Entreprise Gabonaise</p>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center border-2">
                    <div className="text-3xl font-heading font-bold text-xeta-blue mb-2">
                      99%
                    </div>
                    <p className="text-sm text-muted-foreground">Satisfaction Client</p>
                  </Card>
                  <Card className="p-6 text-center border-2">
                    <div className="text-3xl font-heading font-bold text-xeta-blue mb-2">
                      24/7
                    </div>
                    <p className="text-sm text-muted-foreground">Support Disponible</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Prêt à Lancer Votre Projet ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Obtenir un Devis Gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/realisations">
                    Voir nos Réalisations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}