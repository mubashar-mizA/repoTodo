import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('') // For error messages
    const [successMessage, setSuccessMessage] = useState('') // For success message

    const handleSignup = async () => {

        console.log('Signup button clicked')

        // Validate form data
        if (!name || !email || !password) {
            setErrorMessage("All fields are required.");
            return;
        }

        const detail = {
            name: name,
            email: email,
            password: password
        }

        try {
            const url = 'http://localhost:3310/users/signup'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detail) // Send the details directly
            })

            const data = await res.json()

            if (res.status === 201) {
                setSuccessMessage(data.message)
                setErrorMessage('') // Clear any previous error message
                setName('')
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    navigate('/signin')
                }, 2000);
            } else {
                setErrorMessage(data.message)
                setSuccessMessage('') // Clear any previous success message
            }

        } catch (error) {
            console.log(error)
            setErrorMessage('Something went wrong. Please try again.')
            setSuccessMessage('') // Clear any previous success message
        }
    }

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="border bg-gradient-to-b from-teal-600 to-teal-800 p-16 shadow-lg rounded-md w-full md:max-w-md flex flex-col gap-2">
                    <span className="relative mx-auto my-4">
                        <span className="my-4 text-xl text-white">Register & Get Access</span>
                        <span className="w-20 h-[2px] bg-yellow-300 absolute -bottom-1 right-0 mt-2"></span>
                    </span>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="bg-red-500 text-white p-2 rounded-md my-2">
                            {errorMessage}
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div className="bg-green-500 text-white p-2 rounded-md my-2">
                            {successMessage}
                        </div>
                    )}

                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        className="p-2 bg-gray-100 placeholder:text-black rounded-md outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                        onClick={handleSignup}
                        className="mt-2 border-[1px] rounded-md p-2 hover:bg-gray-900 hover:text-white transition-all duration-500 w-1/2 mx-auto text-white"
                    >
                        Signup
                    </button>
                    <span className="mx-auto">or</span>
                    <Link to='/signin' className="mx-auto underline text-white">Already have an account? Login</Link>
                </div>
            </div>
        </>
    )
}

export default Signup
