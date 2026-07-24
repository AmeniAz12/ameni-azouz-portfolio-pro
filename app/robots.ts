import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const githubPagesRepo = process.env.GITHUB_PAGES_REPO ?? "ameni-azouz-portfolio"

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.GITHUB_PAGES === "true"
      ? `https://ameniaz12.github.io/${githubPagesRepo}`
      : "https://ameni-azouz-portfolio.vercel.app"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
