import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Développement Web", href: "/services/developpement-web" },
    { name: "Développement Mobile", href: "/services/developpement-mobile" },
    { name: "Hébergement Web", href: "/services/hebergement" },
    { name: "Nom de Domaine", href: "/services/domaine" },
    { name: "Emails Professionnels", href: "/services/emails-professionnels" },
  ];

  return (
    <>
      {/* Top Bar avec Contact Rapide */}
      <div className="bg-xeta-blue-dark text-white text-sm py-2 hidden md:block">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:+241XXXXXXXX" className="flex items-center gap-2 hover:text-xeta-blue-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>+241 XX XX XX XX</span>
              </a>
              <a href="mailto:contact@xeta-digital.com" className="flex items-center gap-2 hover:text-xeta-blue-light transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@xeta-digital.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                ✓ Devis Gratuit 24h
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                🔥 -20% Ce Mois !
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo-xeta.png"
                alt="XETA Digital Corp"
                width={180}
                height={50}
                className="h-12 w-auto group-hover:scale-105 transition-transform"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/a-propos"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                À Propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
              
              <div className="relative group">
                <button className="text-foreground hover:text-xeta-blue transition-colors font-medium flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-4 hover:bg-xeta-blue-light/10 hover:text-xeta-blue transition-all first:rounded-t-xl last:rounded-b-xl border-b border-border last:border-0 group/item"
                    >
                      <span className="flex items-center justify-between">
                        {service.name}
                        <ChevronDown className="w-4 h-4 -rotate-90 group-hover/item:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/realisations"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                Réalisations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/tarifs"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                Tarifs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-xeta-blue transition-colors font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xeta-blue group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                <Link href="/tarifs">Voir Tarifs</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-xeta-blue to-blue-600 hover:from-xeta-blue/90 hover:to-blue-700 shadow-lg hover:shadow-xeta-blue/50 hover:scale-105 transition-all">
                <Link href="/contact">Devis Gratuit</Link>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 space-y-4 border-t border-border animate-in slide-in-from-top-4">
              <Link
                href="/"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <div className="space-y-2">
                <p className="font-semibold text-foreground px-4 py-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-3 pl-8 pr-4 rounded-lg text-muted-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/realisations"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réalisations
              </Link>
              <Link
                href="/tarifs"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/blog"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 rounded-lg text-foreground hover:text-xeta-blue hover:bg-xeta-blue-light/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button asChild className="w-full" variant="outline">
                  <Link href="/tarifs" onClick={() => setIsMobileMenuOpen(false)}>
                    Voir Tarifs
                  </Link>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-xeta-blue to-blue-600">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Devis Gratuit
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}