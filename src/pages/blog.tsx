import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Smartphone,
  Code2,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "Les Tendances du Développement Web en 2026",
    excerpt: "Découvrez les technologies et pratiques qui vont dominer le développement web cette année et comment les adopter pour votre entreprise.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    category: "Développement Web",
    date: "10 Mars 2026",
    readTime: "8 min",
    author: "XETA Digital Team",
  };

  const posts = [
    {
      title: "Comment Choisir la Bonne Solution d'Hébergement Web ?",
      excerpt: "Guide complet pour sélectionner l'hébergement adapté aux besoins de votre entreprise au Gabon.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "Hébergement",
      date: "8 Mars 2026",
      readTime: "5 min",
      icon: Globe,
    },
    {
      title: "Développement Mobile : Native vs Cross-Platform",
      excerpt: "Analyse comparative pour vous aider à choisir la meilleure approche pour votre application mobile.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      category: "Mobile",
      date: "5 Mars 2026",
      readTime: "6 min",
      icon: Smartphone,
    },
    {
      title: "Optimisation SEO pour les Entreprises Gabonaises",
      excerpt: "Stratégies SEO locales pour améliorer votre visibilité sur Google au Gabon et en Afrique Centrale.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "SEO & Marketing",
      date: "2 Mars 2026",
      readTime: "7 min",
      icon: TrendingUp,
    },
    {
      title: "Sécurité Web : Protégez Votre Site en 2026",
      excerpt: "Les meilleures pratiques de sécurité pour protéger votre site web contre les menaces modernes.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      category: "Sécurité",
      date: "28 Fév 2026",
      readTime: "5 min",
      icon: Shield,
    },
    {
      title: "Next.js 15 : Nouvelles Fonctionnalités et Performance",
      excerpt: "Tout ce que vous devez savoir sur la dernière version de Next.js et ses améliorations de performance.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      category: "Développement",
      date: "25 Fév 2026",
      readTime: "10 min",
      icon: Code2,
    },
    {
      title: "PWA : L'Avenir des Applications Mobiles ?",
      excerpt: "Progressive Web Apps offrent une alternative performante aux apps natives. Découvrez leurs avantages.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      category: "Mobile",
      date: "20 Fév 2026",
      readTime: "6 min",
      icon: Zap,
    },
  ];

  const categories = [
    "Tous les articles",
    "Développement Web",
    "Développement Mobile",
    "Hébergement",
    "SEO & Marketing",
    "Sécurité",
  ];

  return (
    <>
      <SEO
        title="Blog XETA Digital - Actualités Tech et Conseils Web"
        description="Articles, tutoriels et actualités sur le développement web, mobile, hébergement et technologies digitales au Gabon."
      />
      <Header />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 bg-gradient-to-br from-xeta-blue via-xeta-blue-dark to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,149,218,0.2),transparent)]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                Blog & Actualités
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Conseils, tutoriels et tendances du monde digital
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <Card className="overflow-hidden border-2 mb-16">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-xeta-blue text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Article Vedette
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-xeta-blue">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <Button asChild size="lg" className="w-fit">
                    <Link href="#">
                      Lire l'Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <Card key={index} className="overflow-hidden border-2 card-hover group">
                    <div className="relative h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-xeta-blue flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <span className="inline-block text-xs font-semibold text-xeta-blue mb-3">
                        {post.category}
                      </span>

                      <h3 className="text-xl font-heading font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>

                      <Button asChild variant="link" className="p-0 h-auto text-xeta-blue">
                        <Link href="#">
                          Lire la suite
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-br from-background to-xeta-blue-light/20">
          <div className="container">
            <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Restez Informé
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-3 rounded-lg text-foreground"
                />
                <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}