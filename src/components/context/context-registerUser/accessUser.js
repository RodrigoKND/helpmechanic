import { createContext, useState } from "react";

export const AuthUser = createContext();

export default function ContextUser({ children }) {
    const [isAuth, setisAuth] = useState(false);
    return (
        <AuthUser.Provider value={{isAuth, setisAuth}}>
            {children}
        </AuthUser.Provider>
    );
}