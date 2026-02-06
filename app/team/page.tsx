'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  location?: string;
  bio?: string;
  linkedinUrl?: string;
};

// Team members data extracted from landing page
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Lino Maldonado',
    title: 'Co-Founder, CEO',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1647443575241-wNb4FD4j3ifyJaLMb11nuGDVNKKJnb.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/lino-maldonado-9160716/',
  },
  {
    name: 'Brady Stump',
    title: 'Co-Founder',
    image: '/images/brady-stump.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/bradystump/',
  },
  {
    name: 'Brandon Ezra',
    title: 'Co-Founder',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1643228447064-AMksqvgAE9qksAK0pJgd5qvcHIHb4f.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/brandon-ezra-39298a8/',
  },
  {
    name: 'Joe Fraiman',
    title: 'Co-Founder',
    image: '/images/joe.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/jfraiman/',
  },
  {
    name: 'Markus Nordvik',
    title: 'Chief Technology Officer',
    image: '/images/markus.jpg',
    location: 'Based in California',
    bio: 'Markus leads technology strategy at Stakeholders VR, drawing on more than two decades of experience scaling SaaS products - including multiple PMS platforms - and building high-performing teams. He focuses on the next wave of innovation in travel and hospitality, emphasizing integrations, automation, and analytics that improve efficiency and expand margin. Markus holds a B.S. in Symbolic Systems from Stanford University and is an alum of Y Combinator.',
    linkedinUrl: 'https://www.linkedin.com/in/mnordvik/',
  },
  {
    name: 'Ben Lanson',
    title: 'COO',
    image: '/images/ben.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/benlanson/',
  },
  {
    name: 'Elizabeth Lott',
    title: 'SVP, Business Operations & Strategy',
    image: '/images/elizabeth.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/elizabethlott/',
  },
  {
    name: 'Paul Boyer',
    title: 'CFO',
    image: '/images/paul.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/pboyer/',
  },
  {
    name: 'Chris Wheeler',
    title: 'CRO',
    image: '/images/chris.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/chriswheeler30a/',
  },
  {
    name: 'Lui King',
    title: 'VP, Brand Success',
    image: '/images/lui.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/lui-king/',
  },
  {
    name: 'Travis Wilburn',
    title: 'Advisor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743986849056-0yE6xybFlVs2yxDhe2TUbY9yHdjECH.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/travis-wilburn-03057410/',
  },
];

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-[#10172A] backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
        <div className="mx-auto container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/stakeholders-logo-white.png"
                alt="Stakeholders Vacation Rentals"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>
          <nav
            className="hidden md:flex items-center space-x-6 text-base font-medium"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            <Link href="/#why-join" className="text-gray-300 hover:text-amber-400 transition-colors">
              Why Join
            </Link>
            <Link href="/#legacy" className="text-gray-300 hover:text-amber-400 transition-colors">
              Legacy
            </Link>
            <Link href="/#services" className="text-gray-300 hover:text-amber-400 transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-amber-400 transition-colors">
              Leadership
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section with Background Image */}
      <div className="flex items-center justify-center text-6xl font-thin text-center bg-gray-50">
        <div className="bg-black w-full bg-bottom bg-cover h-40 md:h-[300px] md:w-full relative">
          <Image
            src="/images/beach4.jpg"
            alt="Our Team"
            fill
            className="object-cover"
            priority={true}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Centered text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-5xl text-white font-serif text-3xl md:text-6xl leading-tight font-light">
              Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* Light Gold Background Section with Subheading */}
      <div className="w-full bg-amber-50 h-[350px] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Meet our experienced leadership team with proven track records in vacation rental management, vacation rental technology, private equity, and business operations. Led by operators, backed by experience.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="space-y-16">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name || index}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start"
            >
              {/* Column 1: Profile Image - Left */}
              <div className="md:col-span-1">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Column 2: Name, Title, Location - Middle */}
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  {member.name}
                </h2>
                
                <div className="border-t border-gray-300 mb-4"></div>
                
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-lg md:text-xl font-bold text-black uppercase tracking-wide">
                    {member.title}
                  </p>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      className="text-black hover:opacity-70 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
                {member.location && (
                  <p className="text-sm md:text-base text-gray-900">
                    {member.location}
                  </p>
                )}
              </div>

              {/* Column 3: Bio - Right */}
              <div className="md:col-span-1">
                {member.bio && (
                  <div className="prose prose-gray max-w-none">
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-amber-50 py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
            Ready to Partner With Us?
          </h2>
          <Link
            href="/#contact"
            className="inline-block px-10 py-4 bg-amber-600 text-white font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide text-base md:text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="mx-auto container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/images/footer-logo.png"
                alt="Stakeholders VR"
                width={250}
                height={75}
                className="h-16 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Stakeholders Vacation Rentals. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;

