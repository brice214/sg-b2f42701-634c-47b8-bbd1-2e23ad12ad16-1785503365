import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Search, Calendar, Globe } from "lucide-react";
import { getRecentPosts, getCategoriesWithCount } from "@/lib/blogData";

interface BlogSidebarProps {
  currentCategory?: string;
  onSearch?: (query: string) => void;
}

export function BlogSidebar({ currentCategory, onSearch }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const recentPosts = getRecentPosts(5);
  const categories = getCategoriesWithCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <Card className="p-6 border-2">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-xeta-blue" />
          Rechercher
        </h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Rechercher un article..."
            className="flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Search className="w-4 h-4" />
          </Button>
        </form>
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