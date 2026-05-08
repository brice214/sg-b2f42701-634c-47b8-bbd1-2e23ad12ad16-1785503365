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
  ShoppingCart,
  TrendingUp,
  CreditCard,
  Truck,
  Smartphone,
  Users,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  DollarSign,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Package,
  Globe,
  Shield,
  BarChart3,
} from "lucide-react";

export default function EcommerceGabonArticle() {
  const article = {
    title: "E-commerce au Gabon : Les Clés du Succès en 2026",
    excerpt: "Guide complet pour lancer et développer une boutique en ligne rentable au Gabon. Découvrez les stratégies, outils et bonnes pratiques pour réussir dans le e-commerce gabonais.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    author: "XETA Business Team",
    authorRole: "Experts en E-commerce & Digital",
    date: "20 Février 2026",
    updatedDate: "20 Février 2026",
    readTime: "8 min",
    category: "Business",
    tags: ["E-commerce", "Gabon", "Vente en ligne", "Boutique", "Paiement mobile", "Livraison"],
    url: "https://xeta-digital.com/blog/business/ecommerce-gabon-cles-succes",
  };

  const stats = [
    { number: "2.8M", label: "internautes au Gabon (2026)" },
    { number: "78%", label: "utilisent un smartphone" },
    { number: "45%", label: "ont déjà acheté en ligne" },
    { number: "340%", label: "croissance du e-commerce en 3 ans" },
  ];

  const challenges = [
    {
      title: "Paiement en Ligne",
      description: "Faible taux de bancarisation et méfiance envers les paiements en ligne",
      icon: CreditCard,
      severity: "Majeur",
      solution: "Proposer Airtel Money, Moov Money et paiement à la livraison",
    },
    {
      title: "Logistique & Livraison",
      description: "Manque d'adresses précises et coûts de livraison élevés hors Libreville",
      icon: Truck,
      severity: "Majeur",
      solution: "Points relais + livraison zone par zone avec WhatsApp pour coordonner",
    },
    {
      title: "Confiance des Clients",
      description: "Peur des arnaques et des produits de mauvaise qualité",
      icon: Shield,
      severity: "Important",
      solution: "Photos réelles, avis clients, politique retour claire, service client réactif",
    },
    {
      title: "Connexion Internet",
      description: "Débit variable et coût des données mobiles",
      icon: Smartphone,
      severity: "Moyen",
      solution: "Site ultra-rapide, images optimisées, mode hors-ligne pour panier",
    },
  ];

  const successKeys = [
    {
      title: "1. Choisir les Bons Produits",
      description: "Vendez ce que les Gabonais recherchent vraiment en ligne. Évitez les produits disponibles partout à Libreville.",
      icon: Package,
      tips: [
        "Mode et accessoires (vêtements, chaussures, bijoux) - forte demande",
        "Électronique et gadgets (smartphones, accessoires, écouteurs)",
        "Beauté et cosmétiques (cheveux, maquillage, soins)",
        "Articles pour bébés (vêtements, jouets, puériculture)",
        "Livres et fournitures scolaires",
        "Produits importés difficiles à trouver localement",
      ],
      warning: "Évitez les produits alimentaires frais (logistique complexe) et les articles volumineux (frais de livraison prohibitifs).",
    },
    {
      title: "2. Site Web Rapide et Mobile-First",
      description: "78% de vos clients achèteront depuis leur smartphone. Votre site doit être ultra-rapide et facile à naviguer au doigt.",
      icon: Smartphone,
      tips: [
        "Design responsive optimisé pour mobile (gros boutons, navigation simple)",
        "Temps de chargement < 3 secondes (images optimisées, lazy loading)",
        "Panier visible en permanence avec compteur d'articles",
        "Processus de commande en 3 étapes max (panier → infos → confirmation)",
        "Formulaires courts avec validation en temps réel",
        "Intégration WhatsApp pour support client instantané",
      ],
      warning: "Un site lent = 70% de visiteurs qui abandonnent avant d'acheter. Testez sur un smartphone avec connexion 3G.",
    },
    {
      title: "3. Moyens de Paiement Adaptés",
      description: "Proposez les méthodes de paiement que les Gabonais utilisent vraiment. Mobile money + paiement à la livraison.",
      icon: CreditCard,
      tips: [
        "Airtel Money - le plus utilisé au Gabon (intégration API obligatoire)",
        "Moov Money - 2e opérateur en importance",
        "Paiement à la livraison - rassurant pour 1ère commande (60% l'utilisent)",
        "Cartes bancaires via passerelle sécurisée (Stripe, PayDunya)",
        "Afficher clairement les frais éventuels avant validation",
        "Confirmation automatique par SMS après paiement mobile",
      ],
      warning: "Ne forcez jamais le paiement en ligne uniquement - vous perdrez 50% de clients potentiels.",
    },
    {
      title: "4. Stratégie de Livraison Pragmatique",
      description: "La livraison est LE défi majeur au Gabon. Commencez simple et scalez progressivement.",
      icon: Truck,
      tips: [
        "Phase 1 : Libreville uniquement (zones définies : Centre, Akanda, Owendo, etc.)",
        "Tarifs fixes par zone (1500-3000 FCFA) plutôt que par produit",
        "Points de retrait stratégiques (pharmacies, boutiques partenaires)",
        "WhatsApp pour coordonner (envoyer position GPS, appeler à l'arrivée)",
        "Délai réaliste : 24-48h pour Libreville, 3-5 jours autres villes",
        "Phase 2 : Port-Gentil, Franceville via transporteurs routiers",
      ],
      warning: "Ne promettez pas de délais irréalistes. Mieux vaut sous-promettre et sur-livrer.",
    },
    {
      title: "5. Marketing Digital Ciblé",
      description: "Attirez des visiteurs qualifiés avec un budget maîtrisé. Focus sur Facebook, Instagram et Google.",
      icon: Target,
      tips: [
        "Facebook Ads : ciblage Gabon, 18-45 ans, intérêts pertinents (budget min : 50 000 FCFA/mois)",
        "Instagram : photos lifestyle de vos produits + influenceurs locaux (micro-influenceurs 10-50k followers)",
        "Google Shopping : annonces produits pour recherches 'acheter X au Gabon'",
        "WhatsApp Business : catalogue produits + statuts quotidiens",
        "Email : newsletter hebdo avec promotions exclusives",
        "Référencement local : optimiser pour 'boutique en ligne Gabon', 'achat X Libreville'. Pour approfondir votre stratégie SEO, consultez notre <Link href='/blog/marketing/seo-local-dominer-recherches-gabon' className='text-xeta-blue hover:underline'>guide complet du SEO local au Gabon</Link>. Des plateformes comme <a href='https://lavoixpartiote.com' target='_blank' rel='noopener noreferrer' className='text-xeta-blue hover:underline'>La Voix Patriote</a> peuvent également amplifier votre visibilité auprès du public gabonais.",
      ],
      warning: "Commencez petit, testez, mesurez, ajustez. Ne dépensez pas 500k FCFA en pub le 1er mois.",
    },
    {
      title: "6. Service Client Excellence",
      description: "Le service client fait toute la différence. Réponse rapide = confiance = fidélisation.",
      icon: Users,
      tips: [
        "WhatsApp Business avec réponses rapides (< 30 min pendant heures ouvrables)",
        "Ligne téléphonique dédiée (affichée clairement sur le site)",
        "FAQ complète : paiement, livraison, retours, garanties",
        "Politique de retour claire (7-14 jours, conditions précises)",
        "Suivi de commande en temps réel (SMS + page tracking)",
        "Avis clients visibles sur chaque produit (rassure les nouveaux)",
      ],
      warning: "Un client mécontent en parle à 10 personnes. Un client ravi devient ambassadeur gratuit.",
    },
  ];

  const platforms = [
    {
      name: "Solution Sur-Mesure (Recommandé)",
      price: "À partir de 1.5M FCFA",
      features: [
        "Design unique à votre marque",
        "Intégration paiement mobile gabonais",
        "Gestion stock et commandes",
        "SEO optimisé pour le Gabon",
        "Formation et support inclus",
        "Évolutif selon croissance",
      ],
      best: "Sérieux & long-terme",
    },
    {
      name: "WooCommerce (WordPress)",
      price: "300-800k FCFA setup",
      features: [
        "Open source, flexible",
        "Nombreux plugins disponibles",
        "Nécessite hébergement performant",
        "Maintenance technique requise",
        "Courbe d'apprentissage",
        "Extensions payantes pour mobile money",
      ],
      best: "Budget moyen avec compétences tech",
    },
    {
      name: "Shopify",
      price: "45-130k FCFA/mois",
      features: [
        "Hébergement inclus, rapide",
        "Interface intuitive",
        "Apps pour mobile money (limitées)",
        "Frais de transaction 2%",
        "En dollars (risque change)",
        "Dépendance plateforme",
      ],
      best: "Démarrage rapide sans tech",
    },
  ];

  const timeline = [
    {
      phase: "Mois 1-2 : Fondations",
      tasks: [
        "Validation produit : enquête auprès de 50+ personnes",
        "Choix plateforme et développement site",
        "Setup paiement mobile et logistique",
        "Photos professionnelles des produits",
        "Rédaction descriptions et politiques",
      ],
    },
    {
      phase: "Mois 3-4 : Lancement",
      tasks: [
        "Tests utilisateurs (10 bêta-testeurs)",
        "Campagne lancement (réseaux sociaux + influenceurs)",
        "Premières commandes avec suivi rapproché",
        "Ajustements basés sur retours clients",
        "Début newsletter et contenu blog",
      ],
    },
    {
      phase: "Mois 5-6 : Croissance",
      tasks: [
        "Analyse données : produits stars, taux conversion",
        "Expansion catalogue (produits complémentaires)",
        "Programme fidélité ou parrainage",
        "Élargissement zones de livraison",
        "Partenariats (influenceurs, boutiques)",
      ],
    },
    {
      phase: "Mois 7-12 : Scale",
      tasks: [
        "Automatisation (emails, gestion stock)",
        "Recrutement (service client, livreur)",
        "Campagnes publicitaires optimisées",
        "Expansion vers Port-Gentil, Franceville",
        "App mobile si volume justifie",
      ],
    },
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
        title="E-commerce au Gabon : Les Clés du Succès en 2026 | Guide Complet PME"
        description="Guide complet e-commerce Gabon 2026 : paiement mobile (Airtel/Moov Money), livraison, plateforme (WooCommerce/Shopify), budget 1-3M FCFA. Stratégies éprouvées pour PME gabonaises + checklist + roadmap 12 mois."
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
            datePublished: "2026-02-20T10:00:00+01:00",
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
              <Link href="/blog?category=business" className="hover:text-foreground transition-colors">
                {article.category}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">E-commerce Gabon</span>
            </nav>
          </div>
        </section>

        <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.2),transparent)]" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Retour au Blog
                </Button>
              </Link>

              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-green-600 text-white px-4 py-2">
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
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-gradient-to-b from-background to-green-50 dark:to-green-950/20 rounded-2xl border-2">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none mb-12">
                  <Alert className="border-green-600 bg-green-50 dark:bg-green-950/20 mb-8">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-base text-green-900 dark:text-green-100">
                      <strong>Marché en Pleine Expansion :</strong> Le e-commerce au Gabon a connu une croissance 
                      de 340% entre 2023 et 2026. Avec 2.8M d'internautes et 78% de taux de pénétration mobile, 
                      c'est LE moment de se lancer. Les pionniers d'aujourd'hui seront les leaders de demain.
                    </AlertDescription>
                  </Alert>

                  <p className="text-lg leading-relaxed">
                    Vous rêvez de lancer votre boutique en ligne au Gabon ? Vous n'êtes pas seul. Chaque mois, 
                    des centaines de Gabonais franchissent le pas du e-commerce. Certains réussissent brillamment, 
                    d'autres abandonnent après quelques mois.
                  </p>

                  <p className="text-lg leading-relaxed">
                    La différence ? Une stratégie solide, des outils adaptés au contexte gabonais, et une exécution 
                    sans faille. Ce guide vous donne toutes les clés pour construire un e-commerce rentable et durable 
                    au Gabon.
                  </p>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
                    <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
                    Les 4 Défis Majeurs (et Leurs Solutions)
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {challenges.map((challenge, index) => {
                      const Icon = challenge.icon;
                      return (
                        <Card key={index} className="p-6 border-2 hover:border-amber-500/50 transition-colors">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-amber-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">{challenge.title}</h3>
                                <Badge variant="outline" className="ml-2 border-amber-500 text-amber-600">
                                  {challenge.severity}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-3">
                                {challenge.description}
                              </p>
                              <div className="pt-3 border-t">
                                <div className="text-sm font-semibold text-green-600 mb-1">Solution :</div>
                                <p className="text-sm">{challenge.solution}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>

                  <Alert className="border-xeta-blue bg-xeta-blue/5">
                    <Lightbulb className="h-5 w-5 text-xeta-blue" />
                    <AlertDescription className="text-base">
                      <strong>Conseil Pro :</strong> Ne voyez pas ces défis comme des obstacles insurmontables. 
                      Ce sont des barrières à l'entrée qui protègent votre marché. Les e-commerçants qui maîtrisent 
                      ces 4 aspects dominent leur niche au Gabon.
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
                    <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
                    Les 6 Piliers du Succès E-commerce au Gabon
                  </h2>

                  <div className="space-y-12">
                    {successKeys.map((key, index) => {
                      const Icon = key.icon;
                      return (
                        <div key={index}>
                          <Card className="p-8 border-2">
                            <div className="flex items-start space-x-6 mb-6">
                              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-950/50 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-8 h-8 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3">{key.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                  {key.description}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-3 mb-6">
                              <div className="font-semibold text-sm uppercase tracking-wide text-green-600 mb-3">
                                Actions Concrètes :
                              </div>
                              {key.tips.map((tip, tipIndex) => (
                                <div key={tipIndex} className="flex items-start space-x-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{tip}</span>
                                </div>
                              ))}
                            </div>

                            <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                              <AlertTriangle className="h-4 w-4 text-amber-600" />
                              <AlertDescription className="text-sm text-amber-900 dark:text-amber-100">
                                <strong>Attention :</strong> {key.warning}
                              </AlertDescription>
                            </Alert>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Quelle Plateforme Choisir ?
                  </h2>

                  <p className="text-lg leading-relaxed mb-8">
                    Le choix de votre plateforme e-commerce dépend de votre budget, compétences techniques, 
                    et ambitions. Voici les 3 options principales au Gabon :
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {platforms.map((platform, index) => (
                      <Card key={index} className="p-6 border-2 hover:border-green-600/50 transition-colors">
                        <div className="mb-4">
                          <Badge className="bg-green-600 text-white mb-3">
                            {platform.best}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                          <div className="text-2xl font-bold text-green-600">{platform.price}</div>
                        </div>

                        <div className="space-y-3">
                          {platform.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Alert className="mt-8 border-xeta-blue bg-xeta-blue/5">
                    <Lightbulb className="h-5 w-5 text-xeta-blue" />
                    <AlertDescription className="text-base">
                      <strong>Notre Recommandation :</strong> Si vous êtes sérieux et visez le long-terme, 
                      investissez dans une solution sur-mesure. Elle s'adaptera à votre croissance et vous 
                      appartiendra à 100%. XETA Digital Corp développe des e-commerces clés-en-main optimisés 
                      pour le marché gabonais. N'oubliez pas également de <Link href="/blog/securite/cybersecurite-proteger-site-web" className="text-xeta-blue hover:underline">sécuriser votre boutique en ligne</Link> dès le départ.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Roadmap : De 0 à Rentable en 12 Mois
                  </h2>

                  <div className="space-y-6">
                    {timeline.map((period, index) => (
                      <Card key={index} className="p-6 border-l-4 border-l-green-600">
                        <h3 className="text-xl font-bold mb-4 text-green-600">{period.phase}</h3>
                        <ul className="space-y-2">
                          {period.tasks.map((task, tIndex) => (
                            <li key={tIndex} className="flex items-start space-x-3">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Budget Réaliste pour Démarrer
                  </h2>

                  <Card className="p-8 bg-gradient-to-br from-green-50 to-xeta-blue-light/5 dark:from-green-950/20 dark:to-xeta-blue-light/5 border-2">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                          Budget Minimum (Lean Start)
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Site web basique</span>
                            <span className="font-semibold">500k FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Photos produits (smartphone)</span>
                            <span className="font-semibold">50k FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Stock initial (30 produits)</span>
                            <span className="font-semibold">300k FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Marketing mois 1-3</span>
                            <span className="font-semibold">150k FCFA</span>
                          </li>
                          <li className="flex justify-between pt-2 border-t font-bold text-base">
                            <span>TOTAL</span>
                            <span className="text-green-600">1M FCFA</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <BarChart3 className="w-6 h-6 text-xeta-blue mr-2" />
                          Budget Confortable (Croissance Rapide)
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Site web professionnel</span>
                            <span className="font-semibold">1.5M FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Photos pro + vidéos</span>
                            <span className="font-semibold">200k FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Stock initial (100 produits)</span>
                            <span className="font-semibold">1M FCFA</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Marketing mois 1-3</span>
                            <span className="font-semibold">500k FCFA</span>
                          </li>
                          <li className="flex justify-between pt-2 border-t font-bold text-base">
                            <span>TOTAL</span>
                            <span className="text-xeta-blue">3.2M FCFA</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="border-green-600 bg-green-100 dark:bg-green-950/50">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <AlertDescription className="text-base text-green-900 dark:text-green-100">
                        <strong>ROI Attendu :</strong> Avec une bonne exécution, attendez-vous à être rentable 
                        (couvrir vos coûts mensuels) en 4-6 mois. Les e-commerces bien gérés au Gabon génèrent 
                        entre 2M et 10M FCFA/mois après 12 mois d'opération.
                      </AlertDescription>
                    </Alert>
                  </Card>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Conclusion : Votre Succès Commence Maintenant
                  </h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Le e-commerce au Gabon n'est plus une expérimentation risquée — c'est une opportunité 
                    concrète pour les entrepreneurs qui osent. Les défis existent, mais les solutions aussi.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Ne visez pas la perfection dès le jour 1. Commencez avec un catalogue limité, une zone 
                    de livraison restreinte, et apprenez de chaque commande. Les géants d'aujourd'hui ont 
                    tous commencé petit. La différence ? Ils ont commencé.
                  </p>

                  <Card className="p-8 bg-gradient-hero text-white">
                    <div className="flex items-start space-x-6">
                      <ShoppingCart className="w-12 h-12 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold mb-3">
                          Prêt à Lancer Votre E-commerce ?
                        </h3>
                        <p className="text-white/90 mb-6 text-lg">
                          XETA Digital Corp vous accompagne de A à Z : stratégie, développement, intégration 
                          paiement mobile, formation, et support continu. Parlons de votre projet.
                        </p>
                        <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                          Obtenir un Devis Gratuit
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-8 bg-muted/30 border-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{article.author}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{article.authorRole}</p>
                      <p className="text-base leading-relaxed">
                        Notre équipe accompagne les entrepreneurs gabonais dans leur transformation digitale 
                        depuis 2018. Nous avons aidé plus de 50 e-commerces à se lancer et croître au Gabon.
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

        <section className="section-spacing bg-gradient-to-b from-background to-green-50 dark:to-green-950/20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">
                Articles Similaires
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cybersécurité : Protéger Votre Site Web des Attaques",
                    category: "Sécurité",
                    link: "/blog/securite/cybersecurite-proteger-site-web",
                  },
                  {
                    title: "SEO Local : Dominer les Recherches au Gabon",
                    category: "Marketing",
                    link: "/blog",
                  },
                  {
                    title: "Guide Complet : Créer une Application Mobile Performante",
                    category: "Développement",
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