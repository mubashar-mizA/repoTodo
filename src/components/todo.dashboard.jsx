// TodoDashboard.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd } from "../features/todoslice.js"; // Importing the todoAdd action
import { Link } from "react-router-dom";

const TodoDashboard = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoContent, setTodoContent] = useState('');
  const [addTodo, setAddTodo] = useState(false);
  const todos = useSelector(state => state.todos.todos); // Access todos from Redux store
  const dispatch = useDispatch();

  const handleNewTodo = () => {
    const newTodo = { id: Date.now(), title: todoTitle, content: todoContent };
    dispatch(todoAdd(newTodo)); // Dispatching action to add todo
    setTodoTitle('');
    setTodoContent('');
    setAddTodo(false);
  };

  return (
    <div className="bg-gradient-to-r text-white min-h-screen">
      <div className="flex">
        <nav className="md:w-1/5 w-full p-4 bg-gradient-to-b from-teal-600 to-teal-800">
          <ul className="flex flex-col space-y-4 text-white">
            <Link to="/todo-dashboard/todo-list" className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">All Todos</Link>
            <Link to='/todo-dashboard/todo-deleted' className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">Deleted Todos</Link>
            <Link className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">Completed Todos</Link>
          </ul>
        </nav>

        {/* Main Content Area */}
        {addTodo ? (
          <div className="flex min-h-screen w-full justify-center items-center bg-teal-50 absolute md:static right-0 left-0">
            <div className="md:w-9/12 w-full bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                autoFocus
                placeholder="Todo Title"
                className="w-full p-2 mb-2 outline-none border-b placeholder:text-black text-black"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <textarea
                placeholder="Todo Content"
                className="w-full p-2 mb-2 outline-none text-black placeholder:text-black"
                rows={8}
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
              />
              <button
                className="w-full py-3 bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-500 transition duration-300"
                onClick={handleNewTodo}
              >
                Add Todo
              </button>
            </div>
          </div>
        ) : (
          <div className="min-h-screen flex items-center justify-center text-lg text-gray-800 w-full bg-teal-50 absolute md:static right-0 left-0">
            <p className="p-4 md:p-0">Please click on plus to add a todo</p>
          </div>
        )}
      </div>

      {/* Add Todo Button */}
      {!addTodo && (
        <div className="absolute bottom-20 right-10">
          <button
            className="text-5xl text-black hover:text-yellow-300 transition duration-300"
            onClick={() => setAddTodo((prev) => !prev)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoDashboard;
