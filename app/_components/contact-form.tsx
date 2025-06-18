"use client"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Loader2 } from "lucide-react"
import { submitContact } from "../_actions/contact-action"

interface ContactFormPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
  const [state, formAction, isPending] = useActionState(submitContact, null)

  // Close popup on successful submission
  if (state?.success && isOpen) {
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md relative">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Get In Touch</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                disabled={isPending}
                className={state?.errors?.name ? "border-red-500" : ""}
              />
              {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                disabled={isPending}
                className={state?.errors?.company ? "border-red-500" : ""}
              />
              {state?.errors?.company && <p className="text-sm text-red-500">{state.errors.company[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                disabled={isPending}
                className={state?.errors?.phone ? "border-red-500" : ""}
              />
              {state?.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
                className={state?.errors?.email ? "border-red-500" : ""}
              />
              {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
            </div>

            {/* Honeypot field - hidden from users */}
            <div className="hidden">
              <Label htmlFor="honeypot">Leave this field empty</Label>
              <Input id="honeypot" name="honeypot" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-amber-700" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {state?.message && (
              <div
                className={`text-sm text-center p-3 rounded-md ${
                  state.success
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {state.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
