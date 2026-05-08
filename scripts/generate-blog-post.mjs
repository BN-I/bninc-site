#!/usr/bin/env node
/**
 * Generates a new blog post using the Anthropic API and writes it to content/blog/.
 * Run: node scripts/generate-blog-post.mjs
 * Requires: ANTHROPIC_API_KEY env var
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog')

const TOPICS = [
  { category: 'Mobile App Development', keywords: ['react native', 'iOS', 'Android', 'mobile UX', 'App Store', 'Expo'], services: 'mobile app development' },
  { category: 'Cross-Platform Development', keywords: ['expo', 'react native web', 'cross-platform', 'single codebase', 'EAS Build'], services: 'cross-platform development' },
  { category: 'Web Application Development', keywords: ['Next.js', 'React', 'TypeScript', 'server components', 'web performance', 'Vercel'], services: 'web application development' },
  { category: 'AI Integration & Agents', keywords: ['LLM', 'OpenAI', 'Claude', 'AI agents', 'RAG', 'prompt engineering', 'AI voice agents'], services: 'AI integration and agents' },
]

const SYSTEM_PROMPT = `You are a senior software engineer at BNinc, a software engineering firm specialising in mobile app development, cross-platform development, web application development, and AI integration.

Write authoritative, practical blog posts in the first-person plural ("we", "our team") style of a technical engineering firm. Tone: direct, opinionated, no fluff. Each post should give readers specific, actionable insights — not vague advice.

Output ONLY valid MDX frontmatter + body. No preamble, no explanation. The frontmatter must use this exact structure:

---
title: [Title Here]
description: [One sentence, 150 chars max, SEO-optimised]
date: [YYYY-MM-DD]
category: [Category Here]
keywords: [keyword1, keyword2, keyword3, keyword4, keyword5]
readingTime: [number, 5-10]
---

[MDX body — use ## for H2 headings, ### for H3, \`code\` for inline code, \`\`\` fenced blocks for multi-line code, **bold** for key terms, and tables where useful. 800-1400 words. End with a one-paragraph CTA mentioning BNinc and linking to /contact]`

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('Error: ANTHROPIC_API_KEY is not set')
    process.exit(1)
  }

  const client = new Anthropic({ apiKey })

  // Pick a topic — rotate by day of year to vary coverage
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000)
  const topic = TOPICS[dayOfYear % TOPICS.length]

  const today = new Date().toISOString().slice(0, 10)

  const userPrompt = `Write a blog post for ${today} about ${topic.services}.

Category: ${topic.category}
Focus keywords: ${topic.keywords.join(', ')}
Date: ${today}

Make the title specific and searchable (include a primary keyword). Cover a concrete technical problem or decision — not a general overview. Include at least one code example or comparison table.`

  console.log(`Generating blog post for category: ${topic.category}`)

  const message = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: userPrompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    console.error('Unexpected response type')
    process.exit(1)
  }

  const mdx = content.text.trim()

  // Extract title to generate slug
  const titleMatch = mdx.match(/^title:\s*(.+)$/m)
  if (!titleMatch) {
    console.error('Could not extract title from generated post')
    process.exit(1)
  }

  const slug = titleMatch[1]
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80)

  const filename = `${slug}.mdx`
  const filepath = path.join(CONTENT_DIR, filename)

  if (fs.existsSync(filepath)) {
    console.log(`File already exists: ${filename} — skipping`)
    process.exit(0)
  }

  fs.mkdirSync(CONTENT_DIR, { recursive: true })
  fs.writeFileSync(filepath, mdx, 'utf-8')

  console.log(`Created: content/blog/${filename}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
