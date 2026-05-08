import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { JsonLd } from '@/components/layout/JsonLd'
import { siteConfig } from '@/lib/seo'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: 'article',
      publishedTime: post.meta.date,
      images: post.meta.coverImage ? [{ url: post.meta.coverImage }] : undefined,
    },
    twitter: {
      title: post.meta.title,
      description: post.meta.description,
      card: post.meta.coverImage ? 'summary_large_image' : 'summary',
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="font-display font-extrabold text-3xl text-white tracking-tight mt-10 mb-5 leading-snug" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="font-display font-extrabold text-2xl text-white tracking-tight mt-10 mb-4 leading-snug" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="font-display font-bold text-xl text-white tracking-tight mt-8 mb-3" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="font-body text-base text-teal-50/75 leading-relaxed mb-5" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-outside pl-6 mb-5 space-y-2 text-teal-50/75 font-body text-base leading-relaxed" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal list-outside pl-6 mb-5 space-y-2 text-teal-50/75 font-body text-base leading-relaxed" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="font-bold text-white" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="font-mono text-sm bg-teal-50/10 text-teal-300 rounded px-1.5 py-0.5" />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="bg-teal-950/80 border border-teal-50/10 rounded-xl p-5 overflow-x-auto mb-6 font-mono text-sm text-teal-200/85 leading-relaxed" />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="border-l-4 border-teal-400/40 pl-5 italic text-teal-50/60 mb-5" />
  ),
  hr: () => <hr className="border-teal-50/10 my-10" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="w-full font-body text-sm border-collapse" />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className="text-left font-display font-bold text-white border-b border-teal-50/20 py-2 pr-6" />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="text-teal-50/70 border-b border-teal-50/[0.07] py-2 pr-6 align-top" />
  ),
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    image: post.meta.coverImage,
    author: { '@type': 'Organization', name: 'BNinc' },
    publisher: { '@type': 'Organization', name: 'BNinc', url: siteConfig.url },
    url: `${siteConfig.url}/blog/${slug}`,
  }

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Header */}
      <section className="bg-teal-950 pt-[calc(72px+4rem)] pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_60%_55%_at_70%_40%,rgba(74,143,163,0.15)_0%,transparent_65%)]" />
        <div className="relative max-w-[780px] mx-auto px-8 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/blog"
              className="font-mono text-xs text-teal-50/40 hover:text-teal-400 uppercase tracking-wide transition-colors"
            >
              ← Blog
            </Link>
            <span className="text-teal-50/20 text-xs">/</span>
            <span className="font-mono text-xs text-teal-400 uppercase tracking-wide">
              {post.meta.category}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(1.9rem,4.5vw,3.2rem)] text-white tracking-tighter leading-tight mb-5">
            {post.meta.title}
          </h1>

          <p className="font-body font-light text-lg text-teal-50/60 leading-relaxed mb-8">
            {post.meta.description}
          </p>

          <div className="flex items-center gap-6 text-teal-50/30 font-mono text-xs uppercase tracking-wider">
            <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
            <span className="text-teal-50/15">·</span>
            <span>{post.meta.readingTime} min read</span>
          </div>
        </div>

        {post.meta.coverImage && (
          <div className="max-w-[780px] mx-auto px-8 pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.meta.coverImage}
              alt=""
              className="w-full rounded-t-xl object-cover"
              style={{ maxHeight: '420px' }}
            />
          </div>
        )}
      </section>

      {/* Content */}
      <section className="bg-teal-950 pb-28">
        <div className="max-w-[780px] mx-auto px-8">
          <div className={`pt-10 ${post.meta.coverImage ? 'border-none' : 'border-t border-teal-50/[0.08]'}`}>
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-teal-50/[0.08]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display font-bold text-sm text-teal-50/50 hover:text-teal-400 transition-colors"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
