import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Briefcase, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ReactMarkdown from "react-markdown"
import { getJobBySlug, getJobs } from "@/lib/google-sheet"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)
  if (!job) return { title: "Role Not Found" }

  return {
    title: `${job.title} – Stakeholders VR Careers`,
    description: `${job.title} (${job.location}, ${job.type}) at Stakeholders VR. ${job.department} team.`,
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params
  const job = await getJobBySlug(slug)
  if (!job) notFound()

  const applyMailto = `mailto:careers@stakeholdersvr.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />

      <main className="w-full">
        {/* Top bar */}
        <div className="bg-[#10172A] text-white py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              {job.department && (
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                  {job.department}
                </Badge>
              )}
              {job.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
              )}
              {job.type && (
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {job.type}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Job description */}
        <section className="pt-6 pb-12 md:pt-8 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <article className="prose prose-gray prose-lg max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-li:marker:text-gray-400">
              <ReactMarkdown>{job.description}</ReactMarkdown>
            </article>

            {/* Apply CTA */}
            <div className="mt-14 pt-10 border-t border-gray-200 text-center">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Interested in this role?
              </h2>
              <p className="text-gray-600 mb-6">
                Email us with the role of interest, a brief introduction, and your background.
              </p>
              <a
                href={applyMailto}
                className="inline-flex items-center px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                careers@stakeholdersvr.com
              </a>
            </div>
          </div>
        </section>

        {/* EEO */}
        <section className="py-10 bg-gray-50">
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
