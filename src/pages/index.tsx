import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TypingAnimation } from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Sites web modernes et performants, adaptés à vos besoins professionnels.",
      href: "/services/developpement-web",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications mobiles iOS et Android natives et cross-platform.",
      href: "/services/developpement-mobile",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Hébergement Web",
      description: "Solutions d'hébergement fiables et sécurisées pour votre présence en ligne.",
      href: "/services/hebergement",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Nom de Domaine",
      description: "Enregistrement et gestion de noms de domaine pour votre identité digitale.",
      href: "/services/domaine",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Technologies de pointe pour des solutions ultra-rapides et efficaces",
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection maximale de vos données avec certificats SSL et sauvegardes automatiques",
    },
    {
      icon: Users,
      title: "Support Dédié 24/7",
      description: "Équipe technique réactive disponible à tout moment pour vous accompagner",
    },
    {
      icon: Award,
      title: "Expertise Locale",
      description: "Compréhension approfondie du marché gabonais et de ses spécificités",
    },
  ];

  const testimonials = [
    {
      name: "Marie Koumba",
      role: "Directrice Marketing",
      company: "Entreprise Gabonaise",
      content: "XETA Digital a transformé notre présence en ligne. Leur expertise technique et leur compréhension de nos besoins sont exceptionnelles. Notre site e-commerce génère maintenant 3x plus de ventes !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Jean-Pierre Obame",
      role: "CEO",
      company: "StartUp Tech Gabon",
      content: "L'application mobile développée par XETA Digital a dépassé nos attentes. Interface intuitive, performance excellente et accompagnement professionnel tout au long du projet.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      name: "Sophie Nguema",
      role: "Gérante",
      company: "Boutique en Ligne",
      content: "Service d'hébergement ultra-fiable et support client réactif. Mon site n'a jamais connu de panne depuis 2 ans. Je recommande vivement XETA Digital !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Next.js", logo: "▲" },
    { name: "Node.js", logo: "📗" },
    { name: "TypeScript", logo: "📘" },
    { name: "Python", logo: "🐍" },
    { name: "Flutter", logo: "🎯" },
    { name: "AWS", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation Gratuite",
      description: "Analyse de vos besoins et définition des objectifs",
      duration: "1-2 jours",
      icon: Target,
    },
    {
      step: "02",
      title: "Devis Détaillé",
      description: "Proposition technique et commerciale personnalisée",
      duration: "2-3 jours",
      icon: CheckCircle2,
    },
    {
      step: "03",
      title: "Développement",
      description: "Création de votre solution avec validations régulières",
      duration: "2-8 semaines",
      icon: Code2,
    },
    {
      step: "04",
      title: "Tests & Livraison",
      description: "Validation complète et mise en ligne de votre projet",
      duration: "3-5 jours",
      icon: Rocket,
    },
  ];

  return (
    <>
      <SEO
        title="XETA Digital Corp - Agence Web #1 au Gabon | Développement & Hébergement"
        description="Leader du digital au Gabon. Développement web & mobile, hébergement premium et domaines. +500 projets réalisés, satisfaction garantie. Devis gratuit en 24h !"
        image="/og-image.png"
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen overflow-hidden">
        {/* Hero Section Ultra-Dynamique */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Image d'arrière-plan */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/ChatGPT_Image_12_mai_2026_08_30_25.png)' }}
          />
          
          {/* Overlay sombre pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-xeta-blue/80 via-xeta-blue-dark/70 to-background/90" />
          
          {/* Effets de fond animés */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.15),transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(30,58,138,0.15),transparent)] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xeta-blue rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badge Entreprise Gabonaise */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 animate-bounce-slow">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                <span className="text-white font-semibold text-sm">🇬🇦 100% Entreprise Gabonaise - Leader du Digital</span>
                <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight animate-fade-in">
                Transformez Vos Idées en
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-xeta-blue-light via-white to-xeta-blue-light animate-gradient">
                  <TypingAnimation 
                    texts={[
                      "Sites Web Performants",
                      "Applications Mobile",
                      "Solutions E-commerce",
                      "Plateformes Digitales"
                    ]}
                  />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Agence digitale gabonaise de référence. Développement web & mobile, hébergement premium et noms de domaine. 
                <span className="font-bold text-xeta-blue-light"> Devis gratuit en 24h !</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 text-lg px-8 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group">
                  <Link href="/contact">
                    <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Démarrer Mon Projet Gratuit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-xeta-blue text-lg px-8 hover:scale-105 transition-all duration-300">
                  <Link href="/tarifs">
                    Voir Nos Tarifs
                  </Link>
                </Button>
              </div>

              {/* Preuves Sociales avec Compteurs Animés */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
                <div className="text-center space-y-2 animate-scale-in p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-white/80 text-sm md:text-base font-medium">Projets Livrés</div>
                </div>
                <div className="text-center space-y-2 animate-scale-in p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all" style={{ animationDelay: "100ms" }}>
                  <AnimatedCounter end={98} suffix="%" />
                  <div className="text-white/80 text-sm md:text-base font-medium">Clients Satisfaits</div>
                </div>
                <div className="text-center space-y-2 animate-scale-in p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all" style={{ animationDelay: "200ms" }}>
                  <AnimatedCounter end={24} suffix="/7" />
                  <div className="text-white/80 text-sm md:text-base font-medium">Support Client</div>
                </div>
                <div className="text-center space-y-2 animate-scale-in p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all" style={{ animationDelay: "300ms" }}>
                  <AnimatedCounter end={15} suffix="+ ans" />
                  <div className="text-white/80 text-sm md:text-base font-medium">D'Expérience</div>
                </div>
              </div>

              {/* Badges de Confiance */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2 text-sm">
                  ✓ Paiement Sécurisé SSL
                </Badge>
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2 text-sm">
                  ✓ Garantie Satisfaction 100%
                </Badge>
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-2 text-sm">
                  ✓ Devis Gratuit 24h
                </Badge>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Services avec Effets de Gradient */}
        <section className="section-spacing">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge className="bg-xeta-blue-light/10 text-xeta-blue border-xeta-blue/20">
                NOS SERVICES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                Solutions Digitales Complètes
              </h2>
              <p className="text-xl text-muted-foreground">
                Des services premium pour propulser votre entreprise dans l'ère digitale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group relative p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-xeta-blue overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <Link href={service.href} className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-xeta-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center text-xeta-blue font-medium group-hover:gap-2 transition-all">
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi XETA Digital */}
        <section className="section-spacing bg-gradient-to-br from-xeta-blue-light/10 via-transparent to-xeta-blue-light/5">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-xeta-blue-light/10 text-xeta-blue border-xeta-blue/20 mb-4">
                    POURQUOI NOUS CHOISIR
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    L'Excellence Digitale
                    <br />
                    <span className="gradient-text">Made in Gabon</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Premier acteur de la transformation digitale au Gabon, nous combinons expertise technique internationale et compréhension approfondie du marché local pour vous offrir des solutions sur mesure qui cartonnent.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <Card key={index} className="p-6 border-2 hover:border-xeta-blue hover:shadow-lg transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-xeta-blue to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-heading font-semibold mb-2">
                          {advantage.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </Card>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="group">
                    <Link href="/a-propos">
                      Notre Histoire
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/realisations">
                      Voir nos Réalisations
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Carte Stats Impressionnantes */}
                <Card className="p-8 border-2 border-xeta-blue bg-gradient-to-br from-xeta-blue/5 to-transparent">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-heading font-bold">Performance Garantie</h3>
                    <TrendingUp className="w-8 h-8 text-xeta-blue" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">99.9%</div>
                      <p className="text-sm text-muted-foreground">Uptime Garanti</p>
                    </div>
                    <div>
                      <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">&lt;2s</div>
                      <p className="text-sm text-muted-foreground">Temps de Chargement</p>
                    </div>
                    <div>
                      <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">A+</div>
                      <p className="text-sm text-muted-foreground">Score SEO</p>
                    </div>
                    <div>
                      <div className="text-4xl font-heading font-bold text-xeta-blue mb-2">SSL</div>
                      <p className="text-sm text-muted-foreground">Sécurité Maximale</p>
                    </div>
                  </div>
                </Card>

                {/* Technologies Maîtrisées */}
                <Card className="p-8 border-2">
                  <h3 className="text-xl font-heading font-bold mb-6">Technologies de Pointe</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl bg-muted/50 hover:bg-xeta-blue-light/10 hover:scale-110 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{tech.logo}</div>
                        <div className="text-xs font-medium text-muted-foreground group-hover:text-xeta-blue">{tech.name}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Clients Immersifs */}
        <section className="section-spacing">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge className="bg-xeta-blue-light/10 text-xeta-blue border-xeta-blue/20">
                TÉMOIGNAGES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                Ils Nous Font Confiance
              </h2>
              <p className="text-xl text-muted-foreground">
                Des centaines d'entreprises gabonaises satisfaites
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="p-8 border-2 hover:border-xeta-blue hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-xeta-blue to-blue-600 flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/realisations">
                  Voir Tous les Témoignages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Processus de Travail Timeline */}
        <section className="section-spacing bg-gradient-to-br from-xeta-blue-light/5 to-transparent">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge className="bg-xeta-blue-light/10 text-xeta-blue border-xeta-blue/20">
                NOTRE PROCESSUS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                De l'Idée au Succès
                <br />
                <span className="gradient-text">En 4 Étapes</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="p-8 border-2 hover:border-xeta-blue hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xeta-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-2xl font-heading font-bold group-hover:text-xeta-blue transition-colors">
                              {item.title}
                            </h3>
                            <Badge variant="secondary" className="flex-shrink-0">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Icon className="w-10 h-10 text-xeta-blue group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Prêt à commencer ? Obtenez votre devis gratuit en 24h
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Lancer Mon Projet Maintenant
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final Ultra-Vendeur */}
        <section className="section-spacing">
          <div className="container">
            <div className="relative overflow-hidden bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-blue-900 rounded-3xl p-12 md:p-16 text-white">
              {/* Effets de fond */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]" />
              
              <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Offre Spéciale - 20% de réduction ce mois !</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                  Prêt à Dominer le
                  <br />
                  Digital au Gabon ?
                </h2>

                <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                  Rejoignez les 500+ entreprises gabonaises qui ont boosté leur activité avec XETA Digital. Devis gratuit et sans engagement en 24h !
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90 text-lg px-8 shadow-2xl hover:scale-105 transition-all group">
                    <Link href="/contact">
                      <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Obtenir Mon Devis Gratuit
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-xeta-blue text-lg px-8 hover:scale-105 transition-all">
                    <Link href="/tarifs">
                      Voir Nos Tarifs
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Devis en 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Sans Engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Satisfaction Garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Support 24/7</span>
                  </div>
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