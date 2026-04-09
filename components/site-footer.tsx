"use client"

import Image from "next/image"

export default function SiteFooter() {
  return (
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
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stakeholders Vacation Rentals. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
