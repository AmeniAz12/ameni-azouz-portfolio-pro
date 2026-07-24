"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, FileText, PlayCircle } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"
import { withBasePath } from "@/lib/site-paths"
import type { ProjectContent } from "@/lib/i18n/translations"

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}

function ProjectLink({
  href,
  label,
  icon,
}: {
  href?: string
  label: string
  icon: React.ReactNode
}) {
  if (!href) return null
  const resolvedHref = withBasePath(href)
  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {icon}
      {label}
    </a>
  )
}

function ProjectCard({ project, delay }: { project: ProjectContent; delay: number }) {
  const { t } = useLanguage()

  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-xl border border-border bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/9] border-b border-border bg-secondary/40">
        <Image
          src={withBasePath(project.coverImage) ?? project.coverImage}
          alt={project.coverAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-primary">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-balance">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/60 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`${t.projects.viewCaseStudy}: ${project.title}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.projects.viewCaseStudy}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <ProjectLink href={project.githubUrl} label={t.projects.githubLabel} icon={<GithubIcon className="h-4 w-4" />} />
          <ProjectLink href={project.videoUrl} label={t.projects.videoLabel} icon={<PlayCircle className="h-4 w-4" aria-hidden="true" />} />
          <ProjectLink href={project.reportUrl} label={t.projects.reportLabel} icon={<FileText className="h-4 w-4" aria-hidden="true" />} />
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const projectsBySlug = new Map(t.projects.items.map((project) => [project.slug, project]))

  return (
    <section id="projects" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.projects.label} heading={t.projects.heading} subtitle={t.projects.subtitle} />

        <div className="mt-14 space-y-14">
          {t.projects.groups.map((group) => {
            const groupProjects = group.slugs
              .map((slug) => projectsBySlug.get(slug))
              .filter((project): project is ProjectContent => Boolean(project))

            if (groupProjects.length === 0) return null

            return (
              <div key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {groupProjects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} delay={(i % 3) * 90} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
