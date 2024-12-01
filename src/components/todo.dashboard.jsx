import { useState } from "react";
import { Link } from "react-router-dom";

const TodoDashboard = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoContent, setTodoContent] = useState('');
    const [addTodo, setAddTodo] = useState(false);
    const [translateMenu, setTranslateMenu] = useState(false);  // Default false to hide menu

    const handleNewTodo = () => {
        const newTodo = { title: todoTitle, content: todoContent };
        const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
        existingTodos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(existingTodos));
        setTodoTitle('');
        setTodoContent('');
        setAddTodo(false);
    };

    return (
        <div className="bg-gradient-to-r text-white min-h-screen">
            <div className="flex">
                <nav className={`md:w-1/5 w-full p-4 bg-gradient-to-b from-teal-600 to-teal-800 transform ${translateMenu ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-50`}>
                    <ul className="flex flex-col space-y-4 text-white">
                        <Link to="/todo-dashboard/todo-list" className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">All Todos</Link>
                        <Link to='/todo-dashboard/todo-deleted' className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">Deleted Todos</Link>
                        <Link className="text-lg text-gray-200 hover:text-yellow-300 transition duration-300">Completed Todos</Link>
                        <div className="absolute top-2 right-4 z-50 block md:hidden"
                            onClick={
                                () => {
                                    setTranslateMenu((preVal) => !preVal)
                                }
                            }
                        >close</div>
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
                        <div className="block md:hidden absolute top-4 left-5" onClick={() => setTranslateMenu(prev => !prev)}>
                            Menu
                        </div>
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
