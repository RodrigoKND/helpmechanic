import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthMechanic } from "../context/context-registerUser/accessMechanic";

export default function ProtectedRouteMechanic({ children }) {
    const { isAuthMechanic } = useContext(AuthMechanic);
    if (!isAuthMechanic) return <Navigate to='/mecanico'></Navigate>
    return children ? children : <Outlet></Outlet>
}