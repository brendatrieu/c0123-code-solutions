import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadTodos() {
      try {
        const res = await fetch(url('/api/todos'));
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const todos = await res.json();
        setTodos(todos);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadTodos();
  }, []);

  async function addTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    };
    try {
      const res = await fetch(url('/api/todos'), req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const todo = await res.json();
      setTodos((prev) => prev.concat(todo));
    } catch (e) {
      setError(e);
    }
  }

  async function toggleCompleted(todoId) {
    const oldTodo = todos.find((todo) => todo.todoId === todoId);
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted }),
    };
    try {
      const res = await fetch(url(`/api/todos/${todoId}`), req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const updated = await res.json();
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId
          ? updated
          : original
      );
      setTodos(allTodos);
    } catch (e) {
      setError(e);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
