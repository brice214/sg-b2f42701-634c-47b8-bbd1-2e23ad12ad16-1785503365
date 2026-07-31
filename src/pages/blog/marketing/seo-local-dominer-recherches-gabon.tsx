import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Star,
  Users,
  Calendar,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Target,
  Smartphone,
  FileText,
  BarChart3,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SEOLocalGabon() {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SEO Local : Dominer les Recherches au Gabon",
    "description": "Guide complet pour optimiser votre visibilité locale sur Google.ga et attirer plus de clients gabonais grâce au SEO local.",
    "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
    "author": {
      "@type": "Organization",
      "name": "XETA DIGITAL CORP",
      "url": "https://xeta-digital.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "XETA DIGITAL CORP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xeta-digital.com/logo-xeta.png"
      }
    },
    "datePublished": "2026-03-01",
    "dateModified": "2026-05-08",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://xeta-digital.com/blog/marketing/seo-local-dominer-recherches-gabon"
    },
    "keywords": "SEO local, Gabon, Google My Business, référencement local, visibilité en ligne, marketing digital Gabon, SEO Libreville, recherches locales",
    "articleSection": "Marketing",
    "wordCount": 2800
  };

  return (
    <>
      <SEO 
        title="SEO Local Gabon : Guide Complet 2026 | Dominer Google.ga"
        description="Stratégies éprouvées pour atteindre la première page Google.ga : Google My Business, avis clients, citations NAP, contenu local. Guide complet pour PME gabonaises avec budget et plan d'action 90 jours."
        image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80"
        url="https://xeta-digital.com/blog/marketing/seo-local-dominer-recherches-gabon"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-xeta-blue/5 via-xeta-orange/5 to-background" />
          
          <div className="container mx-auto px-4 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-xeta-blue transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-xeta-blue transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog?category=Marketing" className="hover:text-xeta-blue transition-colors">
                Marketing
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">SEO Local au Gabon</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 rounded-full px-4 py-1">
                <Tag className="w-3 h-3 mr-2" />
                Marketing Digital
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-xeta-blue to-xeta-orange bg-clip-text text-transparent">
                SEO Local : Dominer les Recherches au Gabon
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stratégies pour apparaître en première page sur Google.ga et attirer des clients gabonais
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  1 Mars 2026
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  8 min de lecture
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Marketing Team
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center justify-center gap-3 mb-12">
                <span className="text-sm text-muted-foreground">Partager :</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('SEO Local : Dominer les Recherches au Gabon')}`, '_blank')}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={handleCopyLink}
                >
                  {copiedLink ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80"
                  alt="SEO Local au Gabon - Optimisation Google My Business"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  {/* Introduction */}
                  <div className="mb-16">
                    <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                      Dans un marché gabonais de plus en plus digitalisé, <strong>73% des consommateurs</strong> 
                      recherchent des produits et services locaux sur Google avant de prendre une décision d'achat. 
                      Si votre entreprise n'apparaît pas dans les premiers résultats, vous perdez des clients 
                      potentiels au profit de vos concurrents.
                    </p>

                    <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                      Le <strong>SEO local</strong> n'est plus une option, c'est une nécessité pour toute entreprise 
                      qui souhaite attirer des clients dans sa zone géographique. Ce guide vous révèle les stratégies 
                      éprouvées pour dominer les recherches locales au Gabon. Pour une approche complète de votre présence digitale, 
                      consultez également notre guide sur <Link href="/blog/business/ecommerce-gabon-cles-succes" className="text-xeta-blue hover:underline">l'e-commerce au Gabon</Link>.
                    </p>

                    <Alert className="mt-8 border-xeta-blue bg-xeta-blue/5">
                      <Target className="h-5 w-5 text-xeta-blue" />
                      <AlertDescription className="text-base">
                        <strong>Stat Clé :</strong> Les recherches avec intention locale (ex: "restaurant Libreville", 
                        "coiffeur Glass") ont augmenté de <strong>+156% au Gabon en 2025</strong>. 
                        88% des recherches mobiles locales conduisent à une visite ou un appel dans les 24h.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Pourquoi le SEO Local */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-xeta-orange/10 flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-xeta-orange" />
                      </div>
                      Pourquoi le SEO Local est Crucial au Gabon
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <Card className="p-6 border-2 hover:border-xeta-blue transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center mb-4">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Visibilité Immédiate</h3>
                        <p className="text-muted-foreground">
                          Apparaissez devant des clients prêts à acheter dans votre zone. 
                          Les résultats locaux dominent la première page Google.
                        </p>
                      </Card>

                      <Card className="p-6 border-2 hover:border-xeta-blue transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-4">
                          <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Trafic Qualifié</h3>
                        <p className="text-muted-foreground">
                          Attirez des prospects géolocalisés avec une intention d'achat élevée. 
                          Taux de conversion 3x supérieur au trafic générique.
                        </p>
                      </Card>

                      <Card className="p-6 border-2 hover:border-xeta-blue transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-4">
                          <Smartphone className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Mobile-First</h3>
                        <p className="text-muted-foreground">
                          82% des recherches locales au Gabon se font sur mobile. 
                          Google privilégie les résultats locaux sur smartphone.
                        </p>
                      </Card>

                      <Card className="p-6 border-2 hover:border-xeta-blue transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center mb-4">
                          <Star className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Crédibilité Locale</h3>
                        <p className="text-muted-foreground">
                          Une fiche Google optimisée avec avis positifs renforce la confiance. 
                          92% des consommateurs lisent les avis avant de visiter.
                        </p>
                      </Card>
                    </div>

                    <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <AlertDescription className="text-base text-amber-900 dark:text-amber-100">
                        <strong>Opportunité Gabonaise :</strong> Seulement 31% des entreprises gabonaises 
                        ont optimisé leur fiche Google My Business. La compétition est faible, 
                        c'est le moment idéal pour vous positionner.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Les 7 Piliers du SEO Local */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-xeta-blue/10 flex items-center justify-center mr-3">
                        <CheckCircle2 className="w-5 h-5 text-xeta-blue" />
                      </div>
                      Les 7 Piliers du SEO Local Gagnant
                    </h2>

                    {/* Pilier 1 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Google My Business : Votre Vitrine Locale</h3>
                          <p className="text-muted-foreground mb-4">
                            Votre fiche Google My Business (GMB) est le cœur de votre stratégie SEO local. 
                            C'est la première chose que vos clients voient sur Google Maps et dans les résultats de recherche.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6 mb-4">
                            <h4 className="font-semibold mb-3 text-lg">✅ Checklist GMB Optimisée :</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Nom exact</strong> : "Restaurant Le Diplomate Libreville" (pas de keywords stuffing)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Catégorie principale</strong> précise + 5-9 catégories secondaires</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Adresse complète</strong> : quartier, avenue, point de repère (ex: "Face au marché Mont-Bouët")</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Horaires exacts</strong> : mise à jour hebdomadaire, jours fériés compris</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Téléphone local</strong> : numéro Airtel/Moov gabonais (pas de WhatsApp)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Site web</strong> optimisé mobile avec URL trackée (UTM parameters)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Description 750 caractères</strong> : services + quartier + mots-clés naturels</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>20+ photos haute qualité</strong> : façade, intérieur, équipe, produits, logo</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Attributs</strong> : paiement mobile money, parking, WiFi, livraison, etc.</span>
                              </li>
                            </ul>
                          </div>

                          <Alert className="border-blue-500 bg-blue-50 dark:bg-blue-950/20">
                            <Search className="h-5 w-5 text-blue-600" />
                            <AlertDescription className="text-base text-blue-900 dark:text-blue-100">
                              <strong>Astuce Pro :</strong> Publiez 3-4 posts GMB par semaine (offres, événements, actualités). 
                              Google privilégie les fiches actives. Utilisez des mots-clés locaux : "Libreville", "Port-Gentil", 
                              "Franceville", noms de quartiers. Pour aller plus loin, découvrez ce <a href="https://digitalgabonews.com/audit-seo-le-guide-complet-pour-ameliorer-votre-referencement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">guide complet d'audit SEO</a>.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
                    </div>

                    {/* Pilier 2 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Avis Clients : L'Or du SEO Local</h3>
                          <p className="text-muted-foreground mb-4">
                            Les avis Google sont un facteur de classement majeur. Plus vous avez d'avis positifs récents, 
                            mieux vous êtes positionné. Objectif : <strong>40+ avis avec 4.5+ étoiles</strong>.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6 mb-4">
                            <h4 className="font-semibold mb-3 text-lg">🎯 Stratégie d'Acquisition d'Avis :</h4>
                            <div className="space-y-4">
                              <div>
                                <p className="font-medium mb-2">📱 <strong>QR Code Physique</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Affichez un QR code sur votre comptoir qui redirige vers votre page d'avis Google. 
                                  Testez : "Satisfait ? Scannez pour nous noter ⭐⭐⭐⭐⭐"
                                </p>
                              </div>
                              <div>
                                <p className="font-medium mb-2">💬 <strong>SMS Post-Achat</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Envoyez un SMS 24h après l'achat : "Merci NAME ! Votre avis compte 🙏 
                                  [Lien court vers GMB]. Réponse garantie sous 2h."
                                </p>
                              </div>
                              <div>
                                <p className="font-medium mb-2">🎁 <strong>Incentive Subtil</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  "Laissez un avis = participez au tirage mensuel d'un bon d'achat 50 000 FCFA" 
                                  (légal si pas de condition sur la note).
                                </p>
                              </div>
                              <div>
                                <p className="font-medium mb-2">⚡ <strong>Réponse Systématique</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Répondez à TOUS les avis (positifs ET négatifs) en moins de 24h. 
                                  Personnalisez chaque réponse (pas de copier-coller).
                                </p>
                              </div>
                            </div>
                          </div>

                          <Alert className="border-red-500 bg-red-50 dark:bg-red-950/20">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            <AlertDescription className="text-base text-red-900 dark:text-red-100">
                              <strong>❌ À Éviter Absolument :</strong> Acheter des faux avis (Google détecte et pénalise), 
                              demander à la famille/amis (empreintes IP similaires), ignorer les avis négatifs 
                              (baisse de confiance et de classement).
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
                    </div>

                    {/* Pilier 3 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Citations NAP : Cohérence = Crédibilité</h3>
                          <p className="text-muted-foreground mb-4">
                            NAP = <strong>Name, Address, Phone</strong>. Vos coordonnées doivent être 
                            <strong> IDENTIQUES à 100%</strong> sur tous les annuaires en ligne. 
                            Google utilise cette cohérence pour valider votre existence.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6 mb-4">
                            <h4 className="font-semibold mb-3 text-lg">📋 Annuaires Gabonais Prioritaires :</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">Pages Jaunes Gabon</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">Gabon Business</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">Africa Business Directory</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">Yelp (présence internationale)</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">Facebook Business</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-sm">LinkedIn Company Page</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground italic">
                            💡 <strong>Format Standard :</strong> "Restaurant Le Diplomate, Avenue Bouët Face Marché Mont-Bouët, 
                            Libreville, Gabon | +241 01 23 45 67" — utilisez EXACTEMENT ce format partout.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pilier 4 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Contenu Local Hyper-Ciblé</h3>
                          <p className="text-muted-foreground mb-4">
                            Créez du contenu qui mentionne explicitement votre ville, vos quartiers de service, 
                            et les problématiques locales de vos clients gabonais.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6">
                            <h4 className="font-semibold mb-3 text-lg">✍️ Types de Contenu Local Performant :</h4>
                            <ul className="space-y-3">
                              <li>
                                <strong>🗺️ Pages par quartier</strong> : "Plombier à Glass", "Restaurant Batterie IV", 
                                "Coiffeur Mont-Bouët"
                              </li>
                              <li>
                                <strong>📰 Actualités locales</strong> : "Comment [votre service] s'adapte à la saison des pluies à Libreville"
                              </li>
                              <li>
                                <strong>🎯 Guides pratiques</strong> : "Top 5 des erreurs à éviter lors de [service] au Gabon"
                              </li>
                              <li>
                                <strong>🏆 Success stories</strong> : "Comment nous avons aidé [entreprise gabonaise] à [résultat]"
                              </li>
                              <li>
                                <strong>📅 Événements</strong> : "Nos horaires pendant les fêtes de l'indépendance", 
                                "Promo Ramadan 2026"
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bannière Tsangoo */}
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

                  {/* Suite des Piliers */}
                  <div className="mb-16">
                    {/* Pilier 5 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Backlinks Locaux de Qualité</h3>
                          <p className="text-muted-foreground mb-4">
                            Les liens entrants depuis des sites gabonais (.ga) ou de votre secteur renforcent 
                            votre autorité locale. Qualité &gt; quantité.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6">
                            <h4 className="font-semibold mb-3 text-lg">🔗 Stratégies d'Acquisition de Backlinks Locaux :</h4>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium">🏢 <strong>Partenariats locaux</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Échangez des liens avec fournisseurs, clients B2B, chambres de commerce gabonaises.
                                </p>
                              </div>
                              <div>
                                <p className="font-medium">📰 <strong>Presse locale</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Contactez GabonActu, L'Union, Gabon Review pour des articles/interviews. 
                                  Des plateformes comme <a href="https://kikun-digital.com" target="_blank" rel="noopener noreferrer" className="text-xeta-blue hover:underline">Kikun Digital</a> peuvent 
                                  également amplifier votre visibilité digitale au Gabon.
                                </p>
                              </div>
                              <div>
                                <p className="font-medium">🎓 <strong>Sponsoring/événements</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Sponsorisez événements locaux → mention + lien sur site organisateur.
                                </p>
                              </div>
                              <div>
                                <p className="font-medium">📝 <strong>Guest blogging</strong></p>
                                <p className="text-sm text-muted-foreground">
                                  Écrivez pour des blogs gabonais de votre secteur avec lien vers votre site.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pilier 6 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          6
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Performance Mobile & Technique</h3>
                          <p className="text-muted-foreground mb-4">
                            Au Gabon, 82% des recherches se font sur mobile avec des connexions parfois lentes. 
                            Votre site doit être <strong>ultra-rapide et mobile-optimisé</strong>.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6">
                            <h4 className="font-semibold mb-3 text-lg">⚡ Optimisations Techniques Critiques :</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Temps de chargement &lt;3s</strong> sur 3G (compressez images, lazy loading)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Responsive design</strong> parfait sur tous écrans (test Google Mobile-Friendly)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Boutons cliquables larges</strong> (48x48px minimum) — doigts gabonais 😊</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Click-to-call</strong> direct (liens tel: sur numéros)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Certificat SSL</strong> (HTTPS obligatoire pour GMB). Découvrez nos <Link href="/blog/securite/cybersecurite-proteger-site-web" className="text-xeta-blue hover:underline">conseils de cybersécurité</Link> pour protéger votre site.</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Schema.org LocalBusiness</strong> markup (données structurées)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pilier 7 */}
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          7
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">Suivi & Mesure des Performances</h3>
                          <p className="text-muted-foreground mb-4">
                            Trackez vos KPIs SEO local pour identifier ce qui fonctionne et ajuster votre stratégie.
                          </p>

                          <div className="bg-muted/50 rounded-lg p-6">
                            <h4 className="font-semibold mb-3 text-lg">📊 Métriques Clés à Surveiller (Google Analytics + GMB Insights) :</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-semibold text-sm mb-1">🔍 Recherches</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Impressions GMB (combien vous voient)</li>
                                  <li>• Position moyenne mots-clés locaux</li>
                                  <li>• Volume de recherches "nom entreprise"</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-sm mb-1">👥 Engagement</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Clics vers site web</li>
                                  <li>• Appels téléphoniques</li>
                                  <li>• Demandes d'itinéraire</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-sm mb-1">⭐ Réputation</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Nombre d'avis nouveaux/mois</li>
                                  <li>• Note moyenne (objectif 4.5+)</li>
                                  <li>• Taux de réponse aux avis</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-sm mb-1">💰 Conversion</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Trafic organique local → leads</li>
                                  <li>• ROI campagnes locales</li>
                                  <li>• Coût d'acquisition client (CAC)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Plan d'Action 90 Jours */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-xeta-orange/10 flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-xeta-orange" />
                      </div>
                      Plan d'Action SEO Local : 90 Jours pour Dominer
                    </h2>

                    <div className="space-y-6">
                      {/* Mois 1 */}
                      <Card className="p-6 border-2 border-xeta-blue">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-lg bg-xeta-blue text-white flex items-center justify-center font-bold mr-4">
                            M1
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">Mois 1 : Fondations</h3>
                            <p className="text-sm text-muted-foreground">Mise en place de l'infrastructure SEO local</p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-16">
                          <li className="flex items-start">
                            <span className="text-xeta-blue mr-2">•</span>
                            <span>Créer/optimiser fiche Google My Business (100% complétude)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-blue mr-2">•</span>
                            <span>Inscrire dans 15 annuaires locaux (NAP cohérent)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-blue mr-2">•</span>
                            <span>Créer 3 pages de quartier (ex: services à Glass, Mont-Bouët, Batterie IV)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-blue mr-2">•</span>
                            <span>Lancer campagne avis (objectif : 20 avis en 30 jours)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-blue mr-2">•</span>
                            <span>Optimisation technique mobile (vitesse, responsive)</span>
                          </li>
                        </ul>
                      </Card>

                      {/* Mois 2 */}
                      <Card className="p-6 border-2 border-xeta-orange">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-lg bg-xeta-orange text-white flex items-center justify-center font-bold mr-4">
                            M2
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">Mois 2 : Contenu & Autorité</h3>
                            <p className="text-sm text-muted-foreground">Construction de la présence locale</p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-16">
                          <li className="flex items-start">
                            <span className="text-xeta-orange mr-2">•</span>
                            <span>Publier 8 articles de blog locaux (2/semaine)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-orange mr-2">•</span>
                            <span>Obtenir 5 backlinks locaux (presse, partenaires)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-orange mr-2">•</span>
                            <span>12 posts Google My Business (3/semaine — offres, actu, photos)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-orange mr-2">•</span>
                            <span>Répondre à 100% des avis sous 24h</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xeta-orange mr-2">•</span>
                            <span>Lancer campagne Facebook Ads géolocalisée (boost visibilité)</span>
                          </li>
                        </ul>
                      </Card>

                      {/* Mois 3 */}
                      <Card className="p-6 border-2 border-green-500">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold mr-4">
                            M3
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">Mois 3 : Optimisation & Scalabilité</h3>
                            <p className="text-sm text-muted-foreground">Affiner et multiplier les résultats</p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-16">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Analyser données GMB Insights + GA4 (identifier top sources)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Doubler efforts sur mots-clés performants (nouveaux articles)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Créer FAQ ultra-complète avec questions locales</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Lancer campagne vidéo locale (témoignages clients gabonais)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Objectif : 40+ avis, Top 3 sur 5+ requêtes locales majeures</span>
                          </li>
                        </ul>
                      </Card>
                    </div>

                    <Alert className="mt-6 border-green-500 bg-green-50 dark:bg-green-950/20">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <AlertDescription className="text-base text-green-900 dark:text-green-100">
                        <strong>Résultats Attendus :</strong> En 90 jours, visez Top 3 sur Google Maps pour vos 
                        mots-clés principaux, +200% de trafic organique local, 40+ avis clients, 
                        et une augmentation de 150% des demandes de devis/appels.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Erreurs à Éviter */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center mr-3">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      7 Erreurs SEO Local à Éviter Absolument
                    </h2>

                    <div className="grid gap-4">
                      {[
                        {
                          title: "Incohérence NAP",
                          description: "Adresse différente sur GMB vs site web vs Facebook = Google perd confiance."
                        },
                        {
                          title: "Fiche GMB Abandonnée",
                          description: "Pas de mise à jour depuis 6 mois, photos obsolètes, horaires faux = pénalité."
                        },
                        {
                          title: "Ignorer les Avis Négatifs",
                          description: "Ne pas répondre = -40% de taux de clics. Répondez poliment avec solution."
                        },
                        {
                          title: "Site Non-Mobile",
                          description: "82% des Gabonais sur mobile. Site desktop-only = vous perdez 8 clients sur 10."
                        },
                        {
                          title: "Mots-Clés Trop Génériques",
                          description: "\"Restaurant\" au lieu de \"Restaurant africain Libreville Glass\" = bataille perdue."
                        },
                        {
                          title: "Duplication de Catégories GMB",
                          description: "Créer 2 fiches pour même lieu (\"Café\" + \"Restaurant\") = suspension Google."
                        },
                        {
                          title: "Oublier la Recherche Vocale",
                          description: "\"Ok Google, trouver coiffeur près de moi\" → optimisez pour langage naturel."
                        }
                      ].map((error, index) => (
                        <Card key={index} className="p-5 border-l-4 border-red-500">
                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-bold mb-1">{error.title}</h3>
                              <p className="text-sm text-muted-foreground">{error.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Budget Estimation */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mr-3">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                      </div>
                      Budget SEO Local au Gabon : 3 Scénarios
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* DIY */}
                      <Card className="p-6 border-2 hover:border-xeta-blue transition-colors">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 mb-3">
                            <Target className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">DIY (Do It Yourself)</h3>
                          <div className="text-3xl font-bold text-green-600 mb-1">150K FCFA</div>
                          <p className="text-sm text-muted-foreground">Investissement initial</p>
                        </div>
                        <ul className="space-y-2 text-sm mb-6">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Optimisation GMB manuelle</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Rédaction contenu interne</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Outils gratuits (Google Search Console)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>15-20h/mois de votre temps</span>
                          </li>
                        </ul>
                        <p className="text-xs text-muted-foreground">
                          <strong>Idéal pour :</strong> TPE, budget serré, propriétaire investi
                        </p>
                      </Card>

                      {/* Freelance */}
                      <Card className="p-6 border-2 border-xeta-blue shadow-lg scale-105">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-xeta-blue text-white">Recommandé</Badge>
                        </div>
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 mb-3">
                            <Users className="w-8 h-8 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Freelance Local</h3>
                          <div className="text-3xl font-bold text-xeta-blue mb-1">350-500K</div>
                          <p className="text-sm text-muted-foreground">FCFA/mois (3-6 mois)</p>
                        </div>
                        <ul className="space-y-2 text-sm mb-6">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Audit SEO complet + stratégie</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Optimisation GMB + citations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>4-6 articles/mois</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Gestion avis + rapports mensuels</span>
                          </li>
                        </ul>
                        <p className="text-xs text-muted-foreground">
                          <strong>Idéal pour :</strong> PME, résultats rapides, expertise locale
                        </p>
                      </Card>

                      {/* Agence */}
                      <Card className="p-6 border-2 hover:border-xeta-orange transition-colors">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950 mb-3">
                            <TrendingUp className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Agence Premium</h3>
                          <div className="text-3xl font-bold text-xeta-orange mb-1">800K-1.2M</div>
                          <p className="text-sm text-muted-foreground">FCFA/mois (6-12 mois)</p>
                        </div>
                        <ul className="space-y-2 text-sm mb-6">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Stratégie SEO 360° (local + national)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Équipe dédiée + outils pro</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>12+ articles premium/mois</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>PR, backlinks, reputation management</span>
                          </li>
                        </ul>
                        <p className="text-xs text-muted-foreground">
                          <strong>Idéal pour :</strong> Grandes entreprises, multi-villes, concurrence forte
                        </p>
                      </Card>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                      Conclusion : Le SEO Local, Votre Levier de Croissance #1
                    </h2>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Le marché gabonais est encore <strong>sous-exploité en SEO local</strong>. 
                      Pendant que vos concurrents négligent leur présence en ligne, vous avez l'opportunité 
                      de capturer des parts de marché massives avec une stratégie bien exécutée.
                    </p>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Rappelez-vous : le SEO local n'est pas un sprint, c'est un <strong>marathon rentable</strong>. 
                      Les premiers résultats apparaissent sous 30-60 jours, mais c'est après 6-12 mois que vous 
                      dominerez vraiment votre marché local.
                    </p>

                    <div className="bg-gradient-to-r from-xeta-blue/10 to-xeta-orange/10 rounded-2xl p-8 border-2 border-xeta-blue/20">
                      <h3 className="text-2xl font-bold mb-4">🚀 Prêt à Passer à l'Action ?</h3>
                      <p className="text-muted-foreground mb-6">
                        Chez <strong>XETA-DIGITAL CORP</strong>, nous aidons les entreprises gabonaises 
                        à dominer leur marché local grâce au SEO. Nos clients obtiennent en moyenne 
                        <strong> +230% de trafic organique</strong> en 6 mois.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                          <Button size="lg" className="gap-2">
                            Audit SEO Gratuit
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        </Link>
                        <Link href="/services/developpement-web">
                          <Button variant="outline" size="lg" className="gap-2">
                            Nos Services SEO
                            <Globe className="w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-8 border-t flex flex-wrap gap-2">
                    <Badge variant="secondary">SEO Local</Badge>
                    <Badge variant="secondary">Google My Business</Badge>
                    <Badge variant="secondary">Gabon</Badge>
                    <Badge variant="secondary">Marketing Digital</Badge>
                    <Badge variant="secondary">Référencement</Badge>
                    <Badge variant="secondary">Visibilité Locale</Badge>
                    <Badge variant="secondary">Libreville</Badge>
                  </div>
                </article>

                {/* Author Bio */}
                <Card className="mt-12 p-6 bg-muted/50 border-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-xeta-blue to-xeta-orange flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      MT
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Marketing Team - XETA-DIGITAL CORP</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Notre équipe marketing cumule plus de 15 ans d'expérience en SEO local et marketing digital 
                        pour les entreprises gabonaises. Nous avons aidé 80+ entreprises à atteindre la première 
                        page Google dans leur secteur.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          <Target className="w-3 h-3 mr-1" />
                          SEO Expert
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Growth Marketing
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          Local SEO
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24">
                  <BlogSidebar />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Articles Connexes
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link href="/blog/business/ecommerce-gabon-cles-succes">
                <Card className="overflow-hidden border-2 hover:border-xeta-blue transition-all hover:shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                      alt="E-commerce au Gabon"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">Business</Badge>
                    <h3 className="font-bold mb-2 group-hover:text-xeta-blue transition-colors">
                      E-commerce au Gabon : Les Clés du Succès
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Comment lancer une boutique en ligne rentable
                    </p>
                  </div>
                </Card>
              </Link>

              <Link href="/blog/securite/cybersecurite-proteger-site-web">
                <Card className="overflow-hidden border-2 hover:border-xeta-blue transition-all hover:shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                      alt="Cybersécurité"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">Sécurité</Badge>
                    <h3 className="font-bold mb-2 group-hover:text-xeta-blue transition-colors">
                      Cybersécurité : Protéger Votre Site Web
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Les meilleures pratiques de sécurité web
                    </p>
                  </div>
                </Card>
              </Link>

              <Link href="/blog/technologie/react-vs-vuejs-framework-2026">
                <Card className="overflow-hidden border-2 hover:border-xeta-blue transition-all hover:shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                      alt="React vs Vue.js"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">Technologie</Badge>
                    <h3 className="font-bold mb-2 group-hover:text-xeta-blue transition-colors">
                      React vs Vue.js : Quel Framework en 2026?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Comparaison détaillée des frameworks JS
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}