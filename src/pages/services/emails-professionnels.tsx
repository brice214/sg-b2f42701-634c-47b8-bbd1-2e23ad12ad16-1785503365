import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Mail,
  Shield,
  Cloud,
  Users,
  CheckCircle2,
  ArrowRight,
  Lock,
  Smartphone,
  HardDrive,
  Zap,
  Globe,
  Calendar,
  FileText,
  Video,
} from "lucide-react";

export default function EmailsProfessionnels() {
  const plans = [
    {
      name: "Starter",
      price: "29 900",
      period: "FCFA/mois",
      description: "Pour les petites équipes",
      users: "15 boîtes email",
      features: [
        "15 boîtes email @votreentreprise.ga",
        "Stockage illimité",
        "Protection anti-spam & antivirus",
        "Webmail sécurisé",
        "Sauvegarde automatique",
        "MailChannels sortants",
        "Certificats SSL gratuits",
        "Support par email",
        "Synchronisation mobile",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "79 900",
      period: "FCFA/mois",
      description: "Idéal pour les PME gabonaises",
      users: "50 boîtes email",
      features: [
        "50 boîtes email @votreentreprise.com",
        "Stockage illimité",
        "Protection avancée anti-spam",
        "Migration depuis autre service",
        "Sauvegarde automatique",
        "MailChannels sortants",
        "Certificats SSL gratuits",
        "Support prioritaire 24/7",
        "Synchronisation tous appareils",
      ],
      popular: true,
    },
    {
      name: "Entreprise",
      price: "179 900",
      period: "FCFA/mois",
      description: "Solutions pour grandes structures",
      users: "150 boîtes email",
      features: [
        "150 boîtes email personnalisées",
        "Stockage illimité",
        "Domaine personnalisé",
        "Gestion centralisée",
        "Sauvegarde automatique",
        "MailChannels sortants",
        "Certificats SSL gratuits",
        "Support dédié 24/7",
        "Formation des équipes",
        "Conformité RGPD",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Chiffrement SSL/TLS, protection anti-phishing et antivirus intégré",
    },
    {
      icon: Cloud,
      title: "Accès Partout",
      description: "Consultez vos emails depuis n'importe quel appareil, à tout moment",
    },
    {
      icon: Users,
      title: "Collaboration Efficace",
      description: "Calendriers partagés, contacts d'équipe et gestion de projets",
    },
    {
      icon: Lock,
      title: "Conformité RGPD",
      description: "Hébergement sécurisé conforme aux normes de protection des données",
    },
  ];

  const advantages = [
    {
      icon: Smartphone,
      title: "Synchronisation Multi-appareils",
      description: "PC, Mac, smartphones et tablettes - vos emails toujours à jour",
    },
    {
      icon: HardDrive,
      title: "Stockage Généreux",
      description: "Grande capacité de stockage pour tous vos emails et pièces jointes",
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Serveurs ultra-rapides pour une messagerie fluide",
    },
  ];

  const useCases = [
    {
      title: "Entreprises Privées",
      description: "Renforcez votre image de marque avec des emails professionnels @votreentreprise.com",
      icon: Globe,
    },
    {
      title: "Administrations Publiques",
      description: "Solutions conformes aux exigences de sécurité et d'archivage gouvernementales",
      icon: Shield,
    },
    {
      title: "ONG et Associations",
      description: "Communication professionnelle pour vos projets et partenaires",
      icon: Users,
    },
  ];

  return (
    <>
      <SEO
        title="Emails Professionnels au Gabon - Messagerie Entreprise | XETA-DIGITAL CORP"
        description="Solutions d'emails professionnels pour entreprises et administrations gabonaises. Messagerie sécurisée, synchronisation multi-appareils, support 24/7. À partir de 2500 FCFA/mois."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Emails Professionnels</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Messagerie Professionnelle
                <br />
                <span className="text-xeta-blue-light">Pour Votre Entreprise</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Des adresses email professionnelles sécurisées pour renforcer votre image de marque et optimiser votre communication
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Choisir Mon Forfait
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/contact">
                    Demander un Devis
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
                Nos Forfaits Email
              </h2>
              <p className="text-xl text-muted-foreground">
                Solutions adaptées aux entreprises et administrations gabonaises
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
                    <p className="text-muted-foreground text-sm mb-2">
                      {plan.description}
                    </p>
                    <p className="text-xs font-semibold text-xeta-blue mb-4">
                      {plan.users}
                    </p>
                    <div className="flex items-end justify-center mb-2">
                      <span className="text-4xl font-heading font-bold text-xeta-blue">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1 text-sm">
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
                Pourquoi Choisir Nos Emails Pro ?
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
              <p className="text-xl text-muted-foreground">
                Tout ce dont votre entreprise a besoin pour communiquer efficacement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Pour Qui ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Des solutions adaptées à tous les secteurs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={index} className="p-8 text-center border-2 card-hover">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xeta-blue to-blue-600 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {useCase.description}
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
                Passez aux Emails Professionnels
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Améliorez votre image de marque avec des emails @votreentreprise.com
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Démarrer Maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-xeta-blue">
                  <Link href="/tarifs">
                    Comparer les Forfaits
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-75">
                Migration gratuite depuis votre messagerie actuelle · Support inclus · Sans engagement
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}