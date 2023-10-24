import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jwt-decode";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;

      const { isAdmin } = jwt(token);

      const adminPages = isAdmin == 1;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)
      localStorage.setItem("@foodexplorer:isAdmin", adminPages)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token, adminPages });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("It was not possible do enter.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:isAdmin");

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')
    const adminPages = localStorage.getItem("@foodexplorer:isAdmin");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token, 
        user: JSON.parse(user),
        adminPages
      })
    }
  }, [])

  return (
		<AuthContext.Provider value={{ 
      signIn,
      signOut, 
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth }