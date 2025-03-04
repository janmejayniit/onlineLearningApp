import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const authUser = localStorage.getItem('id')
    return authUser ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoute;