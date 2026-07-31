import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function SEOElements({
  title = "XETA-DIGITAL CORP - Agence Web #1 au Gabon",
  description = "Leader du digital au Gabon. Développement web & mobile, hébergement premium et domaines. +500 projets réalisés.",
  image = "/og-image.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: SEOProps) {
  const siteUrl = "https://xeta-digital.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Meta Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Geo Tags - Ciblage Local Gabon */}
      <meta name="geo.region" content="GA" />
      <meta name="geo.placename" content="Libreville" />
      <meta name="geo.position" content="0.416198;9.467268" />
      <meta name="ICBM" content="0.416198, 9.467268" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="XETA-DIGITAL CORP" />
      <meta property="og:locale" content="fr_FR" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@xetadigital" />

      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#0095DA" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="language" content="French" />
      <meta name="author" content="XETA-DIGITAL CORP" />
      <meta name="copyright" content="© 2026 XETA-DIGITAL CORP" />
    </>
  );
}

export function SEO(props: SEOProps) {
  const router = useRouter();
  const url = props.url || router.asPath;

  return (
    <Head>
      <SEOElements {...props} url={url} />
    </Head>
  );
}