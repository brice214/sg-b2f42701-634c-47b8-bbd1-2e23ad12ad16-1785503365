import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `# robots.txt pour XETA-DIGITAL CORP
# Optimisé pour Google, Bing, et autres moteurs de recherche

User-agent: *
Allow: /

# Bloquer les fichiers non essentiels
Disallow: /api/
Disallow: /_next/
Disallow: /fonts/

# Fichiers statiques autorisés pour les moteurs de recherche
Allow: /public/
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.webp

# Sitemap
Sitemap: https://xeta-digital.com/sitemap.xml

# Crawl-delay pour éviter la surcharge
Crawl-delay: 1

# User-agents spécifiques
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default function RobotsTxt() {
  return null;
}