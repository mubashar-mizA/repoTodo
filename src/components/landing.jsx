import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className=" bg-gradient-to-b from-teal-600 to-teal-800 text-white min-h-screen w-full flex items-center justify-center">
            <div className="text-center h-max w-full p-2">
                <h1 className="text-5xl font-bold text-yellow-300 my-2">
                    Make Every Day Count!
                </h1>
                <p className="text-xl text-gray-200 italic my-1">
                    "The secret of getting ahead is getting started."
                </p>
                <p className="my-1">
                    <Link
                        to="todo-dashboard"
                        className=" text-white hover:border-b transition duration-300"
                    >
                        Go to To-Do Dashboard
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Landing;
