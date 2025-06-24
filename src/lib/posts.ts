import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

// Retorna todos os slugs (nome dos arquivos MDX sem extensão)
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).map((file) => file.replace(/\.mdx$/, ""));
}

// Carrega um post por slug (front-matter + conteúdo MDX)
export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    slug: data.slug,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    content
  };
}

// Retorna todos os posts ordenados por data decrescente
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
