import { createContext, useState } from "react";

export const AuthMechanic = createContext();

export default function ContextMechanic({ children }) {
    const [isAuthMechanic, setIsAuthMechanic] = useState(false);
    return (
        <AuthMechanic.Provider value={{ isAuthMechanic, setIsAuthMechanic }}>
            {children}
        </AuthMechanic.Provider>
    );
}