import { useState } from "react";
import { Link } from "react-router";

const TodoDashboard = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoContent, setTodoContent] = useState('');
    const [addTodo, setAddTodo] = useState(false);

    const handleNewTodo = () => {
        const newTodo = { title: todoTitle, content: todoContent };

        // LocalStorage se todos ko retrieve karein
        const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

        // Naya todo add karein
        existingTodos.push(newTodo);

        // Updated list ko localStorage mein save karein
        localStorage.setItem("todos", JSON.stringify(existingTodos));

        // Fields ko clear karein
        setTodoTitle('');
        setTodoContent('');
        setAddTodo(false);
    };

    return (
        <div className="bg-black text-white mx-auto min-h-screen relative">
            <div className="flex">
                <nav className="w-1/5 p-4 bg-rose-400 min-h-screen">
                    <ul className="flex flex-col">
                        <Link to="/todo-dashboard/todo-list" className="text-xl">All Todos</Link>
                        <Link to='/todo-dashboard/todo-deleted' className="text-xl">Deleted Todos</Link>
                        <Link className="text-xl">Completed Todos</Link>
                    </ul>
                </nav>
                {addTodo ? (
                    <div className="flex min-h-screen w-full">
                        <div className="bg-green-400 w-full flex justify-center min-h-screen items-center">
                            <div className="w-8/12">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Todo Title"
                                        className="w-full border px-2 py-4 outline-none placeholder:text-black text-black"
                                        value={todoTitle}
                                        onChange={(e) => setTodoTitle(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Todo Content"
                                        className="w-full p-2 outline-none placeholder:text-black text-black"
                                        rows={10}
                                        value={todoContent}
                                        onChange={(e) => setTodoContent(e.target.value)}
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        className="w-full p-2 border"
                                        onClick={handleNewTodo}
                                    >
                                        Add to list
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-screen flex items-center justify-center w-full">
                        Please click on plus to add todo
                    </div>
                )}
            </div>
            {!addTodo && (
                <div>
                    <div
                        className="absolute bottom-28 right-20 text-4xl hover:cursor-pointer"
                        onClick={() => setAddTodo((prev) => !prev)}
                    >
                        +
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoDashboard;
