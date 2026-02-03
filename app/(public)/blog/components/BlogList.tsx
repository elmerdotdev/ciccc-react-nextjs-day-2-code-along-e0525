import Link from 'next/link';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogList = async () => {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  const posts: Post[] = data.posts;

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link
            href={`/blog/${p.id}`}
            className="font-bold text-blue-500 underline"
          >
            {p.title}
          </Link>
          <p>{p.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
