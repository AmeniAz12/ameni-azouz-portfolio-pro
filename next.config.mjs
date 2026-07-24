/* global process */

const isGithubPages = process.env.GITHUB_PAGES === "true"
const githubPagesRepo = process.env.GITHUB_PAGES_REPO ?? "ameni-azouz-portfolio"
const githubPagesBasePath = `/${githubPagesRepo}`

if (isGithubPages) {
  process.env.NEXT_PUBLIC_BASE_PATH = githubPagesBasePath
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGithubPages ? `${githubPagesBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
