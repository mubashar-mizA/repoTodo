import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // LocalStorage se todos fetch karein
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div>
                <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                <Link to='/'>Back to home</Link>

            </div>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="mb-2 p-2 border">
                            <h2 className="font-bold">{todo.title}</h2>
                            <p>{todo.content}</p>
                            <p
                                onClick={() => {
                                    console.log(index);

                                    // Filter out the todo to delete
                                    const deletedTodo = todos.filter((_, i) => i === index); // Get the specific todo
                                    const remainingTodos = todos.filter((_, i) => i !== index); // Get the remaining todos

                                    // Update the deleted todos in localStorage
                                    const previousDeleted = JSON.parse(localStorage.getItem("deleted")) || [];
                                    localStorage.setItem("deleted", JSON.stringify([...previousDeleted, ...deletedTodo]));

                                    // Update the remaining todos in state and localStorage
                                    setTodos(remainingTodos);
                                    localStorage.setItem("todos", JSON.stringify(remainingTodos));
                                }}
                            >
                                Delete
                            </p>

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
