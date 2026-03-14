import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-xeta.png"
              alt="XETA Digital Corp"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-xeta-blue transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="text-foreground hover:text-xeta-blue transition-colors font-medium"
            >
              À Propos
            </Link>
            
            <div className="relative group">
              <button className="text-foreground hover:text-xeta-blue transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/realisations"
              className="text-foreground hover:text-xeta-blue transition-colors font-medium"
            >
              Réalisations
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-xeta-blue transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-xeta-blue transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/contact">Devis Gratuit</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
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
          <div className="lg:hidden py-6 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-xeta-blue transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="block py-2 text-foreground hover:text-xeta-blue transition-colors"
            >
              À Propos
            </Link>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 pl-4 text-muted-foreground hover:text-xeta-blue transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/realisations"
              className="block py-2 text-foreground hover:text-xeta-blue transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-foreground hover:text-xeta-blue transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-xeta-blue transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact">Devis Gratuit</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}