import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { posts, getPost } from '@/lib/posts';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Eat Your Neighbor`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/blog"
          className="inline-block mb-8 font-display font-bold text-sm border-b-[3px] border-sky"
        >
          &larr; Back to the blog
        </Link>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <Footer />
      {post.jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </main>
  );
}
