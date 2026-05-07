import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Key,
  Database,
  Globe,
  Server,
  FileCode,
  UserX,
  Eye,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export default function CybersecuriteArticle() {
  const article = {
    title: "Cybersécurité : Protéger Votre Site Web des Attaques",
    excerpt: "Les meilleures pratiques pour sécuriser votre présence en ligne",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    author: "Security Team",
    date: "15 Février 2026",
    readTime: "7 min",
    category: "Sécurité",
  };

  const threats = [
    {
      title: "Injection SQL",
      description: "Manipulation de bases de données via des formulaires non sécurisés",
      icon: Database,
      severity: "Critique",
      color: "destructive",
    },
    {
      title: "Cross-Site Scripting (XSS)",
      description: "Injection de scripts malveillants dans les pages web",
      icon: FileCode,
      severity: "Élevée",
      color: "warning",
    },
    {
      title: "Attaques DDoS",
      description: "Surcharge du serveur pour rendre le site inaccessible",
      icon: Server,
      severity: "Élevée",
      color: "warning",
    },
    {
      title: "Phishing et Ingénierie Sociale",
      description: "Vol d'identifiants par des techniques de manipulation",
      icon: UserX,
      severity: "Moyenne",
      color: "info",
    },
  ];

  const bestPractices = [
    {
      title: "Certificat SSL/TLS",
      description: "Activez HTTPS pour chiffrer les communications entre votre site et vos visiteurs. Au Gabon, c'est gratuit avec Let's Encrypt et essentiel pour la confiance des clients.",
      icon: Lock,
      steps: [
        "Obtenir un certificat SSL gratuit via Let's Encrypt",
        "Configurer votre serveur pour HTTPS uniquement",
        "Rediriger tout le trafic HTTP vers HTTPS",
        "Vérifier le certificat avec SSL Labs",
      ],
    },
    {
      title: "Mises à Jour Régulières",
      description: "Maintenez votre CMS, plugins et frameworks à jour. 60% des piratages au Gabon exploitent des vulnérabilités connues dans des versions obsolètes.",
      icon: RefreshCw,
      steps: [
        "Activer les mises à jour automatiques de sécurité",
        "Tester les mises à jour en environnement de développement",
        "Planifier des maintenances mensuelles",
        "Surveiller les bulletins de sécurité de vos outils",
      ],
    },
    {
      title: "Authentification Forte",
      description: "Renforcez l'accès à votre administration avec des mots de passe robustes et l'authentification à deux facteurs (2FA).",
      icon: Key,
      steps: [
        "Imposer des mots de passe de 12+ caractères",
        "Activer l'authentification à deux facteurs (2FA)",
        "Limiter les tentatives de connexion",
        "Utiliser un gestionnaire de mots de passe",
      ],
    },
    {
      title: "Sauvegardes Automatiques",
      description: "Programmez des sauvegardes quotidiennes de votre site et base de données. En cas d'attaque, vous pourrez restaurer rapidement votre site.",
      icon: Database,
      steps: [
        "Configurer des sauvegardes quotidiennes automatiques",
        "Stocker les sauvegardes hors site (cloud)",
        "Tester la restauration tous les mois",
        "Garder au moins 30 jours d'historique",
      ],
    },
    {
      title: "Pare-feu Applicatif (WAF)",
      description: "Un WAF filtre le trafic malveillant avant qu'il n'atteigne votre site. Solutions comme Cloudflare offrent une protection gratuite de base.",
      icon: Shield,
      steps: [
        "Activer Cloudflare ou un WAF similaire",
        "Configurer les règles de sécurité",
        "Bloquer les pays à risque si nécessaire",
        "Surveiller les tentatives d'attaque",
      ],
    },
    {
      title: "Surveillance et Monitoring",
      description: "Détectez les activités suspectes en temps réel avec des outils de monitoring et recevez des alertes immédiates.",
      icon: Eye,
      steps: [
        "Installer un système de monitoring (ex: UptimeRobot)",
        "Configurer des alertes email/SMS",
        "Analyser les logs d'accès régulièrement",
        "Surveiller les changements de fichiers",
      ],
    },
  ];

  const stats = [
    { number: "43%", label: "des cyberattaques ciblent les PME" },
    { number: "4.35M FCFA", label: "coût moyen d'une violation de données" },
    { number: "280 jours", label: "pour détecter une violation en moyenne" },
    { number: "95%", label: "des violations sont évitables" },
  ];

  const securityChecklist = [
    "Certificat SSL/TLS actif et valide",
    "Mots de passe admin forts + 2FA activé",
    "CMS et plugins à jour (moins de 30 jours)",
    "Sauvegardes automatiques quotidiennes testées",
    "Pare-feu applicatif (WAF) configuré",
    "Formulaires protégés contre les injections SQL",
    "Protection CSRF sur tous les formulaires",
    "Headers de sécurité configurés (CSP, X-Frame-Options)",
    "Logs d'accès et monitoring actifs",
    "Plan de réponse aux incidents documenté",
  ];

  return (
    <>
      <SEO
        title={`${article.title} | XETA Digital Corp`}
        description={article.excerpt}
        image={article.image}
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20">
        {/* Article Header */}
        <section className="relative py-20 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour au Blog
                </Button>
              </Link>

              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-destructive text-white px-4 py-2">
                  {article.category}
                </Badge>
                <span className="text-white/60">•</span>
                <div className="flex items-center text-white/80">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <span className="text-white/60">•</span>
                <div className="flex items-center text-white/80">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-white/90 mb-8">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-xeta-blue-light flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{article.author}</div>
                    <div className="text-white/60 text-sm">Expert en Cybersécurité</div>
                  </div>
                </div>

                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="section-spacing bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-b from-background to-xeta-blue-light/10">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-xeta-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* Introduction */}
              <div className="space-y-6 mb-16">
                <Alert className="border-xeta-blue bg-xeta-blue/5">
                  <ShieldAlert className="h-5 w-5 text-xeta-blue" />
                  <AlertDescription className="text-base">
                    <strong>Contexte Gabonais :</strong> Avec la digitalisation croissante au Gabon, 
                    les cyberattaques contre les sites web ont augmenté de 127% en 2025. Les PME sont 
                    particulièrement vulnérables car 68% n'ont aucune mesure de sécurité en place.
                  </AlertDescription>
                </Alert>

                <p className="text-lg leading-relaxed text-foreground">
                  Votre site web est la vitrine numérique de votre entreprise. Mais comme une boutique 
                  physique à Libreville ou Port-Gentil, elle peut être la cible de malfaiteurs. La 
                  différence ? Les cybercriminels opèrent 24/7, depuis n'importe où dans le monde.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  Dans cet article, nous allons explorer les menaces les plus courantes et vous donner 
                  des solutions concrètes pour protéger votre site web, adaptées au contexte gabonais.
                </p>
              </div>

              {/* Principales Menaces */}
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
                  <ShieldAlert className="w-8 h-8 text-destructive mr-3" />
                  Les Principales Menaces en 2026
                </h2>

                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  {threats.map((threat, index) => {
                    const Icon = threat.icon;
                    return (
                      <Card key={index} className="p-6 border-2 hover:border-destructive/50 transition-colors">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-destructive" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold">{threat.title}</h3>
                              <Badge variant="destructive" className="ml-2">
                                {threat.severity}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              {threat.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                <Alert className="mt-8 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <AlertDescription className="text-base text-amber-900 dark:text-amber-100">
                    <strong>Réalité Gabonaise :</strong> En 2025, 34% des sites web gabonais ont subi 
                    au moins une tentative d'attaque. Les secteurs les plus ciblés sont l'e-commerce, 
                    les services financiers et les sites gouvernementaux.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Meilleures Pratiques */}
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
                  <ShieldCheck className="w-8 h-8 text-green-600 mr-3" />
                  Les 6 Piliers de la Sécurité Web
                </h2>

                <div className="space-y-8 not-prose">
                  {bestPractices.map((practice, index) => {
                    const Icon = practice.icon;
                    return (
                      <Card key={index} className="p-8 border-2">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 rounded-2xl bg-xeta-blue/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-8 h-8 text-xeta-blue" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
                            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                              {practice.description}
                            </p>
                            <div className="space-y-3">
                              <div className="font-semibold text-sm uppercase tracking-wide text-xeta-blue mb-2">
                                Plan d'Action :
                              </div>
                              {practice.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start space-x-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-foreground">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Security Checklist */}
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-8">
                  Checklist de Sécurité : Évaluez Votre Site
                </h2>

                <Card className="p-8 bg-gradient-to-br from-xeta-blue/5 to-xeta-blue-light/5 border-2">
                  <p className="text-lg mb-6 text-foreground">
                    Parcourez cette liste et cochez les éléments déjà en place sur votre site. 
                    Si vous avez moins de 7/10, votre site est vulnérable.
                  </p>
                  <div className="space-y-4">
                    {securityChecklist.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                        <div className="w-6 h-6 rounded border-2 border-xeta-blue flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Coût de l'Inaction */}
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Le Coût de l'Inaction
                </h2>

                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Ignorer la sécurité de votre site web peut avoir des conséquences désastreuses 
                  pour votre entreprise au Gabon :
                </p>

                <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                  <Card className="p-6 border-2 border-destructive/20 bg-destructive/5">
                    <h3 className="text-xl font-bold mb-4 text-destructive">Impacts Financiers</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Perte de revenus pendant l'indisponibilité (moyenne : 3-7 jours)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Coûts de restauration : 2-8M FCFA en moyenne</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Amendes RGPD si données clients compromises</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Pertes de clients : 32% ne reviennent jamais</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-2 border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/10">
                    <h3 className="text-xl font-bold mb-4 text-amber-600">Impacts Réputationnels</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Perte de confiance des clients gabonais</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Mauvaise presse et bouche-à-oreille négatif</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Déclassement Google (pénalités SEO)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Difficulté à attirer de nouveaux clients</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <AlertDescription className="text-base text-green-900 dark:text-green-100">
                    <strong>Bonne nouvelle :</strong> 95% des violations de sécurité peuvent être 
                    évitées avec des mesures de base. Investir dans la sécurité coûte 10x moins cher 
                    que gérer une cyberattaque.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Conclusion */}
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Passez à l'Action Dès Aujourd'hui
                </h2>

                <p className="text-lg leading-relaxed text-foreground mb-6">
                  La cybersécurité n'est plus une option, c'est une nécessité pour toute entreprise 
                  gabonaise présente en ligne. Même les petits sites sont des cibles potentielles.
                </p>

                <p className="text-lg leading-relaxed text-foreground mb-8">
                  Commencez par les bases : activez HTTPS, mettez à jour vos systèmes, utilisez des 
                  mots de passe forts et configurez des sauvegardes automatiques. Ces 4 actions 
                  simples vous protègent déjà contre 70% des attaques courantes.
                </p>

                <Card className="p-8 bg-gradient-hero text-white">
                  <div className="flex items-start space-x-6">
                    <Shield className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        Besoin d'un Audit de Sécurité ?
                      </h3>
                      <p className="text-white/90 mb-6 text-lg">
                        XETA Digital Corp offre un audit de sécurité gratuit pour analyser les 
                        vulnérabilités de votre site web et vous proposer un plan d'action personnalisé.
                      </p>
                      <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                        Demander un Audit Gratuit
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="section-spacing bg-gradient-to-b from-background to-xeta-blue-light/10">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">
                Articles Similaires
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "React vs Vue.js : Quel Framework Choisir en 2026?",
                    category: "Technologie",
                    link: "/blog",
                  },
                  {
                    title: "10 Tendances du Design Web à Suivre en 2026",
                    category: "Design",
                    link: "/blog",
                  },
                  {
                    title: "E-commerce au Gabon : Les Clés du Succès",
                    category: "Business",
                    link: "/blog",
                  },
                ].map((article, index) => (
                  <Link key={index} href={article.link}>
                    <Card className="p-6 border-2 card-hover h-full">
                      <Badge variant="outline" className="mb-4">
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-4 hover:text-xeta-blue transition-colors">
                        {article.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="group p-0">
                        Lire l'Article
                        <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}