import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, FileText, MapPin, Phone, Mail, Globe, User } from "lucide-react";

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales - XETA-DIGITAL CORP"
        description="Mentions légales et informations juridiques de XETA-DIGITAL CORP, agence digitale au Gabon."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Mentions Légales
              </h1>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-8 rounded-2xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-xeta-blue/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-xeta-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">Éditeur du Site</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Raison sociale</div>
                      <div>XETA-DIGITAL CORP</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Forme juridique</div>
                      <div>Entreprise Individuelle</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Siège social</div>
                      <div>Libreville, Gabon</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Téléphone</div>
                      <a href="tel:+241776947230" className="hover:text-xeta-blue transition-colors">
                        +241 77 69 47 23
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href="mailto:contact@xeta-digital.com" className="hover:text-xeta-blue transition-colors">
                        contact@xeta-digital.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Site web</div>
                      <div>xeta-digital.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-xeta-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Directeur de publication</div>
                      <div>Représentant légal de XETA-DIGITAL CORP</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Hébergement
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Le site est hébergé par XETA-DIGITAL CORP sur des serveurs sécurisés situés en Afrique.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Propriété Intellectuelle
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, logos, vidéos, etc.) est la propriété exclusive de XETA-DIGITAL CORP ou de ses partenaires. Toute reproduction, distribution, modification ou exploitation des contenus du site, en tout ou partie, est strictement interdite sans autorisation écrite préalable.
                  </p>
                  <p>
                    Les marques, logos, et signes distinctifs reproduits sur ce site sont la propriété de XETA-DIGITAL CORP. Toute reproduction totale ou partielle de ces marques ou de ces logos sans autorisation préalable et écrite est interdite.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Protection des Données Personnelles
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Conformément à la réglementation en vigueur au Gabon, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant.
                  </p>
                  <p>
                    Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par XETA-DIGITAL CORP pour la gestion de la relation client, l'envoi de newsletters et de communications commerciales. Elles sont conservées pendant une durée de 3 ans et sont destinées uniquement à l'usage interne de XETA-DIGITAL CORP.
                  </p>
                  <p>
                    Pour exercer vos droits, vous pouvez nous contacter à l'adresse :{" "}
                    <a href="mailto:contact@xeta-digital.com" className="text-xeta-blue hover:underline">
                      contact@xeta-digital.com
                    </a>
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                  </p>
                  <p>
                    Les cookies utilisés ont pour finalité :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'amélioration de la navigation sur le site</li>
                    <li>L'analyse statistique de la fréquentation</li>
                    <li>La personnalisation du contenu</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Responsabilité
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    XETA-DIGITAL CORP s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, XETA-DIGITAL CORP ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p>
                    XETA-DIGITAL CORP ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de sites externes qui y sont liés.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Liens Hypertextes
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ce site peut contenir des liens vers des sites externes. XETA-DIGITAL CORP n'assume aucune responsabilité quant au contenu des sites vers lesquels elle renvoie et dont elle n'est pas l'éditeur.
                  </p>
                  <p>
                    La création de liens hypertextes vers le site www.xeta-digital.com nécessite une autorisation préalable et écrite de XETA-DIGITAL CORP.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Droit Applicable
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Les présentes mentions légales sont régies par le droit gabonais. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Libreville, Gabon.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Modifications
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    XETA-DIGITAL CORP se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Dernière mise à jour :</strong> Mars 2026
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}