import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Code2,
  Smartphone,
  Globe,
  CreditCard,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Général",
      icon: HelpCircle,
      questions: [
        {
          q: "Qui est XETA-DIGITAL CORP ?",
          a: "XETA-DIGITAL CORP est une agence web gabonaise spécialisée dans le développement de sites web, d'applications mobiles, l'hébergement web et l'enregistrement de noms de domaine. Nous accompagnons les entreprises gabonaises dans leur transformation digitale depuis plus de 5 ans.",
        },
        {
          q: "Dans quelles villes intervenez-vous ?",
          a: "Nous sommes basés à Libreville, mais nous intervenons dans tout le Gabon (Port-Gentil, Franceville, Oyem, etc.) ainsi qu'en Afrique centrale. Nous travaillons aussi avec des clients internationaux grâce à nos solutions à distance.",
        },
        {
          q: "Quel est votre délai moyen de livraison ?",
          a: "Cela dépend du projet : un site vitrine prend 2-4 semaines, un site e-commerce 6-8 semaines, et une application mobile 8-12 semaines. Nous établissons un calendrier précis lors du devis.",
        },
      ],
    },
    {
      title: "Développement Web",
      icon: Globe,
      questions: [
        {
          q: "Quelles technologies utilisez-vous ?",
          a: "Nous utilisons les technologies les plus modernes : React, Next.js, Node.js, WordPress, PHP. Nous choisissons la stack technique la plus adaptée à vos besoins et budget.",
        },
        {
          q: "Proposez-vous la maintenance après livraison ?",
          a: "Oui ! Nous offrons des contrats de maintenance mensuels incluant mises à jour, sauvegardes, monitoring 24/7, et support technique. Vous pouvez aussi choisir une maintenance à la demande.",
        },
        {
          q: "Mon site sera-t-il optimisé pour le référencement (SEO) ?",
          a: "Absolument. Tous nos sites sont développés selon les meilleures pratiques SEO : structure optimisée, vitesse de chargement, responsive design, sitemap, balises meta. Nous proposons aussi des prestations SEO avancées.",
        },
        {
          q: "Puis-je gérer mon site moi-même après la livraison ?",
          a: "Oui ! Nous intégrons des CMS intuitifs (WordPress, interface d'administration custom) et vous formons à leur utilisation. Vous pourrez modifier textes, images, et ajouter du contenu en toute autonomie.",
        },
      ],
    },
    {
      title: "Développement Mobile",
      icon: Smartphone,
      questions: [
        {
          q: "Développez-vous pour iOS et Android ?",
          a: "Oui, nous développons des applications natives (Swift/Kotlin) et cross-platform (React Native, Flutter). Les apps cross-platform coûtent moins cher et permettent un déploiement simultané sur iOS et Android.",
        },
        {
          q: "Gérez-vous la publication sur les stores ?",
          a: "Oui, nous nous occupons de toute la procédure : création des comptes développeur, préparation des assets (icônes, screenshots), soumission, et suivi de la validation Apple/Google.",
        },
        {
          q: "Proposez-vous des applications connectées à une base de données ?",
          a: "Bien sûr ! Nous développons des backends complets (API REST, GraphQL) avec gestion utilisateurs, paiements, notifications push, synchronisation temps réel, etc.",
        },
      ],
    },
    {
      title: "Hébergement & Domaine",
      icon: Globe,
      questions: [
        {
          q: "Où sont hébergés les sites web ?",
          a: "Nous utilisons des serveurs professionnels haute performance (OVH, AWS, Vercel) avec datacenters en Europe et garantie 99.9% uptime. Nous proposons aussi l'hébergement local au Gabon si nécessaire.",
        },
        {
          q: "Comment enregistrer un nom de domaine .ga ?",
          a: "Nous nous occupons de tout : vérification de disponibilité, réservation, configuration DNS, et renouvellement automatique. Les domaines .ga sont gérés par l'ANINF (Agence Nationale des Infrastructures Numériques).",
        },
        {
          q: "Que se passe-t-il si mon site tombe ?",
          a: "Nos serveurs sont monitorés 24/7. En cas d'incident, nous recevons une alerte immédiate et intervenons sous 15 minutes. Nous effectuons aussi des sauvegardes quotidiennes automatiques.",
        },
      ],
    },
    {
      title: "Tarifs & Paiement",
      icon: CreditCard,
      questions: [
        {
          q: "Comment sont calculés vos tarifs ?",
          a: "Nos tarifs dépendent de la complexité du projet, des fonctionnalités souhaitées, et du design. Nous proposons des forfaits clairs dès le devis initial. Pas de surprise, pas de coûts cachés.",
        },
        {
          q: "Proposez-vous des facilités de paiement ?",
          a: "Oui ! Nous acceptons le paiement en plusieurs fois (30% au démarrage, 40% à mi-parcours, 30% à la livraison). Moyens de paiement : virement bancaire, Mobile Money, Airtel Money, carte bancaire.",
        },
        {
          q: "Y a-t-il des frais cachés ?",
          a: "Non, notre devis inclut tout : développement, tests, mise en ligne, formation, et 1 mois de support gratuit. Les seuls frais récurrents sont l'hébergement et le renouvellement de domaine (indiqués clairement).",
        },
        {
          q: "Proposez-vous un devis gratuit ?",
          a: "Oui, le devis est 100% gratuit et sans engagement. Contactez-nous avec votre projet, nous vous répondons sous 24h avec une proposition détaillée et un planning prévisionnel.",
        },
      ],
    },
    {
      title: "Processus & Support",
      icon: Clock,
      questions: [
        {
          q: "Comment se déroule un projet avec vous ?",
          a: "1) Échange initial & brief, 2) Devis & validation, 3) Maquettes & design, 4) Développement avec points réguliers, 5) Tests & corrections, 6) Mise en ligne & formation, 7) Support post-lancement.",
        },
        {
          q: "Puis-je suivre l'avancement de mon projet ?",
          a: "Absolument ! Vous avez accès à un espace client où vous visualisez le projet en temps réel. Nous organisons aussi des points hebdomadaires par visio/téléphone pour valider les étapes.",
        },
        {
          q: "Comment contacter le support technique ?",
          a: "Par email (contact@xeta-digital.com), téléphone, WhatsApp, ou via votre espace client. Notre équipe répond sous 2h en jours ouvrés. Support d'urgence 24/7 pour les clients en maintenance premium.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <>
      <SEO
        title="FAQ - Questions Fréquentes | XETA-DIGITAL CORP"
        description="Trouvez les réponses à vos questions sur nos services de développement web, mobile, hébergement et domaines au Gabon."
      />
      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4 animate-fade-in-up">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Aide & Support</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white animate-fade-in-up animation-delay-100">
                Questions Fréquentes
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
                Toutes les réponses à vos questions sur nos services
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-12 bg-background border-b">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher dans la FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 text-lg border-2 focus-visible:ring-xeta-blue"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-spacing">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {filteredCategories.length > 0 ? (
                <div className="space-y-12">
                  {filteredCategories.map((category, catIndex) => {
                    const Icon = category.icon;
                    return (
                      <div key={catIndex}>
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-xeta-blue-light flex items-center justify-center">
                            <Icon className="w-6 h-6 text-xeta-blue" />
                          </div>
                          <h2 className="text-3xl font-heading font-bold">
                            {category.title}
                          </h2>
                        </div>

                        <div className="space-y-4">
                          {category.questions.map((item, qIndex) => {
                            const globalIndex = catIndex * 100 + qIndex;
                            const isOpen = openIndex === globalIndex;

                            return (
                              <Card
                                key={qIndex}
                                className="overflow-hidden border-2 card-hover"
                              >
                                <button
                                  onClick={() =>
                                    setOpenIndex(isOpen ? null : globalIndex)
                                  }
                                  className="w-full p-6 flex items-center justify-between text-left hover:bg-xeta-blue-light/10 transition-colors"
                                >
                                  <span className="text-lg font-heading font-semibold pr-8">
                                    {item.q}
                                  </span>
                                  <ChevronDown
                                    className={`w-6 h-6 flex-shrink-0 text-xeta-blue transition-transform ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {isOpen && (
                                  <div className="px-6 pb-6 animate-fade-in">
                                    <div className="pt-4 border-t">
                                      <p className="text-muted-foreground leading-relaxed">
                                        {item.a}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Card className="p-16 text-center border-2">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Essayez avec d'autres mots-clés ou{" "}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xeta-blue hover:underline"
                    >
                      réinitialisez la recherche
                    </button>
                  </p>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-spacing bg-gradient-to-br from-background to-xeta-blue-light/20">
          <div className="container">
            <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center border-2 bg-gradient-hero text-white">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Notre équipe est là pour vous aider. Contactez-nous et obtenez une réponse personnalisée sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  <Link href="/contact">
                    Nous Contacter
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:+241XXXXXXXX">
                    Appeler Maintenant
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}