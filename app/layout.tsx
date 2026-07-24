import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"

const githubPagesRepo = process.env.GITHUB_PAGES_REPO ?? "ameni-azouz-portfolio"
const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? `https://ameniaz12.github.io/${githubPagesRepo}`
    : "https://ameni-azouz-portfolio.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ameni Azzouz | Cybersecurity · DevSecOps · Cloud Security",
    template: "%s | Ameni Azzouz",
  },
  description:
    "Cybersecurity portfolio of Ameni Azzouz. DevSecOps, application security, cloud security, penetration testing, SOC/SIEM and malware analysis. Graduation internship in France from January 2027 and available now for junior cybersecurity opportunities.",
  keywords: [
    "cybersecurity",
    "cybersecurite",
    "DevSecOps",
    "application security",
    "cloud security",
    "penetration testing",
    "pentest",
    "malware analysis",
    "SIEM",
    "SOC",
    "stage PFE cybersecurite",
    "cybersecurity internship France",
    "Ameni Azzouz",
  ],
  authors: [{ name: "Ameni Azzouz" }],
  openGraph: {
    title: "Ameni Azzouz | Cybersecurity · DevSecOps · Cloud Security",
    description:
      "DevSecOps, application security, cloud security, penetration testing, SOC/SIEM and malware analysis. FR/EN portfolio.",
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    siteName: "Ameni Azzouz Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ameni Azzouz cybersecurity portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameni Azzouz | Cybersecurity · DevSecOps · Cloud Security",
    description:
      "DevSecOps, application security, cloud security, penetration testing, SOC/SIEM and malware analysis. Available now for junior cybersecurity opportunities.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: `${siteUrl}/icon.svg`,
    apple: `${siteUrl}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
