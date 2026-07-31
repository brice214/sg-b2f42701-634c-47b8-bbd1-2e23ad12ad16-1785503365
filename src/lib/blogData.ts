import { Code2, TrendingUp, Globe, Smartphone, Lightbulb, ShieldAlert, Briefcase, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Datacenter au Gabon : Faut-il Vraiment Héberger Localement ?",
    excerpt: "L'inauguration récente d'un datacenter au Gabon soulève une question cruciale : pourquoi les serveurs externes sont souvent plus performants et sécurisés que les solutions locales.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: "Tech Innovation Team",
    date: "31 Juillet 2026",
    readTime: "12 min",
    category: "Technologie",
    icon: Server,
    link: "/blog/technologie/datacenter-gabon-serveurs-locaux-vs-cloud-international",
  },
  {
    title: "La Facture Électronique au Gabon : Tsangoo SaaS au Service des PME et Compagnies Gabonaises",
    excerpt: "Découvrez comment Tsangoo révolutionne la gestion des entreprises gabonaises avec une solution conforme OHADA/SYSCOHADA",
    image: "/tsangoo-gabon-facturation-comptabilite.png",
    author: "Business Team",
    date: "15 Mars 2026",
    readTime: "10 min",
    category: "Business",
    icon: TrendingUp,
    link: "/blog/business/facture-electronique-gabon-tsangoo-saas-pme",
  },
  {
    title: "Intelligence Artificielle : L'Avenir du Développement Web en 2026",
    excerpt: "Découvrez comment l'IA transforme le développement web : outils, opportunités et défis",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Tech Innovation Team",
    date: "12 Mars 2026",
    readTime: "11 min",
    category: "Technologie",
    icon: Code2,
    link: "/blog/technologie/intelligence-artificielle-avenir-developpement-web-2026",
  },
  {
    title: "10 Tendances du Design Web à Suivre en 2026",
    excerpt: "Les nouvelles pratiques de design qui transforment l'expérience utilisateur",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    author: "Design Team",
    date: "10 Mars 2026",
    readTime: "12 min",
    category: "Design",
    icon: Globe,
    link: "/blog/design/tendances-design-web-2026",
  },
  {
    title: "Guide Complet : Créer une Application Mobile Performante",
    excerpt: "Les étapes essentielles pour développer une app mobile qui cartonne",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    author: "Mobile Dev Team",
    date: "5 Mars 2026",
    readTime: "10 min",
    category: "Développement",
    icon: Smartphone,
    link: "/blog/developpement/guide-complet-creer-application-mobile-performante",
  },
  {
    title: "SEO Local : Dominer les Recherches au Gabon",
    excerpt: "Stratégies pour apparaître en première page sur Google.ga et attirer des clients",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    author: "Marketing Team",
    date: "1 Mars 2026",
    readTime: "8 min",
    category: "Marketing",
    icon: TrendingUp,
    link: "/blog/marketing/seo-local-dominer-recherches-gabon",
  },
  {
    title: "React vs Vue.js : Quel Framework Choisir en 2026?",
    excerpt: "Comparaison détaillée des deux frameworks JavaScript les plus populaires",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    author: "Tech Team",
    date: "25 Février 2026",
    readTime: "9 min",
    category: "Technologie",
    icon: Code2,
    link: "/blog/technologie/react-vs-vuejs-framework-2026",
  },
  {
    title: "E-commerce au Gabon : Les Clés du Succès",
    excerpt: "Comment lancer et développer une boutique en ligne rentable au Gabon",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    author: "Business Team",
    date: "20 Février 2026",
    readTime: "8 min",
    category: "Business",
    icon: TrendingUp,
    link: "/blog/business/ecommerce-gabon-cles-succes",
  },
  {
    title: "Cybersécurité : Protéger Votre Site Web des Attaques",
    excerpt: "Les meilleures pratiques pour sécuriser votre présence en ligne",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: "Security Team",
    date: "15 Février 2026",
    readTime: "7 min",
    category: "Sécurité",
    icon: ShieldAlert,
    link: "/blog/securite/cybersecurite-proteger-site-web",
  },
];

export interface CategoryInfo {
  name: string;
  count: number;
  icon: LucideIcon;
  color: string;
}

export function getCategoriesWithCount(): CategoryInfo[] {
  const categoryMap = new Map<string, { count: number; icon: LucideIcon; color: string }>();

  // Configuration des icônes et couleurs par catégorie
  const categoryConfig: Record<string, { icon: LucideIcon; color: string }> = {
    "Technologie": { icon: Lightbulb, color: "text-blue-600" },
    "Design": { icon: Globe, color: "text-purple-600" },
    "Développement": { icon: Code2, color: "text-green-600" },
    "Marketing": { icon: TrendingUp, color: "text-orange-600" },
    "Business": { icon: Briefcase, color: "text-indigo-600" },
    "Sécurité": { icon: ShieldAlert, color: "text-red-600" },
    "Mobile": { icon: Smartphone, color: "text-pink-600" },
  };

  // Compter les articles par catégorie
  blogPosts.forEach(post => {
    const current = categoryMap.get(post.category) || { 
      count: 0, 
      icon: categoryConfig[post.category]?.icon || Code2,
      color: categoryConfig[post.category]?.color || "text-gray-600"
    };
    categoryMap.set(post.category, {
      ...current,
      count: current.count + 1
    });
  });

  // Convertir en tableau et trier par nombre d'articles (décroissant)
  return Array.from(categoryMap.entries())
    .map(([name, info]) => ({
      name,
      ...info
    }))
    .sort((a, b) => b.count - a.count);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return blogPosts.slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) {
    return blogPosts;
  }

  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.category.toLowerCase().includes(lowerQuery) ||
    post.author.toLowerCase().includes(lowerQuery)
  );
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category.toLowerCase() === "tous") {
    return blogPosts;
  }
  
  return blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}