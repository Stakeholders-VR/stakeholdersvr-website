import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Stakeholders VR - Private Equity Partnership for Vacation Rental Managers",
  description:
    "Join the elite collective of vacation rental managers. Get 30-60% higher valuations, immediate liquidity, and future upside while keeping your brand and team. Private equity-backed partnership for top property managers in the US.",
  keywords: [
    "vacation rental management",
    "private equity vacation rentals",
    "property management partnership",
    "vacation rental collective",
    "VRM private equity",
    "property manager liquidity",
    "vacation rental investment",
    "hospitality private equity",
    "short-term rental management",
    "vacation rental supergroup",
    "Airbnb management company",
    "VRBO property management",
    "vacation rental exit strategy",
    "property management acquisition",
    "vacation rental consolidation",
    "hospitality investment",
    "property management valuation",
    "vacation rental portfolio",
    "STR management services",
    "vacation rental operators",
    "property management growth",
    "vacation rental technology",
    "hospitality real estate",
    "vacation rental revenue management",
    "property management scaling",
  ],
  authors: [{ name: "Stakeholders VR" }],
  creator: "Stakeholders VR",
  publisher: "Stakeholders VR",
  applicationName: "Stakeholders VR",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stakeholdersvr.com",
    siteName: "Stakeholders VR",
    title: "Stakeholders VR - Private Equity Partnership for Vacation Rental Managers",
    description:
      "Join the elite collective of vacation rental managers. Get 30-60% higher valuations, immediate liquidity, and future upside while keeping your brand and team. Private equity partnership for top property managers.",
    images: [
      {
        url: "https://stakeholdersvr.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury vacation rental property with pool and city skyline - Stakeholders VR partnership opportunities",
        type: "image/jpeg",
      },
      {
        url: "https://stakeholdersvr.com/images/stakeholders-logo.png",
        width: 1200,
        height: 1200,
        alt: "Stakeholders VR Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@StakeholdersVR",
    creator: "@StakeholdersVR",
    title: "Stakeholders VR - Private Equity Partnership for Vacation Rental Managers",
    description:
      "Join the elite collective of vacation rental managers. Get higher valuations, immediate liquidity, and future upside while keeping your brand and team.",
    images: {
      url: "https://stakeholdersvr.com/images/og-image.jpg",
      alt: "Luxury vacation rental property with pool and city skyline - Stakeholders VR partnership opportunities",
    },
  },
  alternates: {
    canonical: "https://stakeholdersvr.com",
    languages: {
      "en-US": "https://stakeholdersvr.com",
    },
  },
  category: "Business Services",
  classification: "Private Equity, Vacation Rental Management, Hospitality Investment",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Stakeholders VR",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#10172A",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#10172A",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://stakeholdersvr.com/#organization",
                  name: "Stakeholders VR",
                  alternateName: ["Stakeholders Vacation Rentals", "SHVR"],
                  url: "https://stakeholdersvr.com",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://stakeholdersvr.com/#logo",
                    url: "https://stakeholdersvr.com/images/stakeholders-logo.png",
                    contentUrl: "https://stakeholdersvr.com/images/stakeholders-logo.png",
                    width: 300,
                    height: 100,
                    caption: "Stakeholders VR Logo",
                  },
                  image: {
                    "@type": "ImageObject",
                    "@id": "https://stakeholdersvr.com/#image",
                    url: "https://stakeholdersvr.com/images/og-image.jpg",
                    contentUrl: "https://stakeholdersvr.com/images/og-image.jpg",
                    width: 1200,
                    height: 630,
                    caption:
                      "Luxury vacation rental property with pool and city skyline - Stakeholders VR partnership opportunities",
                  },
                  description:
                    "Private equity-backed collective for vacation rental managers offering liquidity, legacy protection, and partnership opportunities for elite property managers across the United States.",
                  foundingDate: "2024",
                  industry: ["Vacation Rental Management", "Private Equity", "Hospitality Investment"],
                  knowsAbout: [
                    "Vacation Rental Management",
                    "Private Equity",
                    "Property Management",
                    "Hospitality Investment",
                    "Revenue Management",
                    "Short-term Rentals",
                    "Airbnb Management",
                    "VRBO Management",
                  ],
                  serviceArea: {
                    "@type": "Country",
                    name: "United States",
                    sameAs: "https://en.wikipedia.org/wiki/United_States",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "United States",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Vacation Rental Management Partnership Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Private Equity Partnership",
                          description:
                            "30-60% higher valuations for vacation rental management companies when selling as part of our supergroup",
                          category: "Private Equity Investment",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Immediate Liquidity Solutions",
                          description: "Access to capital while maintaining operational control and brand identity",
                          category: "Financial Services",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Shared Services Platform",
                          description:
                            "HR, payroll, marketing, finance, technology, and revenue management services for vacation rental managers",
                          category: "Business Support Services",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Legacy Protection",
                          description: "Maintain brand identity and team structure while accessing growth capital",
                          category: "Business Consulting",
                        },
                      },
                    ],
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "Business Development",
                      availableLanguage: "English",
                      areaServed: "US",
                    },
                    {
                      "@type": "ContactPoint",
                      contactType: "Partnership Inquiries",
                      availableLanguage: "English",
                      areaServed: "US",
                    },
                  ],
                  sameAs: ["https://www.linkedin.com/company/stakeholders-vr", "https://twitter.com/StakeholdersVR"],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "1",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://stakeholdersvr.com/#website",
                  url: "https://stakeholdersvr.com",
                  name: "Stakeholders VR",
                  description:
                    "Private equity-backed collective for vacation rental managers offering partnership opportunities, higher valuations, and shared services.",
                  publisher: {
                    "@id": "https://stakeholdersvr.com/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://stakeholdersvr.com/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://stakeholdersvr.com/#webpage",
                  url: "https://stakeholdersvr.com",
                  name: "Stakeholders VR - Private Equity Partnership for Vacation Rental Managers",
                  isPartOf: {
                    "@id": "https://stakeholdersvr.com/#website",
                  },
                  about: {
                    "@id": "https://stakeholdersvr.com/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://stakeholdersvr.com/#image",
                  },
                  description:
                    "Join the elite collective of vacation rental managers. Get 30-60% higher valuations, immediate liquidity, and future upside while keeping your brand and team. Private equity partnership for top property managers.",
                  breadcrumb: {
                    "@id": "https://stakeholdersvr.com/#breadcrumb",
                  },
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", "h2", ".hero-description"],
                  },
                  inLanguage: "en-US",
                  datePublished: "2024-01-01T00:00:00+00:00",
                  dateModified: new Date().toISOString(),
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://stakeholdersvr.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://stakeholdersvr.com",
                    },
                  ],
                },
                {
                  "@type": "Service",
                  "@id": "https://stakeholdersvr.com/#service",
                  name: "Vacation Rental Management Partnership",
                  provider: {
                    "@id": "https://stakeholdersvr.com/#organization",
                  },
                  description:
                    "Private equity partnership for vacation rental management companies offering higher valuations, immediate liquidity, and shared services while preserving brand identity and team structure.",
                  serviceType: "Private Equity Partnership",
                  category: "Business Services",
                  audience: {
                    "@type": "Audience",
                    audienceType: "Vacation Rental Managers",
                    geographicArea: {
                      "@type": "Country",
                      name: "United States",
                    },
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "United States",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Partnership Benefits",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        name: "Higher Valuations",
                        description: "30-60% higher valuations when selling as part of the Supergroup",
                        category: "Financial Benefits",
                      },
                      {
                        "@type": "Offer",
                        name: "Immediate Liquidity",
                        description: "Access to capital while maintaining operational control",
                        category: "Financial Services",
                      },
                      {
                        "@type": "Offer",
                        name: "Future Upside Participation",
                        description: "Continued investment in business growth and collective success",
                        category: "Investment Opportunity",
                      },
                      {
                        "@type": "Offer",
                        name: "Brand Protection",
                        description: "Maintain brand identity and team structure",
                        category: "Business Consulting",
                      },
                      {
                        "@type": "Offer",
                        name: "Shared Services Access",
                        description: "HR, marketing, finance, technology, and revenue management services",
                        category: "Business Support Services",
                      },
                    ],
                  },
                  review: {
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    author: {
                      "@type": "Organization",
                      name: "Industry Partners",
                    },
                    reviewBody:
                      "Stakeholders VR provides exceptional partnership opportunities for vacation rental managers looking to scale and access liquidity while maintaining their brand identity.",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://stakeholdersvr.com/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is Stakeholders VR?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Stakeholders VR is a private equity-backed collective for vacation rental managers, offering partnership opportunities that provide higher valuations, immediate liquidity, and shared services while preserving brand identity.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How much higher are the valuations?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "When selling as part of our Supergroup, vacation rental management companies can achieve 30-60% higher valuations compared to selling independently.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do I keep my brand and team?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, absolutely. We believe in preserving what makes your business unique. Your brand identity remains intact and your team stays in place.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What shared services are available?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We provide comprehensive shared services including HR & payroll, marketing & growth, finance, technology support, and revenue management to help you focus on what you do best.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
