import { useEffect, useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // LocalStorage se todos fetch karein
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="mb-2 p-2 border">
                            <h2 className="font-bold">{todo.title}</h2>
                            <p>{todo.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Koi todos mojood nahi hain.</p>
            )}
        </div>
    );
};

export default TodoList;
