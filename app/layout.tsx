import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
})
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
         <GoogleAnalytics gaId="G-4L2BR9CDLZ" />
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
