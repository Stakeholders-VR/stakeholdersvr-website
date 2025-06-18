"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Users, Target, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MuxPlayer from "@mux/mux-player-react"
import { useState, useEffect, useRef } from "react"
import ContactButton from "./app/_components/contact-button"


const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function VideoCarousel() {
  const videos = [
    "OJoZhdpmKp02q73xbZLXwtV2Hm7kCKKDW101gSFgpiyLw",
    "e01EOGSQrJhwIazsBCd2iYR01EtmcHEP3KTZZg8SNRaXo",
    "HZmcJt3W87x9Bj5apes3PNv5WE3KysIM025602jcJ7abw",
    "74zyb3VFiTlAhWZI1uha13PelYCqt5RV4ia9NOqrZFs",
    "uOJOhfDhLi02hWN00BTD8MwR0271r3eFFgmNnF41TPa1aw",
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const playerRef = useRef<any>(null)

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  useEffect(() => {
    const player = playerRef.current
    if (player) {
      player.addEventListener("ended", handleVideoEnd)
      return () => {
        player.removeEventListener("ended", handleVideoEnd)
      }
    }
  }, [currentVideoIndex])

  return (
    <MuxPlayer
      ref={playerRef}
      playbackId={videos[currentVideoIndex]}
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover absolute inset-0"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        backgroundColor: "white",
        width: "100%",
        height: "60vw",
      }}
    />
  )
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-[#10172A] backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
        <div className="mx-auto container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/stakeholders-logo-white.png"
              alt="Stakeholders Vacation Rentals"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>
          <nav
            className="hidden md:flex items-center space-x-6 text-base font-medium"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            <Link href="#why-join" className="text-gray-300 hover:text-amber-400 transition-colors">
              Why Join
            </Link>
            <Link href="#legacy" className="text-gray-300 hover:text-amber-400 transition-colors">
              Legacy
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">
              Services
            </Link>
            <Link href="#leadership" className="text-gray-300 hover:text-amber-400 transition-colors">
              Leadership
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      <main className=" w-full">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-slate-900 overflow-hidden">
          {/* Background - Video for desktop, Image for mobile */}
          <div className="absolute inset-0 z-0 w-full h-full">
            {/* Desktop Video Background */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
              <VideoCarousel />
            </div>

            {/* Mobile Image Background */}
            <div
              className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/hero-mobile-bg.jpg')",
              }}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              {/* Content */}
              <div className="text-white space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                  Smart Managers. Higher Valuations. Bigger Future. Together.
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  World-Class Property Managers achieving Liquidity, Legacy, and True Partnership together.
                </p>

                {/* CTA Button */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8 py-4 rounded-lg font-semibold"
                    asChild
                  >
                    <Link href="#contact">
                      Ready to Take the Next Step? <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:text-amber-400 hover:bg-white/10 text-lg px-8 py-4 rounded-lg font-semibold border border-white/30 hover:border-amber-400/50 transition-all duration-300"
                    asChild
                  >
                    <Link href="#why-join">Learn More</Link>
                  </Button>
                </div>

                {/* Key Stats */}

                {/* Bottom Links */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section id="why-join" className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
          <div className="mx-auto container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-800 border-gray-200 font-medium mb-4">WHY JOIN</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Finally Get Paid What You're Worth
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join the Supergroup and unlock unprecedented value for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto place-items-stretch">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 w-full h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">30% to 60% Higher Valuations</h3>
                  <p className="text-gray-600">
                    When selling as part of the Supergroup, benefit from enhanced valuations that reflect true market
                    potential
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 w-full h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Immediate Liquidity</h3>
                  <p className="text-gray-600">
                    Secure your family's future with immediate access to capital while maintaining operational control
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 w-full h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Future Upside</h3>
                  <p className="text-gray-600">
                    Stay invested in the business and participate in the collective growth of the Supergroup
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                You've worked hard to build your brand. We're here to protect it—and help it thrive for generations.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section id="legacy" className="py-20 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto place-items-center">
              <div className="w-full">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-medium mb-4">
                  LEGACY PROTECTION
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                  Keep Your Brand. <span className="text-black">Grow Your Legacy.</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  At Stakeholders VR, we understand your business isn't just numbers—it's people, relationships, and
                  reputation. That's why your team stays in place and your brand endures. With new capital and expert
                  partners, your growth potential has never been greater.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-slate-700" />
                    <span className="text-gray-700">Your brand identity remains intact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-slate-700" />
                    <span className="text-gray-700">Your team stays in place</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-slate-700" />
                    <span className="text-gray-700">Enhanced growth potential with new capital</span>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/beach.jpg"
                      alt="Luxury vacation rental property at sunset"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="mx-auto container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-medium mb-4">SHARED SERVICES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Centralized Services. <span className="text-black">Maximum Freedom.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let go of distractions and reclaim your time with enterprise-level support
              </p>
            </div>
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-stretch">
                {[
                  {
                    title: "HR & Payroll",
                    description: "Benefits admin, recruiting, HR support",
                    icon: Users,
                    items: [
                      "Comprehensive benefits administration",
                      "Professional recruiting services",
                      "Dedicated HR support team",
                    ],
                  },
                  {
                    title: "Marketing & Growth",
                    description: "SEO, SEM, owner & guest marketing",
                    icon: TrendingUp,
                    items: [
                      "Search engine optimization",
                      "Paid advertising management",
                      "Owner and guest marketing campaigns",
                    ],
                  },
                  {
                    title: "Finance",
                    description: "Centralized accounting, forecasting, procurement",
                    icon: Target,
                    items: [
                      "Professional accounting services",
                      "Financial forecasting and planning",
                      "Strategic procurement support",
                    ],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 w-full h-full"
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-[#10172A]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm text-gray-600 flex-grow">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch">
                {[
                  {
                    title: "Technology",
                    description: "Keep your PMS, gain group buying power",
                    icon: Shield,
                    items: ["Maintain your existing PMS", "Leverage group buying power", "Access to enterprise tools"],
                  },
                  {
                    title: "Revenue Management",
                    description: "Optimize pricing and maximize revenue",
                    icon: CheckCircle,
                    items: ["Dynamic pricing strategies", "Market analysis and insights", "Revenue optimization tools"],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 w-full h-full"
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-[#10172A]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm text-gray-600 flex-grow">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-medium mb-4">LEADERSHIP</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Led By Operators, Backed By Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our leadership has founded, scaled, and exited some of the most successful brands in vacation rentals.
                We've walked in your shoes, and we're here to help you win.
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl rounded-2xl max-w-5xl w-full">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1647443575241-wNb4FD4j3ifyJaLMb11nuGDVNKKJnb.jpeg"
                            alt="Lino Maldonado"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">Lino Maldonado</h3><br></br>
                          <Link
                            href="https://www.linkedin.com/in/lino-maldonado-9160716/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedinIcon className="h-5 w-5 text-black hover:text-gray-600 transition-colors" />
                          </Link>
                         
                        </div>  <span className="font-italic text-gray-900 font-bolder">CEO</span>
                      </div>


                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                          <Image
                            src="/images/brady-stump.jpg"
                            alt="Brady Stump"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">Brady Stump</h3>
                          <Link
                            href="https://www.linkedin.com/in/brady-stump/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedinIcon className="h-5 w-5 text-black hover:text-gray-600 transition-colors" />
                          </Link>
                        </div> <span className="font-italic text-gray-900 font-bolder">Co-Founder</span>
                      </div>
                                            <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1643228447064-AMksqvgAE9qksAK0pJgd5qvcHIHb4f.jpeg"
                            alt="Brandon Ezra"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">Brandon Ezra</h3>
                          <Link
                            href="https://www.linkedin.com/in/brandon-ezra-39298a8/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedinIcon className="h-5 w-5 text-black hover:text-gray-600 transition-colors" />
                          </Link>
                        </div> <span className="font-italic text-gray-900 font-bolder">Co-Founder</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743986849056-0yE6xybFlVs2yxDhe2TUbY9yHdjECH.jpeg"
                            alt="Travis Wilburn"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">Travis Wilburn</h3>
                          <Link href="https://www.linkedin.com/in/travis-wilburn-03057410/" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon className="h-5 w-5 text-black hover:text-gray-600 transition-colors" />
                          </Link>
                        </div> <span className="font-italic text-gray-900 font-bolder">Advisor</span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Meet our experienced leadership team with proven track records in vacation rental management,
                      vacation rental technology, private equity, and business operations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Diversification Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto place-items-center">
              <div className="relative w-full">
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/cliffmanor.jpg"
                      alt="Luxury coastal vacation rental property with pool"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="w-full">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-medium mb-4">RISK PROTECTION</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                  Diversify Your Investment. <span className="text-black">Protect Against Risk.</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Most managers have 80%+ of their net worth tied up in their business. Don't keep all your eggs in one
                  basket. Diversify across geographies and economies with a Supergroup designed to weather storms—from
                  wildfires to recessions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700">Geographic diversification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700">Economic resilience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700">Risk mitigation strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20" />

          <div className="relative z-10 mx-auto container px-4 md:px-6">
            <div className="flex justify-center">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl max-w-4xl w-full">
                <CardContent className="p-8 md:p-12 text-center">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-medium mb-6">CONTACT</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                    Ready to Take the Next Step?
                  </h2>
                  <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                    Let's talk. If you're one of the top property managers in your region, we want to hear your story.
                    It's time to get what you deserve, and build something bigger, together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a className="hidden" href="mailto:Info@stakeholdersvr.com" rel="noopener noreferrer">
                    <Button size="lg" className="bg-black hover:bg-black/80 text-lg px-8 py-3 rounded-full">
                      Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
</a>
     <ContactButton variant="default" size="lg" className="bg-black hover:bg-black/80 text-lg px-8 py-3 rounded-full">
          Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </ContactButton>
                  </div>
                  <p className="text-sm mt-6 text-gray-500">
                    Confidential discussions. No obligations. Just possibilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
  )
}
