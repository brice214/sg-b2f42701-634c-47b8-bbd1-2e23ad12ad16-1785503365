import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BlogSidebar } from "@/components/BlogSidebar";
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
  Server,
  FileCode,
  UserX,
  Eye,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";

export default function CybersecuriteArticle() {
  const article = {
    title: "Cybersécurité : Protéger Votre Site Web des Attaques en 2026",
    excerpt: "Guide complet des meilleures pratiques pour sécuriser votre présence en ligne au Gabon. Découvrez les menaces actuelles et les solutions concrètes pour protéger votre site web contre les cyberattaques.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    author: "XETA Security Team",
    authorRole: "Experts en Cybersécurité",
    date: "15 Février 2026",
    updatedDate: "15 Février 2026",
    readTime: "7 min",
    category: "Sécurité",
    tags: ["Cybersécurité", "Sécurité Web", "HTTPS", "WAF", "Protection", "Gabon"],
    url: "https://xeta-digital.com/blog/securite/cybersecurite-proteger-site-web",
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
        "Configurer votre serveur pour HTTPS uniquement. Un hébergeur fiable comme <a href='https://spiderhoster.com' target='_blank' rel='noopener noreferrer' className='text-xeta-blue hover:underline'>SpiderHoster</a> peut vous accompagner dans cette démarche.",
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

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(article.url);
    const text = encodeURIComponent(article.title);
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(article.url);
  };

  return (
    <>
      <SEO
        title="Cybersécurité Web 2026 : Protéger Votre Site des Cyberattaques | Guide Gabon"
        description="Guide complet de sécurité web pour entreprises gabonaises : SSL/TLS, WAF, authentification 2FA, sauvegardes, monitoring. Protégez votre site contre SQL injection, XSS, DDoS. Checklist + budget + plan d'action."
        image={article.image}
      />
      <Header />
      <FloatingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            image: article.image,
            datePublished: "2026-02-15T10:00:00+01:00",
            dateModified: article.updatedDate,
            author: {
              "@type": "Organization",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "XETA Digital Corp",
              logo: {
                "@type": "ImageObject",
                url: "https://xeta-digital.com/logo-xeta.png",
              },
            },
            description: article.excerpt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": article.url,
            },
            keywords: article.tags.join(", "),
            articleSection: article.category,
            inLanguage: "fr-GA",
          }),
        }}
      />

      <main className="min-h-screen pt-20">
        <section className="bg-muted/30 py-4 border-b">
          <div className="container">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <Link href="/blog?category=securite" className="hover:text-foreground transition-colors">
                {article.category}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Cybersécurité Web</span>
            </nav>
          </div>
        </section>

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
                {article.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-xeta-blue-light flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{article.author}</div>
                    <div className="text-white/60 text-sm">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <span className="text-white/60">•</span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
              <article className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="text-sm text-muted-foreground">
                    Partagez cet article :
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare("facebook")}
                      className="hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare("twitter")}
                      className="hover:bg-sky-500 hover:text-white hover:border-sky-500"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare("linkedin")}
                      className="hover:bg-blue-700 hover:text-white hover:border-blue-700"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyLink}
                      className="hover:bg-xeta-blue hover:text-white hover:border-xeta-blue"
                    >
                      <Link2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-gradient-to-b from-background to-xeta-blue-light/10 rounded-2xl border-2">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-xeta-blue mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none mb-12">
                  <Alert className="border-xeta-blue bg-xeta-blue/5 mb-8">
                    <ShieldAlert className="h-5 w-5 text-xeta-blue" />
                    <AlertDescription className="text-base">
                      <strong>Contexte Gabonais :</strong> Avec la digitalisation croissante au Gabon, 
                      les cyberattaques contre les sites web ont augmenté de 127% en 2025. Les PME sont 
                      particulièrement vulnérables car 68% n'ont aucune mesure de sécurité en place.
                    </AlertDescription>
                  </Alert>

                  <p className="text-lg leading-relaxed">
                    Votre site web est la vitrine numérique de votre entreprise. Mais comme une boutique 
                    physique à Libreville ou Port-Gentil, elle peut être la cible de malfaiteurs. La 
                    différence ? Les cybercriminels opèrent 24/7, depuis n'importe où dans le monde. 
                    Une fois votre site sécurisé, pensez aussi à optimiser votre <Link href="/blog/marketing/seo-local-dominer-recherches-gabon" className="text-xeta-blue hover:underline">visibilité locale sur Google</Link>.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Dans cet article, nous allons explorer les menaces les plus courantes et vous donner 
                    des solutions concrètes pour protéger votre site web, adaptées au contexte gabonais.
                  </p>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
                    <ShieldAlert className="w-8 h-8 text-destructive mr-3" />
                    Les Principales Menaces en 2026
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
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

                <div className="mb-16 not-prose">
                  <a 
                    href="https://www.tsangoo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                      <Image
                        src="/tsangoo-gabon-facturation-comptabilite.png"
                        alt="Tsangoo - Solution de facturation et comptabilité pour le Gabon"
                        width={1200}
                        height={400}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </a>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
                    <ShieldCheck className="w-8 h-8 text-green-600 mr-3" />
                    Les 6 Piliers de la Sécurité Web
                  </h2>

                  <div className="space-y-8">
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
                                    <span>{step}</span>
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

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Checklist de Sécurité : Évaluez Votre Site
                  </h2>

                  <Card className="p-8 bg-gradient-to-br from-xeta-blue/5 to-xeta-blue-light/5 border-2">
                    <p className="text-lg mb-6">
                      Parcourez cette liste et cochez les éléments déjà en place sur votre site. 
                      Si vous avez moins de 7/10, votre site est vulnérable.
                    </p>
                    <div className="space-y-4">
                      {securityChecklist.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                          <div className="w-6 h-6 rounded border-2 border-xeta-blue flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Le Coût de l'Inaction
                  </h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Ignorer la sécurité de votre site web peut avoir des conséquences désastreuses 
                    pour votre entreprise au Gabon :
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6 border-2 border-destructive/20 bg-destructive/5">
                      <h3 className="text-xl font-bold mb-4 text-destructive">Impacts Financiers</h3>
                      <ul className="space-y-2">
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
                      <ul className="space-y-2">
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

                <div className="mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Passez à l'Action Dès Aujourd'hui
                  </h2>

                  <p className="text-lg leading-relaxed mb-6">
                    La cybersécurité n'est plus une option, c'est une nécessité pour toute entreprise 
                    gabonaise présente en ligne. Même les petits sites sont des cibles potentielles.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
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

                <Card className="p-8 bg-muted/30 border-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full bg-xeta-blue flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{article.author}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{article.authorRole}</p>
                      <p className="text-base leading-relaxed">
                        Notre équipe de sécurité surveille les menaces émergentes et aide les entreprises 
                        gabonaises à protéger leur présence en ligne depuis plus de 8 ans.
                      </p>
                    </div>
                  </div>
                </Card>
              </article>

              <aside className="lg:col-span-4">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-b from-background to-xeta-blue-light/10">
          <div className="container">
            <div className="max-w-6xl mx-auto">
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
                ].map((relatedArticle, index) => (
                  <Link key={index} href={relatedArticle.link}>
                    <Card className="p-6 border-2 card-hover h-full">
                      <Badge variant="outline" className="mb-4">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-4 hover:text-xeta-blue transition-colors">
                        {relatedArticle.title}
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