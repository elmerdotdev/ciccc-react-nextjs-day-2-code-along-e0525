import { Metadata } from 'next';
import { Suspense } from 'react';
// import TodoListClient from './components/TodoListClient';
import TodoListServer from './components/TodoListServer';

export const metadata: Metadata = {
  title: 'My To Dos | My App',
  description: 'This is the todos page.',
};

const page = () => {
  return (
    <div>
      <h1>My To Dos</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <TodoListServer />
      </Suspense>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum
        minima, quisquam unde similique esse facere placeat odio consequatur
        voluptatum omnis beatae magni debitis natus illo tempora. Perspiciatis
        accusantium repudiandae dolores numquam expedita aspernatur possimus
        autem alias quaerat, repellendus cum perferendis labore amet doloremque
        ducimus eaque in veniam sed beatae.
      </p>
      {/* <TodoListClient /> */}
    </div>
  );
};

export default page;
