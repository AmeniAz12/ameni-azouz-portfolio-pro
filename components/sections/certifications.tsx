"use client"

import Image from "next/image"
import { Award, CheckCircle2, Clock3 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { withBasePath } from "@/lib/site-paths"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const ACHIEVED = ["Obtenue", "Achieved", "Examen réussi", "Exam Passed"]

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label={t.certifications.label}
          heading={t.certifications.heading}
          subtitle={t.certifications.subtitle}
        />

        {[
          { title: t.certifications.achievedTitle, items: t.certifications.items.filter((cert) => ACHIEVED.includes(cert.status)), achievedGroup: true },
          { title: t.certifications.inProgressTitle, items: t.certifications.items.filter((cert) => !ACHIEVED.includes(cert.status)), achievedGroup: false },
        ].map((group) => (
          <div key={group.title} className="mt-14">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-primary">{group.title}</h3>
            <div className={group.achievedGroup ? "mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3" : "mt-5 grid gap-5 sm:grid-cols-2"}>
          {group.items.map((cert, i) => {
            const achieved = ACHIEVED.includes(cert.status)
            const StatusIcon = achieved ? CheckCircle2 : Clock3
            return (
              <Reveal
                key={cert.name}
                delay={(i % 3) * 80}
                className={achieved ? "flex items-start gap-4 rounded-2xl border border-primary/25 bg-card/65 p-5 transition-colors hover:border-primary/50" : "flex items-start gap-4 rounded-2xl border border-border bg-card/45 p-5 transition-colors hover:border-primary/30"}
              >
                <span className={achieved ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" : "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground"}>
                  {achieved ? <Award className="h-5 w-5" aria-hidden="true" /> : <Clock3 className="h-5 w-5" aria-hidden="true" />}
                </span>
                <div className="min-w-0 flex-1">
                  {cert.certificateImage && (
                    <div className="mb-4 overflow-hidden rounded-lg border border-border bg-secondary/20">
                      <div className="relative aspect-[16/11]">
                        <Image
                          src={withBasePath(cert.certificateImage.src) ?? cert.certificateImage.src}
                          alt={cert.certificateImage.alt}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold leading-snug text-balance">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.examResult && (
                    <p className="mt-1 text-xs text-muted-foreground">{cert.examResult}</p>
                  )}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {cert.year && <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>}
                    <span
                      className={
                        achieved
                          ? "inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary"
                          : "rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      }
                    >
                      {achieved && <StatusIcon className="h-3 w-3" aria-hidden="true" />}
                      {cert.status}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cert.verificationUrl && (
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs font-medium text-primary">
                      {t.certifications.verification}
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
