// src/pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import { getPostSlugs, getPostBySlug, Post } from "@/lib/posts";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface BlogPostProps {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPost({ post, mdxSource }: BlogPostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <article className="mt-8 mb-8 px-4 sm:px-0 max-w-3xl mx-auto space-y-8">
      <Head>
        <title>{post.title} | By Império Dog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-pet-dark text-center">
        {post.title}
      </h1>
      <p className="text-gray-500 text-xs sm:text-sm text-center">
        {new Date(post.date).toLocaleDateString("pt-BR")}
      </p>

      <div className="w-full h-48 sm:h-64 md:h-80 relative rounded-lg overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
        <MDXRemote {...mdxSource} />
      </div>

      <div className="text-center">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Voltar ao Blog
        </Link>
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = getPostBySlug(slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  });
  return {
    props: { post, mdxSource }
  };
};
