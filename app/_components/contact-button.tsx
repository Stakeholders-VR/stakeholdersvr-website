"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactFormPopup from "./contact-form"

interface ContactButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function ContactButton({ children, variant = "default", size = "default", className = "" }: ContactButtonProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsPopupOpen(true)}>
        {children}
      </Button>
      <ContactFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}
