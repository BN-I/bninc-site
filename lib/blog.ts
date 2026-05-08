import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  keywords: string[];
  readingTime: number; // minutes
  coverImage?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const meta = parseFrontmatter(raw);
      return { slug, ...meta } as BlogPost;
    })
    .filter((p) => new Date(p.date) <= new Date())
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(
  slug: string
): { meta: BlogPost; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = splitFrontmatter(raw);
  return { meta: { slug, ...parseFrontmatter(raw) } as BlogPost, content };
}

function parseFrontmatter(raw: string): Omit<BlogPost, "slug"> {
  const { data } = splitFrontmatter(raw);
  return {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    category: String(data.category ?? "General"),
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    readingTime: typeof data.readingTime === "number" ? data.readingTime : 5,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
  };
}

function splitFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  match[1].split("\n").forEach((line) => {
    const colon = line.indexOf(":");
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    if (val.startsWith("[")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""));
    } else if (val.startsWith("http")) {
      data[key] = val;
    } else if (!isNaN(Number(val)) && val !== "") {
      data[key] = Number(val);
    } else {
      data[key] = val.replace(/^['"]|['"]$/g, "");
    }
  });

  return { data, content: match[2] };
}
