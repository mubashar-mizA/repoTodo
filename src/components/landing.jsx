import { Link } from "react-router"
const Landing = () => {
    return (
        <>
            <div className="bg-black text-white mx-auto min-h-screen flex items-center justify-center">
                <div>
                    <h1 className="text-center text-xl text-green-700">Make you'r day</h1>
                    <Link to='todo-dashboard' className="text-2xl">Goto todo's dashboard</Link>
                </div>
            </div>
        </>
    )
}
export default Landing