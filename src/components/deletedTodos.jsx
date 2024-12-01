import { useEffect, useState } from "react";
import { Link } from "react-router";

const DeletedTodos = () => {
    const [deletedTodos, setDeletedTodos] = useState([]);

    useEffect(() => {
        let deletedTodosData = JSON.parse(localStorage.getItem('deleted')) || [];
        setDeletedTodos(deletedTodosData);
    }, []);

    return (
        <div className="bg-teal-50 text-black min-h-screen p-6">
            <div className="text-center mb-8 flex items-center justify-center gap-10 bg-gradient-to-b from-teal-600 to-teal-800 p-3">
                <h1 className=" text-white text-lg md:text-3xl font-bold">Deleted Todos</h1>
                <Link to="/" className="text-sm md:text-lg text-yellow-300 hover:underline transition duration-300">Back to Home</Link>
            </div>
            <ul>
                {deletedTodos.map((todo, index) => (
                    <li key={index} className="bg-white text-black p-6 rounded-lg shadow-md mb-4">
                        <h2 className="font-bold text-xl">{todo.title}</h2>
                        <p>{todo.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeletedTodos;
