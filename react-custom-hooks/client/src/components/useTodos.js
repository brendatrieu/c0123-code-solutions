/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   `isLoading`: a boolean indicating if the data has not yet loaded;
 *   `todos`: a list of To Do items;
 *   `addTodo`: a function (newTodo) that will add a new To Do;
 *   `toggleCompleted`: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    /* TODO: If `todos` hasn't been defined yet, read the items from the API
     * and set them into the `todos` state.
     */
    async function loadTodos() {
      try {
        const allTodos = await readTodos();
        setTodos(allTodos);
      } catch(err) {
        console.error(err);
      }
    }
    if (!todos) {
      loadTodos();
    }
  }, [todos]);

  async function addTodo(newTodo) {
    /* TODO: Call the API function that creates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const nextTodo = await createTodo(newTodo);
      setTodos([...todos, nextTodo]);
    } catch(err) {
      console.error(err);
    }
  }

  async function toggleCompleted(todoId) {
    /* TODO: Find the Todo item being updated, toggle its completed prop, and call
     * the API function that updates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * When updating this state, use the updated `todo` returned from the API.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const targetTodo = todos.find(todo => todo.todoId === todoId);
      targetTodo.isCompleted = !targetTodo.isCompleted;
      const modifiedTodo = await updateTodo(targetTodo);
      const newTodos = todos.map((todo) => (todo.todoId === todoId) ? modifiedTodo : todo);
      setTodos(newTodos);
    } catch(err) {
      console.error(err);
    }
  }

  return {
    isLoading: todos === undefined,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch(url('/api/todos'));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch(url('/api/todos'), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(url(`/api/todos/${todo.todoId}`), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
