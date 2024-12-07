import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosAsync } from "../features/todo.slice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const { token } = useSelector((state) => state.auth); // Fetch token from auth slice

  useEffect(() => {
    if (token) {
      dispatch(fetchTodosAsync(token)); // Fetch todos when the component mounts
    }
  }, [dispatch, token]);

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-teal-50 text-black min-h-screen p-6">
      <h1 className="text-center mb-8 text-2xl font-bold">Todo List</h1>
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-xl">{todo.todoTitle}</h2>
              <p>{todo.todoContent}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
};

export default TodoList;
