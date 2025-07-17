import React from 'react';
import Link from 'next/link';

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  imageUrl: string;
};

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(
    'https://panel.kasspor.com.tr/api/blogs?pagination[page]=1&pagination[pageSize]=1000&populate=images',
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('Veri alınamadı');

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    createdAt: item.createdAt,
    imageUrl: item.images?.[0]?.formats?.medium?.url
      ? `https://panel.kasspor.com.tr${item.images[0].formats.medium.url}`
      : '/placeholder.jpg',
  }));
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Yazıları</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white  rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-3">
                  {blog.content.substring(0, 100).replace(/\n/g, ' ')}...
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: '#b40024' }}
                >
                  Devamını oku →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
