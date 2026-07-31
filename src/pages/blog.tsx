import React, { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Pagination } from "@/components/Pagination";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { blogPosts, searchPosts, getPostsByCategory, getCategoriesWithCount } from "@/lib/blogData";
import type { BlogPost } from "@/lib/blogData";

export default function Blog() {
  const router = useRouter();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Gérer les paramètres d'URL (category query param)
  useEffect(() => {
    const categoryFromUrl = router.query.category as string;
    if (categoryFromUrl) {
      const categoryName = categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1);
      setActiveCategory(categoryName);
      setFilteredPosts(getPostsByCategory(categoryName));
      setCurrentPage(1);
    }
  }, [router.query.category]);

  // L'article en vedette est toujours le dernier article publié (premier du tableau)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : blogPosts[0];

  // Posts pour la grille (excluant l'article vedette si on est sur "Tous" et sans recherche)
  const showFeatured = !searchQuery && activeCategory === "Tous";
  const postsForGrid = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  // Pagination logic
  const totalPages = Math.ceil(postsForGrid.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsForGrid.slice(indexOfFirstPost, indexOfLastPost);

  const categories = ["Tous", ...getCategoriesWithCount().map(cat => cat.name)];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    setCurrentPage(1);
    
    if (category === "Tous") {
      setFilteredPosts(blogPosts);
      router.push("/blog", undefined, { shallow: true });
    } else {
      setFilteredPosts(getPostsByCategory(category));
      router.push(`/blog?category=${category.toLowerCase()}`, undefined, { shallow: true });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory("Tous");
    setCurrentPage(1);
    
    if (query.trim()) {
      setFilteredPosts(searchPosts(query));
    } else {
      setFilteredPosts(blogPosts);
    }
  };

  return (
    <>
      <SEO
        title="Blog - XETA-DIGITAL CORP | Actualités Web & Tech Gabon"
        description="Découvrez nos articles sur le développement web, mobile, le design, le marketing digital et les tendances technologiques au Gabon."
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
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Blog & Actualités</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white animate-fade-in-up animation-delay-100">
                Insights & Tendances
                <br />
                <span className="text-xeta-blue-light">Technologiques</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
                Restez informé des dernières innovations du digital au Gabon et en Afrique
              </p>
              {searchQuery && (
                <p className="text-white/80 text-sm">
                  {filteredPosts.length} résultat{filteredPosts.length > 1 ? "s" : ""} pour "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-background border-b sticky top-20 z-40 backdrop-blur-sm bg-background/95">
          <div className="container">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === activeCategory ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {!searchQuery && activeCategory === "Tous" && (
          <section className="section-spacing bg-gradient-to-b from-background to-xeta-blue-light/10">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <Card className="overflow-hidden border-2 card-hover group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-xeta-blue text-white text-sm px-4 py-2">
                          Article Vedette
                        </Badge>
                      </div>
                    </div>

                    <div className="p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="outline" className="rounded-full">
                          {featuredPost.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 group-hover:text-xeta-blue transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>

                        <Link href={featuredPost.link}>
                          <Button size="lg" className="group/btn">
                            Lire l'Article
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="section-spacing">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2">
                {postsForGrid.length === 0 ? (
                  <Card className="p-12 text-center border-2">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      Aucun article trouvé
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Essayez de modifier votre recherche ou de sélectionner une autre catégorie
                    </p>
                    <Button onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("Tous");
                      setFilteredPosts(blogPosts);
                      setCurrentPage(1);
                    }}>
                      Voir tous les articles
                    </Button>
                  </Card>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-8">
                      {currentPosts.map((post, index) => {
                        const Icon = post.icon;
                        return (
                          <Card key={index} className="overflow-hidden border-2 card-hover group flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                              <div className="absolute top-4 right-4">
                                <div className="w-10 h-10 rounded-lg bg-xeta-blue/90 backdrop-blur-sm flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center space-x-2 mb-3">
                                <Badge variant="outline" className="rounded-full text-xs">
                                  {post.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">•</span>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {post.readTime}
                                </div>
                              </div>

                              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-xeta-blue transition-colors line-clamp-2">
                                {post.title}
                              </h3>

                              <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2 flex-1">
                                {post.excerpt}
                              </p>

                              <div className="flex items-center justify-between pt-4 border-t">
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {post.date}
                                </div>
                                <Link href={post.link}>
                                  <Button variant="ghost" size="sm" className="group/btn">
                                    Lire
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>

                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar 
                    currentCategory={activeCategory !== "Tous" ? activeCategory : undefined}
                    onSearch={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-spacing bg-gradient-hero text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Newsletter</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Restez Informé des Dernières Tendances
              </h2>
              <p className="text-xl opacity-90">
                Recevez nos meilleurs articles et conseils directement dans votre boîte mail
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <Button size="lg" className="bg-white text-xeta-blue hover:bg-white/90 rounded-full px-8">
                    S'abonner
                  </Button>
                </div>
                <p className="text-sm opacity-70 mt-4">
                  Pas de spam. Désabonnement en un clic. 100% gratuit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}