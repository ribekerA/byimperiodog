// src/pages/blog/index.tsx
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@/lib/posts";

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section className="mt-4 mb-8 space-y-8 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl font-playfair text-pet-dark text-center">
        Blog By Império Dog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-xs sm:text-sm">
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </p>
              <p className="mt-2 text-gray-700 text-sm">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-pet-blue hover:underline text-sm sm:text-base"
              >
                Leia mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
};
