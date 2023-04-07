import PageTitle from './components/PageTitle';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useTodos } from './components/useTodos';

export default function App() {
  const { isLoading, todos, addTodo, toggleCompleted } = useTodos();

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          {isLoading && <div>Loading...</div>}
          {!isLoading && <TodoList todos={todos} toggleCompleted={toggleCompleted} />}
        </div>
      </div>
    </div>
  );
}
