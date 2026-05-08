import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BlogSidebar } from "@/components/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Smartphone, Code2, Zap, LayoutTemplate, Layers, CheckCircle2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ArticleMobile() {
  const post = {
    title: "Guide Complet : Créer une Application Mobile Performante",
    excerpt: "Les étapes essentielles pour développer une app mobile qui cartonne, adaptée au marché gabonais.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    author: {
      name: "Mobile Dev Team",
      role: "Experts Mobile chez XETA Digital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    },
    date: "5 Mars 2026",
    readTime: "10 min",
    category: "Développement",
    tags: ["Mobile", "App Dev", "React Native", "Flutter", "UX/UI"],
    url: "https://xeta-digital.ga/blog/developpement/guide-complet-creer-application-mobile-performante"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(post.url);
    // Dans un vrai projet, ajouter un toast ici
  };

  // Structured Data pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-03-05T08:00:00+01:00",
    "dateModified": "2026-03-05T08:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "XETA Digital Corp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xeta-digital.ga/logo-xeta.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog XETA Digital Corp`}
        description={post.excerpt}
        image={post.image}
        url={post.url}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <FloatingCTA />

      <main className="min-h-screen pt-20 bg-muted/30">
        {/* Breadcrumb */}
        <div className="bg-background border-b">
          <div className="container py-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-xeta-blue transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-xeta-blue transition-colors">{post.category}</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground truncate">{post.title}</span>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contenu Principal */}
              <div className="lg:col-span-2">
                <Link href="/blog">
                  <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Retour aux articles
                  </Button>
                </Link>

                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-xeta-blue hover:bg-xeta-blue-dark">{post.category}</Badge>
                  <span className="text-muted-foreground text-sm">•</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between py-6 border-y mb-10">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold">{post.author.name}</div>
                      <div className="text-sm text-muted-foreground">{post.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:text-[#1877F2] hover:border-[#1877F2]">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2]">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:text-[#0A66C2] hover:border-[#0A66C2]">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={copyToClipboard}>
                      <LinkIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Image Principale */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-xeta-blue hover:prose-a:text-xeta-blue-dark">
                  <p>
                    Le marché du mobile au Gabon et en Afrique connaît une croissance explosive. Avec plus de <strong>80% des connexions internet s'effectuant via smartphone</strong>, posséder une application mobile performante n'est plus un luxe pour une entreprise, c'est une nécessité stratégique.
                  </p>

                  <p>
                    Cependant, lancer une application qui se démarque dans les stores, qui attire les utilisateurs et surtout, qui les fidélise, demande une approche structurée. Voici notre guide complet pour créer une application mobile performante, de l'idée au lancement.
                  </p>

                  <h2 className="text-3xl mt-12 mb-6 text-foreground flex items-center">
                    <LayoutTemplate className="w-8 h-8 mr-3 text-xeta-blue" />
                    1. La Phase de Découverte et Stratégie
                  </h2>

                  <p>
                    Une erreur commune est de plonger directement dans le code. Une application réussie commence par une solide fondation stratégique.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <Card className="p-6 border-l-4 border-l-xeta-blue">
                      <h4 className="font-bold text-lg mb-2">Définir l'Objectif</h4>
                      <p className="text-muted-foreground text-sm">
                        Quel problème spécifique votre application résout-elle ? Si vous ne pouvez pas l'expliquer en une phrase, le concept est trop complexe.
                      </p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-xeta-blue-light">
                      <h4 className="font-bold text-lg mb-2">Étude de Marché</h4>
                      <p className="text-muted-foreground text-sm">
                        Analysez vos concurrents locaux et internationaux. Que font-ils bien ? Quelles sont leurs lacunes (lisez les avis négatifs sur les stores) ?
                      </p>
                    </Card>
                  </div>

                  <h2 className="text-3xl mt-12 mb-6 text-foreground flex items-center">
                    <Layers className="w-8 h-8 mr-3 text-xeta-blue" />
                    2. UX/UI Design : Centré sur l'Utilisateur
                  </h2>

                  <p>
                    Le design de votre application détermine si un utilisateur va la garder ou la désinstaller dans les 30 premières secondes.
                  </p>

                  <ul className="space-y-4 my-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Simplicité avant tout :</strong> Réduisez le nombre de clics nécessaires pour accomplir une action. L'interface doit être intuitive sans tutoriel.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Zone du pouce (Thumb Zone) :</strong> Placez les éléments interactifs importants dans la zone facilement accessible par le pouce de l'utilisateur.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Considérations locales :</strong> Prévoyez un "Dark Mode" pour économiser la batterie, et optimisez les assets pour des connexions parfois instables.
                      </div>
                    </li>
                  </ul>

                  {/* Bannière Tsangoo */}
                  <div className="my-16 not-prose">
                    <a 
                      href="https://www.tsangoo.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <Image
                          src="/tsangoo-gabon-facturation-comptabilite.png"
                          alt="Tsangoo - Solution de facturation et comptabilité pour le Gabon"
                          width={1200}
                          height={400}
                          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </a>
                  </div>

                  <h2 className="text-3xl mt-12 mb-6 text-foreground flex items-center">
                    <Code2 className="w-8 h-8 mr-3 text-xeta-blue" />
                    3. Choix Technologique : Natif vs Cross-Platform
                  </h2>

                  <p>
                    C'est l'une des décisions les plus importantes. Le choix dépend de votre budget, de vos délais et des fonctionnalités requises.
                  </p>

                  <div className="overflow-x-auto my-8 not-prose">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-4 border-b">Technologie</th>
                          <th className="p-4 border-b">Avantages</th>
                          <th className="p-4 border-b">Inconvénients</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border-b font-bold">Natif (Swift/Kotlin)</td>
                          <td className="p-4 border-b text-sm">Performances optimales, accès complet aux API du téléphone.</td>
                          <td className="p-4 border-b text-sm">Coût élevé (2 équipes distinctes iOS/Android), temps de dev long.</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-bold">React Native</td>
                          <td className="p-4 border-b text-sm">Code partagé à 90%, temps de dev réduit, écosystème énorme.</td>
                          <td className="p-4 border-b text-sm">Peut nécessiter du code natif pour des modules très spécifiques.</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-bold">Flutter</td>
                          <td className="p-4 border-b text-sm">UI ultra-personnalisable, excellentes performances.</td>
                          <td className="p-4 border-b text-sm">Taille de l'application finale parfois plus lourde.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Alert className="mt-8 border-xeta-blue bg-xeta-blue/5 dark:bg-xeta-blue/10">
                    <Zap className="h-5 w-5 text-xeta-blue" />
                    <AlertDescription className="text-base text-foreground">
                      <strong>Notre Recommandation :</strong> Pour 85% des projets d'applications (e-commerce, services, gestion), <strong>React Native</strong> ou <strong>Flutter</strong> offrent le meilleur ratio coût/performance, permettant un lancement simultané sur iOS et Android.
                    </AlertDescription>
                  </Alert>

                  <h2 className="text-3xl mt-12 mb-6 text-foreground flex items-center">
                    <Smartphone className="w-8 h-8 mr-3 text-xeta-blue" />
                    4. Performance & Mode Hors-Ligne
                  </h2>

                  <p>
                    Au Gabon, la couverture réseau peut varier. Une application performante doit gérer gracieusement les pertes de connexion.
                  </p>

                  <ul>
                    <li><strong>Mise en cache (Caching) :</strong> Stockez les données essentielles localement pour que l'app reste utilisable sans réseau.</li>
                    <li><strong>Optimisation des requêtes :</strong> Regroupez les appels API pour économiser la data de l'utilisateur.</li>
                    <li><strong>Chargement paresseux (Lazy Loading) :</strong> Ne chargez les images et les données que lorsqu'elles sont nécessaires à l'écran.</li>
                  </ul>

                  <h2 className="text-3xl mt-12 mb-6 text-foreground">
                    Conclusion
                  </h2>

                  <p>
                    Créer une application mobile performante est un investissement majeur qui demande une planification rigoureuse. En vous concentrant sur l'expérience utilisateur, en choisissant les bonnes technologies et en anticipant les contraintes locales (réseau, appareils divers), vous maximisez vos chances de succès sur les stores.
                  </p>
                  
                  <p>
                    Chez <strong>XETA Digital Corp</strong>, nous accompagnons les entreprises dans le développement de bout en bout de leurs applications mobiles, de l'UX Design jusqu'à la publication sur l'App Store et Google Play.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t">
                  <div className="flex items-center text-muted-foreground mr-2">
                    <Tag className="w-4 h-4 mr-2" />
                    Tags:
                  </div>
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}