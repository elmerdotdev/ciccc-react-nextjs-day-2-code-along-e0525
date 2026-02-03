'use client';

import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoListClient = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('http://localhost:3000/api/todos');
      const data = await res.json();
      setTodos(data.todos);
    };

    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.todo} - {t.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListClient;
