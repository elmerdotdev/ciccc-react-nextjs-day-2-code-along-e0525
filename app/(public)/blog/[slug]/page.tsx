import { Post } from '../components/BlogList';

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
    <div>
      <h1 className="font-bold text-2xl">
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
