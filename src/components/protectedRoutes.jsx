import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux' // or useContext if you're using context for authentication

const ProtectedRoute = ({ element }) => {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    // If not authenticated, redirect to the login page

    if (!isAuthenticated) {
        return <Navigate to='/signin' />
    }

    return element
}

export default ProtectedRoute