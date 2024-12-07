import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth.slice"; // Import the action to set auth state

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for errors
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignin = async () => {
        // Check for empty fields
        if (!email || !password) {
            setErrorMessage('Both fields are required!');
            return;
        }

        // Reset error message
        setErrorMessage('');

        const signinDetail = { email, password };

        try {
            const url = 'http://localhost:3310/users/signin';
            const res = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signinDetail)
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                // Update auth state in Redux
                dispatch(setAuth({ user: data.email, token: data.token }));
                setTimeout(() => {
                    navigate('/todo-dashboard'); // Redirect to Todo Dashboard
                }, 3000)
            } else {
                setErrorMessage(data.message); // Display error from backend
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border bg-gradient-to-b from-teal-600 to-teal-800 p-16 shadow-lg rounded-md w-full md:max-w-md flex flex-col gap-3">
                <span className="relative mx-auto my-10">
                    <span className="my-4 text-2xl text-white">Signin & Get Access</span>
                    <span className="w-20 h-[2px] bg-yellow-300 absolute -bottom-1 right-0 mt-2"></span>
                </span>
                {errorMessage && <p className="text-red-500 text-center absolute top-0 left-1/2">{errorMessage}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 bg-gray-100 placeholder:text-black rounded-md outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 bg-gray-100 placeholder:text-black rounded-md outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSignin}
                    className="mt-2 border-[1px] rounded-md p-2 hover:bg-gray-900 hover:text-white transition-all duration-500 w-1/2 mx-auto text-white"
                >
                    Signin
                </button>
                <span className="mx-auto">or</span>
                <Link to='/signup' className="mx-auto text-white">
                    Don't have an account? Signup!
                </Link>
            </div>
        </div>
    );
};

export default Signin;
