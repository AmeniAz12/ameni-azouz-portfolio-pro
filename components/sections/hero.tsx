"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Download, Circle } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n/language-context"
import { NetworkBackground } from "@/components/network-background"
import { CONTACT } from "@/lib/i18n/translations"
import { withBasePath } from "@/lib/site-paths"

function TerminalCard({ lines }: { lines: string[] }) {
  const [rendered, setRendered] = useState<string[]>([])

  useEffect(() => {
    setRendered([])
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setRendered(lines.slice(0, i))
      if (i >= lines.length) clearInterval(interval)
    }, 550)
    return () => clearInterval(interval)
  }, [lines])

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-card/70 shadow-2xl shadow-primary/5 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Circle className="h-3 w-3 fill-destructive text-destructive" />
        <Circle className="h-3 w-3 fill-accent text-accent" />
        <Circle className="h-3 w-3 fill-primary text-primary" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">ameni@security:~</span>
      </div>
      <div className="min-h-[168px] space-y-1.5 p-4 font-mono text-sm leading-relaxed">
        {rendered.map((line, idx) => (
          <p
            key={idx}
            className={
              line.startsWith("$")
                ? "text-primary"
                : line.startsWith(">")
                  ? "text-accent"
                  : "text-muted-foreground"
            }
          >
            {line}
            {idx === rendered.length - 1 && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" aria-hidden="true" />
            )}
          </p>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const { lang, t } = useLanguage()
  const currentCv = lang === "fr" ? CONTACT.cvFr : CONTACT.cvEn
  const currentCvDownloadName = lang === "fr" ? CONTACT.cvFrDownloadName : CONTACT.cvEnDownloadName

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <NetworkBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-balance text-xl font-semibold text-primary sm:text-2xl">{t.hero.subtitle}</p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.hero.focusBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.hero.viewProjects}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={withBasePath(currentCv)}
              download={currentCvDownloadName}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.hero.downloadCv}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <GithubIcon className="h-4 w-4" />
              {t.hero.github}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LinkedinIcon className="h-4 w-4" />
              {t.hero.contact}
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div>
            <TerminalCard lines={t.hero.terminalLines} />
          </div>
        </div>
      </div>
    </section>
  )
}
