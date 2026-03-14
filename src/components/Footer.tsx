import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-xeta-blue-dark text-white">
      <div className="container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image
              src="/logo-xeta.png"
              alt="XETA Digital Corp"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Votre partenaire digital au Gabon. Nous transformons vos idées en solutions numériques performantes.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xeta-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xeta-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/developpement-web" className="text-white/80 hover:text-white transition-colors">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services/developpement-mobile" className="text-white/80 hover:text-white transition-colors">
                  Développement Mobile
                </Link>
              </li>
              <li>
                <Link href="/services/hebergement" className="text-white/80 hover:text-white transition-colors">
                  Hébergement Web
                </Link>
              </li>
              <li>
                <Link href="/services/domaine" className="text-white/80 hover:text-white transition-colors">
                  Nom de Domaine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-white/80 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-white/80 hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Libreville, Gabon
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  +241 XX XX XX XX
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  contact@xeta-digital.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} XETA Digital Corp. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-white/60 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-white/60 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}