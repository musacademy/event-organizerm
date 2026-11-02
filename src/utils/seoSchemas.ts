import { businessInfo } from '../data/business';

export function getOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/client-portrait.webp`,
    description: businessInfo.shortDesc,
    email: businessInfo.email,
    telephone: businessInfo.phone,
    areaServed: businessInfo.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    sameAs: [
      businessInfo.socials.instagram,
      businessInfo.socials.tiktok,
      businessInfo.socials.youtube,
      businessInfo.socials.linkedin,
    ],
  };
}

export function getLocalBusinessSchema(
  canonicalURL: string,
  description: string,
  citySpecific?: 'malang' | 'kediri'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${businessInfo.name} ${citySpecific ? (citySpecific === 'malang' ? 'Malang' : 'Kediri') : 'Malang & Kediri'}`,
    description: description,
    url: canonicalURL,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: citySpecific === 'kediri' 
        ? 'Jl. Dhoho No. 88, Pakelan' 
        : 'Jl. Besar Ijen No. 42, Klojen',
      addressLocality: citySpecific === 'kediri' ? 'Kediri' : 'Malang',
      addressRegion: 'Jawa Timur',
      postalCode: citySpecific === 'kediri' ? '64129' : '65115',
      addressCountry: 'ID',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };
}

export function getBreadcrumbSchema(siteUrl: string, breadcrumbs: { name: string; url: string }[]) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((bc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: bc.name,
      item: new URL(bc.url, siteUrl).href,
    })),
  };
}
