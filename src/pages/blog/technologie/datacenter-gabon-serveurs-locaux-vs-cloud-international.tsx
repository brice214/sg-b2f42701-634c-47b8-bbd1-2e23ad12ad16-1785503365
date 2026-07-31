import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Server, Globe, Shield, Zap, Database, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

export default function DatacenterGabonArticle() {
  return (
    <>
      <SEO
        title="Datacenter au Gabon : Faut-il Vraiment Héberger Localement ? | XETA-DIGITAL"
        description="Analyse du nouveau datacenter gabonais : pourquoi les serveurs locaux ne sont pas toujours la meilleure option et comment l'infrastructure cloud internationale surpasse souvent les solutions locales."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
                <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                  Technologie
                </Badge>
                <span className="text-white/60">•</span>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  31 Juillet 2026
                </div>
                <span className="text-white/60">•</span>
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  12 min de lecture
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up animation-delay-100">
                Datacenter au Gabon : Faut-il Vraiment Héberger Localement ?
              </h1>

              <p className="text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
                L'inauguration récente d'un datacenter au Gabon soulève une question cruciale : l'hébergement local est-il vraiment la meilleure solution pour votre entreprise ? Analyse approfondie.
              </p>

              <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-300">
                <div className="flex items-center text-white/80 text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Tech Innovation Team
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-2">
                <div className="relative h-[400px] md:h-[600px]">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
                    alt="Infrastructure datacenter moderne avec serveurs"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-spacing">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  
                  {/* Introduction */}
                  <div className="bg-card p-8 rounded-2xl border-2 border-xeta-blue/20 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-xeta-blue/10 flex items-center justify-center flex-shrink-0">
                        <Server className="w-6 h-6 text-xeta-blue" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold mb-3 mt-0">Le Contexte</h2>
                        <p className="text-muted-foreground leading-relaxed mb-0">
                          L'arrivée d'un datacenter au Gabon marque une étape importante dans le développement des infrastructures numériques du pays. Cependant, cette annonce soulève une question fondamentale : <strong>l'hébergement local est-il réellement nécessaire pour toutes les entreprises gabonaises ?</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <Database className="w-8 h-8 text-xeta-blue" />
                    Datacenter Local : Pour Qui ?
                  </h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Avant d'analyser les alternatives, clarifions <strong>qui a VRAIMENT besoin d'un datacenter local</strong> au Gabon :
                  </p>

                  <Card className="border-2 border-green-500/20 bg-green-500/5 p-8 mb-8">
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      Cas d'Usage Légitimes
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Administrations gouvernementales</strong> - Données sensibles, souveraineté numérique, conformité réglementaire stricte
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Banques et institutions financières</strong> - Transactions financières critiques, réglementations CEMAC/BEAC
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Opérateurs télécoms</strong> - Infrastructure réseau nationale, données clients sensibles
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Grandes entreprises stratégiques</strong> - Pétrole, mines, avec obligations légales spécifiques
                        </div>
                      </li>
                    </ul>
                  </Card>

                  <Card className="border-2 border-orange-500/20 bg-orange-500/5 p-8 mb-12">
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                      Qui N'en A PAS Besoin
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>PME et startups gabonaises</strong> - Sites web, applications métier, boutiques en ligne
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>E-commerces locaux</strong> - Catalogues produits, commandes clients, paiements standards
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Services digitaux B2C</strong> - Applications mobiles, plateformes de réservation, marketplaces
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Entreprises de services</strong> - Consultants, agences, cabinets sans données ultra-sensibles
                        </div>
                      </li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-xeta-blue" />
                    Le Mythe de la Sécurité Géographique
                  </h2>

                  <p className="text-lg leading-relaxed mb-6">
                    L'argument principal en faveur des datacenters locaux repose sur une idée reçue : <em>"mes données sont plus sûres si elles sont physiquement au Gabon"</em>. Cette vision est <strong>fondamentalement erronée</strong>.
                  </p>

                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-red-600">
                      La Réalité : C'est l'Humain, Pas l'Emplacement
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      <strong>99% des failles de sécurité</strong> proviennent de facteurs humains :
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-red-600">Ingénieurs mal formés</strong> - Configuration serveur incorrecte, ports ouverts, mots de passe faibles
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-red-600">Manque de mises à jour</strong> - Serveurs non patchés, vulnérabilités connues non corrigées
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-red-600">Absence de monitoring 24/7</strong> - Intrusions détectées trop tard, pas de système d'alerte automatique
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-red-600">Sauvegardes inadéquates</strong> - Backups stockés au même endroit, pas de plan de disaster recovery
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-red-600">Contrôle d'accès physique laxiste</strong> - N'importe qui peut entrer dans la salle serveur
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed mb-8 bg-card p-6 rounded-xl border-2">
                    <strong>L'emplacement géographique d'un serveur</strong> n'a <strong>AUCUN impact</strong> sur sa vulnérabilité face aux cyberattaques. Un serveur mal configuré à Libreville est tout aussi vulnérable qu'un serveur mal configuré à Paris ou Tokyo. <strong>La différence ? L'expertise humaine qui le gère.</strong>
                  </p>

                  <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-xeta-blue" />
                    Pourquoi les Serveurs Internationaux Sont Supérieurs
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="p-6 border-2 hover:border-xeta-blue/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-2">Infrastructure de Classe Mondiale</h3>
                          <p className="text-muted-foreground">
                            AWS, Google Cloud, Azure investissent <strong>des milliards</strong> dans la redondance, la sécurité physique, et la haute disponibilité
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-2 hover:border-xeta-blue/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-2">Équipes de Sécurité Dédiées</h3>
                          <p className="text-muted-foreground">
                            Ingénieurs spécialisés travaillant <strong>24/7/365</strong> pour patcher les vulnérabilités en temps réel
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-2 hover:border-xeta-blue/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-2">Performance Exceptionnelle</h3>
                          <p className="text-muted-foreground">
                            CDN mondial, temps de chargement <strong>&lt;100ms</strong>, disponibilité 99.99% garantie contractuellement
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-2 hover:border-xeta-blue/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                          <Database className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-2">Sauvegardes Géo-Redondantes</h3>
                          <p className="text-muted-foreground">
                            Données répliquées sur <strong>3+ zones géographiques</strong> automatiquement, protection contre catastrophes naturelles
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-xeta-blue" />
                    Le Cas Réel d'une PME Gabonaise
                  </h2>

                  <div className="bg-gradient-to-br from-xeta-blue/10 to-purple-500/10 border-2 border-xeta-blue/20 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-heading font-bold mb-4">Scénario : E-commerce avec 5000 produits</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl">
                        <h4 className="font-bold text-lg mb-3 text-red-600">❌ Option Locale (Datacenter Gabon)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Coût : <strong>800 000 - 1 200 000 FCFA/mois</strong></li>
                          <li>• Disponibilité : 95-97% (coupures fréquentes)</li>
                          <li>• Support : horaires de bureau uniquement</li>
                          <li>• Sauvegardes : manuelles, même localisation</li>
                          <li>• Mises à jour : trimestrielles au mieux</li>
                          <li>• Temps de chargement : 3-8 secondes</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl">
                        <h4 className="font-bold text-lg mb-3 text-green-600">✅ Cloud International (AWS/Vercel)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Coût : <strong>150 000 - 300 000 FCFA/mois</strong></li>
                          <li>• Disponibilité : 99.99% (SLA contractuel)</li>
                          <li>• Support : 24/7/365</li>
                          <li>• Sauvegardes : automatiques, multi-régions</li>
                          <li>• Mises à jour : quotidiennes, automatiques</li>
                          <li>• Temps de chargement : 0.5-1.5 secondes</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-500/10 border-2 border-green-500/20 rounded-xl p-6">
                      <p className="text-lg font-bold text-green-600 mb-2">Résultat</p>
                      <p className="leading-relaxed">
                        L'option cloud internationale coûte <strong>3 à 4 fois moins cher</strong>, offre une <strong>meilleure disponibilité</strong>, des <strong>performances supérieures</strong>, et une <strong>sécurité professionnelle</strong>. Le datacenter local est ici un <strong>gaspillage financier</strong>.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-heading font-bold mb-6">Les Vraies Questions à Se Poser</h2>

                  <Card className="border-2 p-8 mb-12">
                    <h3 className="text-xl font-heading font-bold mb-4">Avant de Choisir Votre Hébergement</h3>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue/10 flex items-center justify-center flex-shrink-0 font-bold text-xeta-blue">
                          1
                        </div>
                        <div>
                          <strong>Ai-je une obligation légale ?</strong> - Loi gabonaise, CEMAC, secteur bancaire, gouvernemental
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue/10 flex items-center justify-center flex-shrink-0 font-bold text-xeta-blue">
                          2
                        </div>
                        <div>
                          <strong>Quel est mon budget réel ?</strong> - Incluant maintenance, électricité, personnel qualifié, sauvegardes
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue/10 flex items-center justify-center flex-shrink-0 font-bold text-xeta-blue">
                          3
                        </div>
                        <div>
                          <strong>Ai-je les compétences techniques en interne ?</strong> - Sysadmin expérimenté, DevOps, expert sécurité
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue/10 flex items-center justify-center flex-shrink-0 font-bold text-xeta-blue">
                          4
                        </div>
                        <div>
                          <strong>Quelle est ma tolérance aux coupures ?</strong> - E-commerce 24/7 vs site vitrine consulté en journée
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-xeta-blue/10 flex items-center justify-center flex-shrink-0 font-bold text-xeta-blue">
                          5
                        </div>
                        <div>
                          <strong>Est-ce que la latence est critique ?</strong> - Application temps réel vs site d'information
                        </div>
                      </li>
                    </ol>
                  </Card>

                  <h2 className="text-3xl font-heading font-bold mb-6">Notre Recommandation Chez XETA-DIGITAL</h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Nous accompagnons nos clients dans <strong>le choix rationnel</strong> de leur infrastructure. Pour <strong>95% des entreprises gabonaises</strong>, notre conseil est clair :
                  </p>

                  <div className="bg-gradient-hero text-white rounded-2xl p-10 mb-12">
                    <h3 className="text-2xl font-heading font-bold mb-4">
                      🚀 Cloud International = Performance + Économies + Sécurité
                    </h3>
                    <p className="text-lg leading-relaxed opacity-90 mb-6">
                      Nous déployons vos applications sur <strong>Vercel, AWS, ou Digital Ocean</strong>, avec :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Infrastructure mondiale haute performance</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>SSL/TLS automatique, protection DDoS incluse</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Sauvegardes automatiques multi-régions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Monitoring 24/7 avec alertes en temps réel</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Mises à jour de sécurité transparentes</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Coûts 3 à 5 fois inférieurs au local</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-heading font-bold mb-6">Conclusion</h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Le nouveau datacenter gabonais est une <strong>excellente nouvelle pour le pays</strong> — mais il répond à des besoins <strong>spécifiques et contraints</strong> (administration, banques, télécoms). Pour votre PME, startup, ou e-commerce, <strong>l'hébergement cloud international reste la solution optimale</strong> : plus performant, plus sûr, et bien moins cher.
                  </p>

                  <div className="bg-card border-2 border-xeta-blue/20 rounded-2xl p-8 mb-8">
                    <p className="text-xl font-heading font-bold mb-4">
                      💡 Retenez Ceci
                    </p>
                    <p className="text-lg leading-relaxed">
                      Ce n'est pas l'emplacement du serveur qui détermine sa fiabilité, <strong>c'est l'expertise humaine qui le gère</strong>. Un datacenter local géré par une équipe inexpérimentée sera toujours moins fiable qu'un serveur AWS géré par des ingénieurs de niveau mondial.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Chez <Link href="/" className="text-xeta-blue hover:underline font-semibold">XETA-DIGITAL CORP</Link>, nous privilégions <strong>les solutions qui fonctionnent</strong>, pas les solutions marketing. <Link href="/services/hebergement" className="text-xeta-blue hover:underline">Notre service d'hébergement</Link> combine cloud international de référence et expertise locale pour un accompagnement optimal.
                  </p>

                </article>

                {/* CTA Section */}
                <div className="mt-16 p-10 bg-gradient-hero text-white rounded-2xl">
                  <h3 className="text-3xl font-heading font-bold mb-4">
                    Besoin d'une Infrastructure Performante ?
                  </h3>
                  <p className="text-lg opacity-90 mb-8">
                    Nos experts analysent vos besoins et vous recommandent la solution optimale — sans compromis sur la performance ni le budget.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                        Consultation Gratuite
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="/services/hebergement">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        Voir nos Services Hébergement
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Internal Links Section */}
                <Card className="border-2 p-8 mt-12">
                  <h3 className="text-2xl font-heading font-bold mb-6">Articles Connexes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/securite/cybersecurite-proteger-site-web" className="flex items-start gap-4 p-4 rounded-xl border hover:border-xeta-blue/50 transition-colors group">
                      <Shield className="w-6 h-6 text-xeta-blue flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold group-hover:text-xeta-blue transition-colors">Cybersécurité : Protéger Votre Site Web</div>
                        <div className="text-sm text-muted-foreground">Les meilleures pratiques de sécurité</div>
                      </div>
                    </Link>
                    <Link href="/blog/technologie/intelligence-artificielle-avenir-developpement-web-2026" className="flex items-start gap-4 p-4 rounded-xl border hover:border-xeta-blue/50 transition-colors group">
                      <Zap className="w-6 h-6 text-xeta-blue flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold group-hover:text-xeta-blue transition-colors">Intelligence Artificielle en 2026</div>
                        <div className="text-sm text-muted-foreground">L'avenir du développement web</div>
                      </div>
                    </Link>
                    <Link href="/services/developpement-web" className="flex items-start gap-4 p-4 rounded-xl border hover:border-xeta-blue/50 transition-colors group">
                      <Globe className="w-6 h-6 text-xeta-blue flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold group-hover:text-xeta-blue transition-colors">Développement Web</div>
                        <div className="text-sm text-muted-foreground">Nos solutions techniques</div>
                      </div>
                    </Link>
                    <Link href="/services/hebergement" className="flex items-start gap-4 p-4 rounded-xl border hover:border-xeta-blue/50 transition-colors group">
                      <Server className="w-6 h-6 text-xeta-blue flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold group-hover:text-xeta-blue transition-colors">Hébergement Web</div>
                        <div className="text-sm text-muted-foreground">Infrastructure cloud optimale</div>
                      </div>
                    </Link>
                  </div>
                </Card>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar currentCategory="Technologie" />
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