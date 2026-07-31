import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Shield, Lock, Eye, Database, FileText, Mail, AlertCircle } from "lucide-react";

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      icon: Database,
      title: "1. Collecte des Données",
      content: [
        {
          subtitle: "Données collectées",
          text: "Nous collectons les informations suivantes lorsque vous utilisez notre site web ou nos services :",
          list: [
            "Informations d'identification : nom, prénom, adresse email, numéro de téléphone",
            "Informations professionnelles : entreprise, fonction, secteur d'activité",
            "Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite",
            "Données de formulaire : messages de contact, demandes de devis",
            "Cookies et technologies similaires (voir section Cookies)"
          ]
        },
        {
          subtitle: "Méthodes de collecte",
          list: [
            "Formulaires de contact et demandes de devis",
            "Inscription à notre newsletter",
            "Cookies et technologies de suivi",
            "Communications par email ou téléphone",
            "Création de compte client"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "2. Utilisation des Données",
      content: [
        {
          subtitle: "Finalités du traitement",
          text: "Vos données personnelles sont utilisées pour :",
          list: [
            "Répondre à vos demandes de contact et devis",
            "Fournir nos services de développement web et mobile",
            "Gérer votre compte client et vos commandes",
            "Envoyer des communications marketing (avec votre consentement)",
            "Améliorer notre site web et nos services",
            "Respecter nos obligations légales et contractuelles",
            "Prévenir la fraude et assurer la sécurité de nos systèmes",
            "Réaliser des analyses statistiques anonymisées"
          ]
        },
        {
          subtitle: "Base légale",
          text: "Le traitement de vos données repose sur :",
          list: [
            "Votre consentement explicite (newsletter, cookies non essentiels)",
            "L'exécution d'un contrat (fourniture de services)",
            "Le respect d'obligations légales (comptabilité, facturation)",
            "Notre intérêt légitime (amélioration de nos services, sécurité)"
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: "3. Partage et Transfert des Données",
      content: [
        {
          subtitle: "Destinataires des données",
          text: "Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées avec :",
          list: [
            "Notre équipe interne (accès limité au strict nécessaire)",
            "Prestataires techniques : hébergement (Vercel), emailing (SMTP 20i.com)",
            "Services de paiement (si applicable)",
            "Autorités légales sur réquisition judiciaire"
          ]
        },
        {
          subtitle: "Transferts internationaux",
          text: "Certains de nos prestataires (Vercel, Google Analytics) peuvent stocker des données hors du Gabon. Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, Privacy Shield)."
        }
      ]
    },
    {
      icon: FileText,
      title: "4. Cookies et Technologies de Suivi",
      content: [
        {
          subtitle: "Types de cookies utilisés",
          list: [
            "Cookies essentiels : nécessaires au fonctionnement du site (pas de consentement requis)",
            "Cookies analytiques : Google Analytics pour mesurer l'audience (consentement requis)",
            "Cookies de préférence : mémorisation de vos choix (langue, thème)",
            "Cookies marketing : suivi des campagnes publicitaires (consentement requis)"
          ]
        },
        {
          subtitle: "Gestion des cookies",
          text: "Vous pouvez gérer vos préférences cookies à tout moment via :",
          list: [
            "Notre bandeau de consentement lors de votre première visite",
            "Les paramètres de votre navigateur",
            "Les outils de désactivation des cookies tiers (Google Analytics Opt-out)"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "5. Vos Droits",
      content: [
        {
          subtitle: "Droits garantis",
          text: "Conformément au RGPD et aux lois gabonaises, vous disposez des droits suivants :",
          list: [
            "Droit d'accès : obtenir une copie de vos données personnelles",
            "Droit de rectification : corriger des données inexactes ou incomplètes",
            "Droit à l'effacement : demander la suppression de vos données (\"droit à l'oubli\")",
            "Droit à la limitation : restreindre le traitement dans certains cas",
            "Droit à la portabilité : recevoir vos données dans un format structuré",
            "Droit d'opposition : refuser un traitement basé sur l'intérêt légitime",
            "Droit de retirer votre consentement : à tout moment pour les traitements consentis",
            "Droit de ne pas faire l'objet d'une décision automatisée"
          ]
        },
        {
          subtitle: "Exercer vos droits",
          text: "Pour exercer vos droits, contactez-nous par :",
          list: [
            "Email : contact@xeta-digital.com (objet : \"Demande RGPD\")",
            "Téléphone : +241-77-69-47-23",
            "Courrier : XETA-DIGITAL CORP, Libreville, Gabon"
          ]
        },
        {
          text: "Nous nous engageons à répondre sous 30 jours maximum. Une pièce d'identité pourra être demandée pour vérifier votre identité."
        }
      ]
    },
    {
      icon: Lock,
      title: "6. Conservation des Données",
      content: [
        {
          subtitle: "Durées de conservation",
          list: [
            "Données de contact/devis : 3 ans après le dernier contact",
            "Données clients : durée du contrat + 5 ans (obligations comptables)",
            "Données de navigation : 13 mois (cookies analytiques)",
            "Données de newsletter : jusqu'à désinscription",
            "Logs de sécurité : 1 an"
          ]
        },
        {
          text: "À l'issue de ces délais, vos données sont supprimées ou anonymisées de manière irréversible."
        }
      ]
    },
    {
      icon: Shield,
      title: "7. Sécurité des Données",
      content: [
        {
          subtitle: "Mesures de protection",
          text: "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :",
          list: [
            "Chiffrement HTTPS sur l'ensemble du site",
            "Hébergement sécurisé avec sauvegardes automatiques",
            "Accès restreint aux données personnelles (principe du moindre privilège)",
            "Formation de notre équipe aux bonnes pratiques RGPD",
            "Procédures de gestion des incidents de sécurité",
            "Audits de sécurité réguliers"
          ]
        },
        {
          subtitle: "Notification de violation",
          text: "En cas de violation de données susceptible de présenter un risque pour vos droits, nous vous en informerons dans les 72 heures et notifierons l'autorité de contrôle compétente."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "8. Mineurs",
      content: [
        {
          text: "Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles d'enfants. Si vous êtes parent et découvrez que votre enfant nous a fourni des informations, contactez-nous pour suppression immédiate."
        }
      ]
    },
    {
      icon: FileText,
      title: "9. Modifications de la Politique",
      content: [
        {
          text: "Cette politique de confidentialité peut être mise à jour périodiquement pour refléter les changements de nos pratiques ou de la législation. La date de dernière mise à jour est indiquée en haut de cette page. Les modifications significatives vous seront notifiées par email ou via une annonce sur notre site."
        }
      ]
    },
    {
      icon: Mail,
      title: "10. Contact et Réclamation",
      content: [
        {
          subtitle: "Contact DPO (Délégué à la Protection des Données)",
          list: [
            "Email : contact@xeta-digital.com",
            "Téléphone : +241-77-69-47-23",
            "Adresse : XETA-DIGITAL CORP, Libreville, Gabon"
          ]
        },
        {
          subtitle: "Droit de réclamation",
          text: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l'autorité de contrôle compétente au Gabon ou dans votre pays de résidence."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Politique de Confidentialité - XETA-DIGITAL CORP | Protection RGPD"
        description="Politique de confidentialité et protection des données personnelles de XETA-DIGITAL CORP. Transparence totale sur la collecte, l'utilisation et la sécurité de vos données."
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-xeta-blue/5 via-transparent to-xeta-orange/5" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-xeta-blue/10 border border-xeta-blue/20">
                <Shield className="w-4 h-4 text-xeta-blue" />
                <span className="text-sm font-medium text-xeta-blue">Protection des Données</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Politique de Confidentialité
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                XETA-DIGITAL CORP s'engage à protéger votre vie privée et vos données personnelles conformément au RGPD et aux lois gabonaises.
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Dernière mise à jour : 31 juillet 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border shadow-sm p-8 space-y-6">
                <h2 className="text-2xl font-heading font-bold">Introduction</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    La présente politique de confidentialité décrit comment <strong className="text-foreground">XETA-DIGITAL CORP</strong> (ci-après "nous", "notre" ou "XETA") collecte, utilise, stocke et protège vos données personnelles lorsque vous utilisez notre site web <strong className="text-foreground">xeta-digital.com</strong> et nos services.
                  </p>
                  <p>
                    En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                  </p>
                  <div className="bg-xeta-blue/5 border border-xeta-blue/20 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-foreground">💡 Transparence :</strong> Nous croyons en la transparence totale. Cette politique est rédigée dans un langage clair pour que vous compreniez exactement comment nous traitons vos données.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections détaillées */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-card rounded-2xl border shadow-sm p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-xeta-blue/10 to-xeta-orange/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-xeta-blue" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-heading font-bold mb-6">{section.title}</h2>
                        
                        <div className="space-y-6">
                          {section.content.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                              {item.subtitle && (
                                <h3 className="text-lg font-semibold text-foreground">{item.subtitle}</h3>
                              )}
                              
                              {item.text && (
                                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                              )}
                              
                              {item.list && (
                                <ul className="space-y-2">
                                  {item.list.map((listItem, listIdx) => (
                                    <li key={listIdx} className="flex items-start gap-3 text-muted-foreground">
                                      <div className="w-1.5 h-1.5 rounded-full bg-xeta-blue mt-2 flex-shrink-0" />
                                      <span className="leading-relaxed">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-xeta-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Des Questions sur vos Données ?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection de vos données personnelles.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:contact@xeta-digital.com?subject=Question%20RGPD"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-xeta-blue rounded-xl font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Contactez-nous
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Formulaire de contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liens connexes */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-heading font-bold mb-6">Documents connexes</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="/mentions-legales"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border hover:border-xeta-blue/50 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-xeta-blue" />
                  <div>
                    <div className="font-semibold group-hover:text-xeta-blue transition-colors">Mentions Légales</div>
                    <div className="text-sm text-muted-foreground">Informations juridiques</div>
                  </div>
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border hover:border-xeta-blue/50 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-xeta-blue" />
                  <div>
                    <div className="font-semibold group-hover:text-xeta-blue transition-colors">Contact</div>
                    <div className="text-sm text-muted-foreground">Posez vos questions</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}