import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Briefcase } from "lucide-react"
import { getJobs } from "@/lib/google-sheet"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Stakeholders VR",
  description:
    "Join Stakeholders VR and help redefine vacation rental hospitality. View open roles in engineering, operations, finance, revenue management, and more.",
}

export default async function CareersPage() {
  const jobs = await getJobs()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />

      <main className="w-full">
        {/* Hero */}
        <div className="flex items-center justify-center text-6xl font-thin text-center bg-gray-50">
          <div className="bg-black w-full bg-bottom bg-cover h-40 md:h-[300px] md:w-full relative">
            <Image
              src="/images/beach4.jpg"
              alt="Careers at Stakeholders VR"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="max-w-5xl text-white font-serif text-3xl md:text-6xl leading-tight font-light">
                Careers
              </h1>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="w-full bg-amber-50 py-6">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <p className="text-base md:text-lg text-black leading-relaxed">
              Stakeholders VR is building the best-in-class platform for vacation rental property
              management. We are a distributed team focused on scale, rigor, and long-term value
              creation. Join us!
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
              Open Roles
            </h2>

            {jobs.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                No open roles at the moment. Check back soon or reach out to us directly.
              </p>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Link key={job.slug} href={`/careers/${job.slug}`} className="block group">
                    <Card className="border border-gray-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-200">
                      <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                            {job.department && (
                              <Badge
                                variant="secondary"
                                className="bg-gray-100 text-gray-700 border-gray-200"
                              >
                                {job.department}
                              </Badge>
                            )}
                            {job.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5" />
                                {job.location}
                              </span>
                            )}
                            {job.type && (
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-3.5 w-3.5" />
                                {job.type}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                            View role <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Don't see the right role? */}
        <section className="bg-gradient-to-br from-slate-50 to-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Don&apos;t see the right role?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We are always interested in speaking with strong operators, technologists, and leaders.
            </p>
            <a
              href="mailto:careers@stakeholdersvr.com"
              className="inline-flex items-center px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Email careers@stakeholdersvr.com
            </a>
          </div>
        </section>

        {/* EEO Statement */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Stakeholders VR is proud to be an affirmative action / equal opportunity employer. All
              qualified applicants will receive consideration without regard to race, creed, gender,
              marital status, sexual orientation, citizenship status, color, religion, national
              origin, age, disability, veteran status, or any other status protected under local,
              state, or federal laws.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
