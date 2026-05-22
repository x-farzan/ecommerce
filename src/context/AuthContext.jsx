import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return {
        success: false,
        message: "Email already exists",
      };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", JSON.stringify(newUser.email));
    setUser({ email });

    return {
      success: true,
    };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
    localStorage.setItem(
      "currentUserEmail",
      JSON.stringify(existingUser.email),
    );
    setUser({ email });

    return {
      success: true,
    };
  };

  const logout = () => {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
