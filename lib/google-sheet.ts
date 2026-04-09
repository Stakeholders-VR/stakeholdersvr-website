import Papa from "papaparse"

export interface Job {
  slug: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

interface JobRow {
  title: string
  department: string
  location: string
  type: string
  description: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const JOBS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO0wlIDjoGHROFQWJRosdL4taJUU-vwceUfGXCRx7Sw9vWgD_TV2pU48ZGXbHc51D1a7PO3hR9Yt5R/pub?output=csv"

export async function getJobs(): Promise<Job[]> {
  const res = await fetch(JOBS_CSV_URL, { cache: "no-store" })
  if (!res.ok) {
    console.error(`Failed to fetch jobs sheet: ${res.status} ${res.statusText}`)
    return []
  }

  const csvText = await res.text()
  const { data, errors } = Papa.parse<JobRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  })

  if (errors.length > 0) {
    console.warn("CSV parse warnings:", errors)
  }

  return data
    .filter((row) => row.title && row.title.trim() !== "")
    .map((row) => ({
      slug: slugify(row.title),
      title: row.title.trim(),
      department: (row.department ?? "").trim(),
      location: (row.location ?? "").trim(),
      type: (row.type ?? "").trim(),
      description: (row.description ?? "").trim(),
    }))
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  const jobs = await getJobs()
  return jobs.find((job) => job.slug === slug)
}
