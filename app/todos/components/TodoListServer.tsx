interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoListServer = async () => {
  const res = await fetch('http://localhost:3000/api/todos');
  const data = await res.json();
  const todos: Todo[] = data.todos;

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

export default TodoListServer;
