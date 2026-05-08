import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/layout/JsonLd'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog | Engineering Insights — BNinc',
  description:
    'Practical engineering guides on mobile app development, React Native, Next.js, AI integration, and building production software.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  keywords: ['software engineering blog', 'mobile app development', 'react native', 'nextjs', 'AI integration', 'LLM'],
  openGraph: {
    title: 'Blog | Engineering Insights — BNinc',
    description:
      'Practical engineering guides on mobile app development, React Native, Next.js, AI integration, and building production software.',
    url: `${siteConfig.url}/blog`,
  },
  twitter: {
    title: 'Blog | Engineering Insights — BNinc',
    description:
      'Practical engineering guides on mobile app development, React Native, Next.js, AI integration, and building production software.',
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'BNinc Engineering Blog',
  url: `${siteConfig.url}/blog`,
  description: 'Practical engineering guides from the BNinc team.',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map((p) => p.category)))

  return (
    <>
      <JsonLd data={blogSchema} />

      {/* Hero */}
      <section className="bg-teal-950 pt-[calc(72px+5rem)] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_60%_55%_at_70%_40%,rgba(74,143,163,0.18)_0%,transparent_65%)]" />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide block mb-4">
            {'// engineering insights'}
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tighter leading-none mb-5">
            The BNinc blog.
          </h1>
          <p className="font-body font-light text-lg text-teal-50/65 max-w-[520px] leading-relaxed mb-12">
            Practical guides on building production software — mobile apps, AI integration,
            web architecture, and cross-platform development.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { value: posts.length, label: 'articles published' },
              { value: categories.length, label: 'topic areas' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-4xl text-white tracking-tighter">
                  {value}
                </p>
                <p className="font-mono text-xs text-teal-50/40 uppercase tracking-wide mt-1">
                  {'// '}{label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-teal-950 py-16 pb-28">
        <div className="max-w-[1280px] mx-auto px-8">
          {posts.length === 0 ? (
            <p className="font-body text-teal-50/50 text-center py-20">No posts published yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white/[0.04] border border-teal-50/[0.08] rounded-xl overflow-hidden hover:border-teal-400/40 hover:bg-white/[0.07] transition-all duration-200"
                >
                  {post.coverImage && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={post.coverImage}
                      alt=""
                      className="w-full h-44 object-cover"
                    />
                  )}

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-teal-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] text-teal-50/30 uppercase tracking-wider">
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h2 className="font-display font-extrabold text-lg text-white leading-snug tracking-tight mb-3 group-hover:text-teal-300 transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-body text-sm text-teal-50/55 leading-relaxed flex-1 mb-4">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-teal-50/[0.06]">
                      <time
                        dateTime={post.date}
                        className="font-mono text-[10px] text-teal-50/30 uppercase tracking-wider"
                      >
                        {formatDate(post.date)}
                      </time>
                      <span className="font-mono text-xs text-teal-400 group-hover:translate-x-1 transition-transform duration-200">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
