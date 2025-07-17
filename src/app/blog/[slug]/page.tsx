import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  imageUrl: string;
};

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const res = await fetch(
    `https://panel.kasspor.com.tr/api/blogs?filters[slug][$eq]=${slug}&populate=images`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (!res.ok) return null;

  const json = await res.json();
  const item = json.data?.[0];

  if (!item) return null;

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    createdAt: item.createdAt,
    imageUrl: item.images?.[0]?.url
      ? `https://panel.kasspor.com.tr${item.images[0].url}`
      : '/gorsel-yok.jpg',
  };
}

type Props = {
  params: { slug: string };
};

export default async function BlogDetailPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Yayınlanma tarihi: {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
      </p>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </main>
  );
}
