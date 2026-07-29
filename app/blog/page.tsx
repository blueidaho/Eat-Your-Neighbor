import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog — Eat Your Neighbor',
  description:
    'Guides, comparisons, and everything else about Eat Your Neighbor, the card, dice, and board game about eating your terrible neighbors.',
};

export default function BlogIndex() {
  return (
    <main>
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
          From the Cemetery Files
        </h1>
        <p className="text-ink/70 font-semibold text-lg mb-12 max-w-2xl">
          Guides, comparisons, and everything else you might want to know
          before your neighbors find out first.
        </p>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border-[3px] border-ink rounded-3xl p-6 sm:p-8 shadow-comic hover:shadow-comic-sky transition-shadow"
              style={{ rotate: `${i % 2 === 0 ? -1 : 1}deg` }}
            >
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-2">
                {post.title}
              </h2>
              <p className="text-ink/70 font-semibold">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
