import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "../context/context-registerUser/accessUser";

export default function ProtectedRoute({ children }) {
    const { isAuth } = useContext(AuthUser);
    if (!isAuth) return <Navigate to='/login'></Navigate>
    return children ? children : <Outlet></Outlet>
}

