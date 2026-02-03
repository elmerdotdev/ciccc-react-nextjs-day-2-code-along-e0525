import { Post } from '@/app/(public)/blog/components/BlogList';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  let post: Post;

  try {
    const res = await fetch(`https://dummyjson.com/posts/${slug}`);
    const data = await res.json();
    post = data;
  } catch (err) {
    console.log(err);
    throw new Error('Unable to show post');
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <a className="border p-1" href={`/blog/${post.id}`}>
          Read more
        </a>
        <a className="border p-1 bg-red-500 text-white" href="/blog">
          Close
        </a>
      </div>
    </div>
  );
};

export default page;
