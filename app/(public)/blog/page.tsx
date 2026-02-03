// import { Suspense } from 'react';
import BlogList from './components/BlogList';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {/* <Suspense fallback={<p>Loading posts...</p>}> */}
      <BlogList />
      {/* </Suspense> */}
    </div>
  );
};

export default Blog;
