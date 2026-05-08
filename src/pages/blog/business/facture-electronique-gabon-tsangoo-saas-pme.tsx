import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSidebar } from "@/components/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, FileText, Users, Calculator, FolderKanban, CheckCircle2, ArrowRight, Building2, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TsangooSaasGabon() {
  const article = {
    title: "La Facture Électronique au Gabon : Tsangoo SaaS au Service des PME et Compagnies Gabonaises",
    excerpt: "Découvrez comment Tsangoo révolutionne la gestion des entreprises gabonaises avec une solution conforme OHADA/SYSCOHADA",
    image: "/tsangoo-gabon-facturation-comptabilite.png",
    author: "Business Team",
    date: "15 Mars 2026",
    readTime: "10 min",
    category: "Business",
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url="https://xetadigital.com/blog/business/facture-electronique-gabon-tsangoo-saas-pme"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-xeta-blue via-xeta-purple to-xeta-pink pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au Blog
              </Link>

              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                {article.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-white/90 mb-8">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  {/* Featured Image */}
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-3 mb-12 pb-6 border-b">
                    <span className="text-sm font-semibold text-muted-foreground">Partager :</span>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <LinkIcon className="w-4 h-4" />
                      Copier
                    </Button>
                  </div>

                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-xeta-blue/5 to-xeta-purple/5 rounded-xl p-8 mb-12 border-l-4 border-xeta-blue">
                    <p className="text-lg leading-relaxed mb-4">
                      <strong>La transformation digitale au Gabon n'est plus une option, c'est une nécessité.</strong> Dans un contexte économique de plus en plus compétitif, les PME et compagnies gabonaises doivent s'équiper d'outils modernes pour optimiser leur gestion, respecter leurs obligations légales et accélérer leur croissance.
                    </p>
                    <p className="text-lg leading-relaxed mb-0">
                      <strong>Tsangoo</strong> se positionne comme LA solution SaaS tout-en-un, 100% conforme aux normes OHADA/SYSCOHADA, conçue spécifiquement pour répondre aux défis des entreprises gabonaises. De la facturation électronique à la gestion RH, en passant par la comptabilité et la gestion de projet, découvrez comment Tsangoo révolutionne la gestion d'entreprise au Gabon. Que vous lanciez votre <Link href="/blog/business/ecommerce-gabon-cles-succes" className="text-xeta-blue hover:underline">boutique en ligne</Link> ou optimisiez une PME existante, Tsangoo s'adapte à vos besoins. Pour en savoir plus sur <a href="https://digitalgabonews.com/tsangoo-est-arrive-la-solution-gabonaise-qui-revolutionne-la-gestion-dentreprise/" target="_blank" rel="noopener noreferrer" className="text-xeta-blue hover:underline">l'arrivée de Tsangoo au Gabon</a>, consultez l'article complet.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">La Facture Électronique au Gabon : Un Enjeu Stratégique</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          La digitalisation de la facturation n'est pas qu'une tendance technologique, c'est un impératif réglementaire et économique pour les entreprises gabonaises.
                        </p>

                        <div className="bg-muted/50 rounded-lg p-6 mb-6">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-xeta-blue" />
                            Pourquoi la Facture Électronique ?
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="block mb-1">Conformité Réglementaire</strong>
                                <p className="text-sm text-muted-foreground">
                                  Respect des obligations OHADA/SYSCOHADA et des directives de la DGI gabonaise
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="block mb-1">Réduction des Coûts</strong>
                                <p className="text-sm text-muted-foreground">
                                  Économisez jusqu'à 80% sur les coûts d'impression, d'archivage et d'envoi postal
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="block mb-1">Gain de Temps</strong>
                                <p className="text-sm text-muted-foreground">
                                  Génération instantanée, envoi automatique par email, traçabilité complète
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="block mb-1">Image Professionnelle</strong>
                                <p className="text-sm text-muted-foreground">
                                  Des factures personnalisées à votre image, avec logo et charte graphique
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="block mb-1">Sécurité & Traçabilité</strong>
                                <p className="text-sm text-muted-foreground">
                                  Archivage sécurisé, horodatage, historique complet des modifications
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500 rounded-lg p-6">
                          <div className="flex items-start">
                            <TrendingUp className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <strong className="block mb-2 text-amber-900 dark:text-amber-100">Chiffre Clé</strong>
                              <p className="text-amber-800 dark:text-amber-200">
                                Les entreprises qui adoptent la facturation électronique réduisent de <strong>60%</strong> leur temps de traitement administratif et améliorent leur trésorerie de <strong>25%</strong> grâce à une relance automatisée des impayés.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Tsangoo : Une Suite Complète de Gestion d'Entreprise</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          Bien plus qu'un simple logiciel de facturation, Tsangoo est une plateforme SaaS tout-en-un qui centralise tous les aspects de la gestion d'entreprise.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <FileText className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Facturation & Devis</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Factures, devis, bons de commande conformes OHADA
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Envoi automatique par email et SMS
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Relances automatiques des impayés
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Multi-devises (FCFA, EUR, USD)
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                            <Users className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Gestion RH & Paie</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Dossiers employés complets
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Calcul automatique des bulletins de paie
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Gestion des congés et absences
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Déclarations sociales (CNSS, CNAMGS)
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                            <Calculator className="w-10 h-10 text-green-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Comptabilité SYSCOHADA</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Plan comptable SYSCOHADA intégré
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Saisie des écritures comptables
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Grand livre, balance, journaux
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Rapports financiers (bilan, compte de résultat)
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                            <FolderKanban className="w-10 h-10 text-orange-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Gestion de Projet</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Planification et suivi de projets
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Gestion des tâches et sous-tâches
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Tableau de bord Kanban
                              </li>
                              <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                Collaboration en temps réel
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Conformité OHADA/SYSCOHADA : Votre Sécurité Juridique</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          Tsangoo est développé dans le strict respect des normes comptables et juridiques de la zone OHADA, garantissant la conformité totale de votre gestion.
                        </p>

                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl p-8 mb-6 border-l-4 border-emerald-500">
                          <h3 className="text-2xl font-bold mb-4 flex items-center">
                            <Shield className="w-8 h-8 mr-3 text-emerald-600" />
                            Garantie de Conformité
                          </h3>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-bold mb-3 text-emerald-900 dark:text-emerald-100">Plan Comptable</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  SYSCOHADA révisé 2017 intégré
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Comptes normalisés (classe 1 à 8)
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  États financiers SYSCOHADA
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold mb-3 text-emerald-900 dark:text-emerald-100">Mentions Légales</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Numérotation conforme des factures
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Mentions obligatoires automatiques
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Archivage légal 10 ans
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold mb-3 text-emerald-900 dark:text-emerald-100">Fiscalité</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Calcul automatique TVA (18%)
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Déclarations fiscales simplifiées
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Export DGI ready
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold mb-3 text-emerald-900 dark:text-emerald-100">Social</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Cotisations CNSS conformes
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Déclarations CNAMGS
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  Livre de paie réglementaire
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bannière Tsangoo CTA */}
                  <div className="my-16">
                    <div className="bg-gradient-to-br from-xeta-blue via-xeta-purple to-xeta-pink rounded-2xl overflow-hidden shadow-2xl">
                      <div className="p-8 md:p-12 text-center text-white">
                        <Building2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          Prêt à Digitaliser Votre Entreprise ?
                        </h3>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                          Rejoignez les centaines d'entreprises gabonaises qui ont déjà fait confiance à Tsangoo pour optimiser leur gestion et booster leur croissance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                          <a 
                            href="https://www.tsangoo.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90 text-lg px-8 py-6 h-auto group">
                              Essayer Tsangoo Gratuitement
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </a>
                          <a 
                            href="https://www.tsangoo.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                              Découvrir les Tarifs
                            </Button>
                          </a>
                        </div>
                        <p className="mt-6 text-sm text-white/70">
                          ✓ Essai gratuit 30 jours • ✓ Sans carte bancaire • ✓ Support en français
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Pourquoi les PME Gabonaises Choisissent Tsangoo</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          Tsangoo n'est pas qu'un logiciel, c'est un partenaire de croissance conçu pour les réalités du tissu économique gabonais.
                        </p>

                        <div className="space-y-6 mb-8">
                          <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 rounded-lg p-6 border-l-4 border-blue-500">
                            <div className="flex items-start">
                              <Zap className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-xl font-bold mb-2">100% Cloud, Accessible Partout</h3>
                                <p className="text-muted-foreground">
                                  Travaillez depuis Libreville, Port-Gentil ou l'étranger. Vos données sont synchronisées en temps réel, accessible depuis n'importe quel appareil (ordinateur, tablette, smartphone).
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/20 rounded-lg p-6 border-l-4 border-purple-500">
                            <div className="flex items-start">
                              <Shield className="w-6 h-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-xl font-bold mb-2">Sécurité Maximale</h3>
                                <p className="text-muted-foreground">
                                  Hébergement sécurisé avec sauvegarde automatique quotidienne, chiffrement SSL, authentification multi-facteurs. Vos données sont protégées selon les standards bancaires.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 rounded-lg p-6 border-l-4 border-green-500">
                            <div className="flex items-start">
                              <Users className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-xl font-bold mb-2">Support Local en Français</h3>
                                <p className="text-muted-foreground">
                                  Une équipe dédiée basée au Gabon, joignable par téléphone, email ou chat. Formation en ligne et accompagnement personnalisé pour une prise en main rapide.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/20 rounded-lg p-6 border-l-4 border-orange-500">
                            <div className="flex items-start">
                              <TrendingUp className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-xl font-bold mb-2">Prix Adapté aux PME</h3>
                                <p className="text-muted-foreground">
                                  Formules flexibles sans engagement, tarification transparente en FCFA. Pas de coûts cachés, pas de surprise. Investissement déductible fiscalement.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Cas d'Usage : Qui Utilise Tsangoo ?</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          Tsangoo s'adapte à tous les secteurs d'activité et toutes les tailles d'entreprise au Gabon.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                              <Building2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold mb-2">PME & TPE</h3>
                            <p className="text-sm text-muted-foreground">
                              Commerce, services, BTP, restauration, transport
                            </p>
                          </div>

                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                              <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold mb-2">Professions Libérales</h3>
                            <p className="text-sm text-muted-foreground">
                              Avocats, consultants, architectes, médecins
                            </p>
                          </div>

                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                              <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold mb-2">Startups</h3>
                            <p className="text-sm text-muted-foreground">
                              Tech, e-commerce, agritech, fintech
                            </p>
                          </div>

                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                              <FileText className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-bold mb-2">ONG & Associations</h3>
                            <p className="text-sm text-muted-foreground">
                              Gestion de projet, comptabilité associative
                            </p>
                          </div>

                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                              <Calculator className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold mb-2">Cabinets Comptables</h3>
                            <p className="text-sm text-muted-foreground">
                              Gestion multi-dossiers clients
                            </p>
                          </div>

                          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                              <FolderKanban className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="font-bold mb-2">Agences</h3>
                            <p className="text-sm text-muted-foreground">
                              Communication, événementiel, marketing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-16">
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-xeta-blue text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">Comment Démarrer avec Tsangoo en 3 Étapes</h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          La mise en place est simple et rapide. Soyez opérationnel en moins de 24 heures !
                        </p>

                        <div className="space-y-6">
                          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border-l-4 border-blue-500">
                            <div className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                              1
                            </div>
                            <div className="ml-8">
                              <h3 className="text-2xl font-bold mb-3">Inscription Gratuite</h3>
                              <p className="text-muted-foreground mb-4">
                                Créez votre compte en 2 minutes sur <a href="https://www.tsangoo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">www.tsangoo.com</a>. Aucune carte bancaire requise pour l'essai.
                              </p>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Email et mot de passe
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Informations entreprise (nom, secteur, taille)
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Activation immédiate
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-8 border-l-4 border-purple-500">
                            <div className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                              2
                            </div>
                            <div className="ml-8">
                              <h3 className="text-2xl font-bold mb-3">Configuration Assistée</h3>
                              <p className="text-muted-foreground mb-4">
                                Notre assistant vous guide pas à pas pour configurer votre espace de travail.
                              </p>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Paramétrage entreprise (logo, coordonnées, mentions légales)
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Import de vos clients et fournisseurs (fichier Excel)
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Personnalisation des modèles de documents
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-8 border-l-4 border-green-500">
                            <div className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                              3
                            </div>
                            <div className="ml-8">
                              <h3 className="text-2xl font-bold mb-3">C'est Parti !</h3>
                              <p className="text-muted-foreground mb-4">
                                Créez votre première facture, gérez votre paie, suivez vos projets. Vous êtes opérationnel !
                              </p>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Tutoriels vidéo intégrés
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Base de connaissances complète
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                                  Support client réactif (chat en direct)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion & CTA Final */}
                  <div className="bg-gradient-to-br from-xeta-blue/10 via-xeta-purple/10 to-xeta-pink/10 rounded-2xl p-8 md:p-12 border-2 border-xeta-blue/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                      Digitalisez Votre Gestion Dès Aujourd'hui
                    </h2>
                    <p className="text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                      Ne perdez plus de temps avec des processus manuels chronophages. Tsangoo vous fait gagner en moyenne <strong>15 heures par semaine</strong> sur votre gestion administrative, tout en garantissant une conformité totale aux normes gabonaises.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-xeta-blue mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Entreprises gabonaises</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-xeta-purple mb-2">50K+</div>
                        <div className="text-sm text-muted-foreground">Factures générées/mois</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-xeta-pink mb-2">4.8/5</div>
                        <div className="text-sm text-muted-foreground">Satisfaction clients</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://www.tsangoo.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="lg" className="bg-gradient-to-r from-xeta-blue to-xeta-purple hover:opacity-90 text-lg px-8 py-6 h-auto group w-full sm:w-auto">
                          Démarrer Mon Essai Gratuit 30 Jours
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <a 
                        href="https://www.tsangoo.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
                          Demander une Démo Personnalisée
                        </Button>
                      </a>
                    </div>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                          Sans engagement
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                          Sans CB
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                          Support en français
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": `https://xetadigital.com${article.image}`,
            "author": {
              "@type": "Organization",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "XETA DIGITAL CORP",
              "logo": {
                "@type": "ImageObject",
                "url": "https://xetadigital.com/logo-xeta.png"
              }
            },
            "datePublished": "2026-03-15",
            "dateModified": "2026-03-15"
          })
        }}
      />
    </>
  );
}