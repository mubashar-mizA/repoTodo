import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className="bg-teal-50 text-black min-h-screen p-6">
            <div className="text-center mb-8 flex items-center justify-center gap-10 bg-gradient-to-b from-teal-600 to-teal-800 p-3">
                <h1 className=" text-white text-3xl font-bold">Todo List</h1>
                <Link to="/" className="text-lg text-yellow-300 hover:underline transition duration-300">Back to Home</Link>
            </div>

            {todos.length > 0 ? (
                <ul className="space-y-4 p-3">
                    {todos.map((todo, index) => (
                        <li key={index} className="bg-white text-black p-6 rounded-lg shadow-md">
                            <h2 className="font-bold text-xl">{todo.title}</h2>
                            <p className="text-lg">{todo.content}</p>
                            <button
                                className="text-red-500 hover:text-red-700 transition duration-300 mt-2"
                                onClick={() => {
                                    const deletedTodo = todos.filter((_, i) => i === index);
                                    const remainingTodos = todos.filter((_, i) => i !== index);
                                    const previousDeleted = JSON.parse(localStorage.getItem("deleted")) || [];
                                    localStorage.setItem("deleted", JSON.stringify([...previousDeleted, ...deletedTodo]));
                                    setTodos(remainingTodos);
                                    localStorage.setItem("todos", JSON.stringify(remainingTodos));
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="p-3">No todos available.</p>
            )}
        </div>
    );
};

export default TodoList;
