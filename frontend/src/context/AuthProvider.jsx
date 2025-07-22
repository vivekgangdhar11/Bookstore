  import React, { createContext, useContext, useState } from "react";

 export const AuthContext = createContext();

export default function AuthProvider({ children }={}) {
const initialAuthUser = localStorage.getItem("user"); // ✅ Correct key here
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
