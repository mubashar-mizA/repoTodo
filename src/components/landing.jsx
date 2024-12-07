import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const [showNote, setShowNote] = useState(false)
    return (
        <div className="bg-gradient-to-b from-teal-600 to-teal-800 text-white min-h-screen w-full flex items-center justify-between p-4 flex-col relative">
            <div className="text-center h-max w-full p-2">
                <h1 className="md:text-5xl text-2xl font-bold text-yellow-300 my-2">
                    Make Every Day Count!
                </h1>
                <p className="md:text-xl text-sm text-gray-200 italic my-1">
                    The secret of getting ahead is getting started.
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
            {
                showNote ? <div className="absolute md:w-1/2 w-full h-screen md:max-h-max bg-gradient-to-b from-teal-400 to-teal-200 text-black md:p-8 p-0 ">
                    <div className="text-red-600 absolute right-3 md:right-5 top-3 md:top-10 hover:cursor-pointer"
                        onClick={
                            () => {
                                setShowNote((preVal) => !preVal)
                            }
                        }
                    >Close</div>
                    <h2 className="md:text-3xl md:p-2 p-3 font-bold">Please note that!</h2>
                    <p className="md:p-2 px-3">At the moment, all your todos are managed using Redux Toolkit (RTK), which provides a more efficient state management solution compared to local storage. This ensures that your todos are stored in a global state and can be easily accessed and updated across the app. I am currently working on a feature to sync your todos with cloud storage, allowing you to securely store and access them from any device, anywhere. In addition, I am also working on adding a login functionality to ensure that your todos are tied to your account, making them even more accessible and secure. This upgrade will provide you with a more flexible and seamless experience.</p>
                </div> : ''
            }
            <div className="absolute md:bottom-20 bottom-4 md:right-20 right-5 md:text-xl text-sm border rounded-full md:p-2 p-3 hover:cursor-pointer"
                onClick={
                    () => {
                        setShowNote((preVal) => !preVal)
                    }
                }
            >
                info</div>

            <div>
                <h1>Developed and maintained by <b>Mubasahr Siddique</b></h1>
            </div>
        </div>

    );
};

export default Landing;
