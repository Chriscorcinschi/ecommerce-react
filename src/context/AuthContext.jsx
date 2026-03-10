import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
}

export default function AuthProvider({ children }) {
   const [user, setUser] = useState(() => {
      const email = localStorage.getItem("currentUserEmail");
      return email ? { email } : null;
   });

   function signUp(email, password) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.find((u) => u.email === email)) {
         return { success: false, error: "Email already exists" };
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUserEmail", email);
      setUser({ email });

      return { success: true };
   }

   function login(email, password) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const found = users.find(
         (u) => u.email === email && u.password === password,
      );

      if (!found) {
         return { success: false, error: "Invalid email or password" };
      }

      localStorage.setItem("currentUserEmail", email);
      setUser({ email });

      return { success: true };
   }

   function logout() {
      localStorage.removeItem("currentUserEmail");
      setUser(null);
   }

   return (
      <AuthContext.Provider value={{ user, signUp, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}
