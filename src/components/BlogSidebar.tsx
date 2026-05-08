import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Search, Calendar, Globe, X } from "lucide-react";
import { getRecentPosts, getCategoriesWithCount, searchPosts } from "@/lib/blogData";
import type { BlogPost } from "@/lib/blogData";

interface BlogSidebarProps {
  currentCategory?: string;
  onSearch?: (query: string) => void;
}

export function BlogSidebar({ currentCategory, onSearch }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const recentPosts = getRecentPosts(5);
  const categories = getCategoriesWithCount();

  // Recherche en temps réel
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchPosts(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Fermer les résultats quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
      setShowResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <Card className="p-6 border-2">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-xeta-blue" />
          Rechercher
        </h3>
        <div ref={searchRef} className="relative">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Rechercher un article..."
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowResults(true)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button type="submit" size="icon" className="shrink-0">
              <Search className="w-4 h-4" />
            </Button>
          </form>

          {/* Résultats de recherche en temps réel */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border-2 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="p-2">
                  <div className="px-3 py-2 text-xs text-muted-foreground font-medium">
                    {searchResults.length} résultat{searchResults.length > 1 ? "s" : ""} trouvé{searchResults.length > 1 ? "s" : ""}
                  </div>
                  {searchResults.map((post, index) => (
                    <Link key={index} href={post.link}>
                      <div
                        className="p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                      >
                        <h4 className="font-semibold text-sm group-hover:text-xeta-blue transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <Search className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Aucun article trouvé pour "{searchQuery}"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Recent Posts Widget */}
      <Card className="p-6 border-2">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-xeta-blue" />
          Articles Récents
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link key={index} href={post.link}>
              <div className="group cursor-pointer">
                <h4 className="font-semibold text-sm group-hover:text-xeta-blue transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
              {index < recentPosts.length - 1 && (
                <div className="border-b mt-4" />
              )}
            </Link>
          ))}
        </div>
      </Card>

      {/* Categories Widget */}
      <Card className="p-6 border-2">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-xeta-blue" />
          Catégories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = currentCategory === category.name;
            return (
              <Link key={index} href={`/blog?category=${category.name.toLowerCase()}`}>
                <div
                  className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-xeta-blue text-white"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : category.color}`} />
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                  <Badge
                    variant={isActive ? "secondary" : "outline"}
                    className={`text-xs ${isActive ? "bg-white/20 text-white border-white/30" : ""}`}
                  >
                    {category.count}
                  </Badge>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>

      {/* Newsletter CTA */}
      <Card className="p-6 border-2 bg-gradient-hero text-white">
        <h3 className="text-xl font-heading font-bold mb-3">
          Newsletter
        </h3>
        <p className="text-sm text-white/90 mb-4">
          Recevez nos meilleurs articles chaque semaine
        </p>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Votre email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="w-full bg-white text-xeta-blue hover:bg-white/90">
            S'abonner
          </Button>
        </div>
      </Card>
    </div>
  );
}