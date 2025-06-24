import { GetServerSideProps } from "next";
import { getAllPosts } from "@/lib/posts";
import { FILHOTES } from "@/lib/filhotes";

const SITE_URL = "https://byimperiodog.com.br";

function generateSiteMap(posts: any[], filhotes: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}</loc></url>
  <url><loc>${SITE_URL}/filhotes</loc></url>
  <url><loc>${SITE_URL}/blog</loc></url>
  ${filhotes
    .map(({ slug }: any) => {
      return `<url><loc>${SITE_URL}/filhotes/${slug}</loc></url>`;
    })
    .join("")}
  ${posts
    .map(({ slug }: any) => {
      return `<url><loc>${SITE_URL}/blog/${slug}</loc></url>`;
    })
    .join("")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts();
  const filhotes = FILHOTES;
  const sitemap = generateSiteMap(posts, filhotes);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SiteMap() {
  return null;
}
