import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  ArrowRight,
  Code2,
  Smartphone,
  Server,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function FAQ() {
  const categories = [
    {
      id: "general",
      title: "Questions Générales",
      icon: HelpCircle,
    },
    {
      id: "web",
      title: "Développement Web",
      icon: Code2,
    },
    {
      id: "mobile",
      title: "Développement Mobile",
      icon: Smartphone,
    },
    {
      id: "hosting",
      title: "Hébergement",
      icon: Server,
    },
    {
      id: "domain",
      title: "Nom de Domaine",
      icon: Globe,
    },
  ];

  const faqs = {
    general: [
      {
        question: "Qu'est-ce que XETA Digital Corp ?",
        answer: "XETA Digital Corp est une agence digitale gabonaise fondée en 2019, spécialisée dans le développement web, mobile, l'hébergement et l'enregistrement de noms de domaine. Nous accompagnons les entreprises gabonaises dans leur transformation digitale.",
      },
      {
        question: "Où êtes-vous situés ?",
        answer: "Nous sommes basés à Libreville, au Gabon. Nous servons des clients à travers tout le Gabon et l'Afrique Centrale. Nous offrons également des consultations à distance pour les clients internationaux.",
      },
      {
        question: "Quels sont vos délais de réalisation ?",
        answer: "Les délais varient selon la complexité du projet. Un site vitrine simple peut être livré en 2-3 semaines, tandis qu'une application web complexe peut prendre 2-3 mois. Nous fournissons toujours un planning détaillé après l'analyse de vos besoins.",
      },
      {
        question: "Proposez-vous un support après livraison ?",
        answer: "Oui ! Tous nos projets incluent une période de garantie et nous proposons des contrats de maintenance mensuels pour assurer le bon fonctionnement continu de votre solution.",
      },
    ],
    web: [
      {
        question: "Quelles technologies utilisez-vous ?",
        answer: "Nous utilisons les technologies modernes les plus performantes : React, Next.js, TypeScript pour le frontend, Node.js pour le backend, et PostgreSQL ou MongoDB pour les bases de données. Nous utilisons aussi WordPress pour certains projets.",
      },
      {
        question: "Mon site sera-t-il responsive (mobile-friendly) ?",
        answer: "Absolument ! Tous nos sites sont développés avec une approche mobile-first, garantissant une expérience optimale sur tous les appareils (smartphones, tablettes, ordinateurs).",
      },
      {
        question: "Incluez-vous le SEO dans vos services ?",
        answer: "Oui, l'optimisation SEO de base est incluse dans tous nos projets web : structure sémantique, balises meta, sitemap, performance. Nous proposons aussi des services SEO avancés en option.",
      },
      {
        question: "Puis-je mettre à jour mon site moi-même ?",
        answer: "Oui ! Nous pouvons intégrer un CMS (système de gestion de contenu) qui vous permettra de mettre à jour facilement textes, images et pages. Nous fournissons une formation complète.",
      },
    ],
    mobile: [
      {
        question: "Développez-vous des apps iOS et Android ?",
        answer: "Oui, nous développons des applications pour iOS et Android. Nous proposons à la fois le développement natif (Swift/Kotlin) et cross-platform (React Native) selon vos besoins et budget.",
      },
      {
        question: "Quelle est la différence entre natif et cross-platform ?",
        answer: "Le développement natif offre les meilleures performances mais nécessite deux codebases distinctes. Le cross-platform (React Native) permet d'avoir une seule codebase pour iOS et Android, réduisant les coûts de 40%.",
      },
      {
        question: "Gérez-vous la publication sur les stores ?",
        answer: "Oui, nous prenons en charge tout le processus de publication sur l'App Store (Apple) et le Play Store (Google), incluant la création des comptes développeur, les assets et la soumission.",
      },
      {
        question: "Les apps fonctionnent-elles hors ligne ?",
        answer: "Nous pouvons intégrer des fonctionnalités hors ligne selon vos besoins. Cela dépend du type d'application et des données à synchroniser.",
      },
    ],
    hosting: [
      {
        question: "Où sont hébergés les serveurs ?",
        answer: "Nous utilisons des datacenters premium situés stratégiquement pour optimiser la vitesse d'accès depuis le Gabon et l'Afrique Centrale. Nous garantissons une disponibilité de 99.9%.",
      },
      {
        question: "Que se passe-t-il si mon site plante ?",
        answer: "Notre équipe technique surveille les serveurs 24/7. En cas de problème, nous intervenons immédiatement. Nous effectuons également des sauvegardes quotidiennes pour restauration rapide si nécessaire.",
      },
      {
        question: "Puis-je changer de plan d'hébergement ?",
        answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. L'ajustement de facturation se fait au prorata.",
      },
      {
        question: "Les certificats SSL sont-ils inclus ?",
        answer: "Oui, tous nos plans d'hébergement incluent un certificat SSL gratuit pour sécuriser votre site (HTTPS).",
      },
    ],
    domain: [
      {
        question: "Combien coûte un nom de domaine ?",
        answer: "Les prix varient selon l'extension : .com à partir de 12,000 FCFA/an, .ga à partir de 8,000 FCFA/an, .africa à partir de 20,000 FCFA/an. Consultez notre page Nom de Domaine pour la liste complète.",
      },
      {
        question: "Puis-je transférer mon domaine existant ?",
        answer: "Oui, nous facilitons le transfert de domaines depuis d'autres registraires. Le processus prend généralement 5-7 jours et nous vous accompagnons à chaque étape.",
      },
      {
        question: "Que se passe-t-il si je ne renouvelle pas mon domaine ?",
        answer: "Vous recevrez plusieurs rappels avant l'expiration. Après expiration, il y a une période de grâce de 30 jours. Passé ce délai, le domaine redevient disponible pour d'autres.",
      },
      {
        question: "Puis-je avoir plusieurs domaines pour un seul site ?",
        answer: "Oui, vous pouvez acheter plusieurs noms de domaine et les rediriger vers votre site principal, ou créer des alias. C'est une bonne stratégie pour protéger votre marque.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <>
      <SEO
        title="FAQ - Questions Fréquentes | XETA Digital Corp"
        description="Réponses aux questions fréquentes sur nos services de développement web, mobile, hébergement et noms de domaine au Gabon."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Questions Fréquentes
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="rounded-full"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.title}
                  </Button>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 border-2">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                      <AccordionTrigger className="text-left text-lg font-heading font-semibold hover:text-xeta-blue">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-xeta-blue-light/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="p-12 text-center border-2">
                <MessageCircle className="w-16 h-16 text-xeta-blue mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Vous ne trouvez pas votre réponse ?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre équipe est là pour répondre à toutes vos questions
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Nous Contacter
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}