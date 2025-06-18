"use server"

import { z } from "zod"

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  honeypot: z.string().optional(), // Honeypot field
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContact(prevState: any, formData: FormData) {
  // Check honeypot field first - if filled, it's likely spam
  const honeypot = formData.get("honeypot")
  if (honeypot && honeypot.toString().trim() !== "") {
    return {
      success: false,
      message: "Spam detected. Please try again.",
    }
  }

  // Validate form data
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    honeypot: formData.get("honeypot"),
  })

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check the form for errors",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Remove honeypot from data before sending to webhook
    const { honeypot: _, ...dataToSend } = validatedFields.data

    // Send data to GoHighLevel webhook
    const response = await fetch(
      "https://services.leadconnectorhq.com/hooks/lX7GyHlLf22OQNPUjQzb/webhook-trigger/bb156a2d-f049-44fa-8aa3-16c896c6e559",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to submit form")
    }

    return {
      success: true,
      message: "Contact information submitted successfully!",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    }
  }
}
