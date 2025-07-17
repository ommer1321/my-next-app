import React from 'react';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: 'İlk Blog Yazım',
      slug: 'ilk-blog-yazim',
      content: 'Bu benim ilk blog yazım. Markdown desteklidir. Daha fazlası için tıklayın.',
      imageUrl: 'kasspor-hk.jpg',
    },
        {
      id: 2,
      title: 'İlk Blog Yazım',
      slug: 'ilk-blog-yazim',
      content: 'Bu benim ilk blog yazım. Markdown desteklidir. Daha fazlası için tıklayın.',
      imageUrl: 'kasspor-hk.jpg',
    },    {
      id: 3,
      title: 'İlk Blog Yazım',
      slug: 'ilk-blog-yazim',
      content: 'Bu benim ilk blog yazım. Markdown desteklidir. Daha fazlası için tıklayın.',
      imageUrl: 'kasspor-hk.jpg',
    },
    {
      id: 4,
      title: 'Yeni Gelişmeler',
      slug: 'yeni-gelismeler',
      content: 'Teknoloji dünyasında yeni gelişmeler neler? Hadi birlikte göz atalım.',
      imageUrl: 'kasspor-sıralı-2.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className=" rounded-xl shadow-sm hover:shadow-md transition overflow-hidden bg-white"
        >
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {blog.content.substring(0, 100)}...
            </p>
            <a
              href={`/blog/${blog.slug}`}
              className="hover:underline text-red-600 font-medium"
              style={{ color: '#b40024' }} // Tailwind red-600 rengi
            >
              Devamını oku →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
