"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
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
          <Link href="/#leadership" className="text-gray-300 hover:text-amber-400 transition-colors">
            Leadership
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-amber-400 transition-colors">
            Careers
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
  )
}
