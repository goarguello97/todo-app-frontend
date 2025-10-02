import { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";

export const UserContext = createContext({});

export function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [successRegister, setSuccessRegister] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const login = async (values: any) => {
    try {
      setLoading(true);

      const { data } = await axiosConfig.post("/login", values);

      setUser(data.user);
      setToken(data.token);
      setAuthenticated(true);
      setLoading(false);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error: any) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }

      setUser(null);
      setToken(null);
      setAuthenticated(false);
      setError({ message: error.data.message });
    }
  };

  const getAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosConfig.defaults.headers.common["authorization"] = token;
    } else {
      delete axiosConfig.defaults.headers.common["authorization"];
    }
    try {
      setLoading(true);
      const response = await axiosConfig.get("/users/auth");
      const data = response.data;
      setUser(data);
      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
      setToken(null);
      setLoading(false);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      console.log("Error. Motivo: Falla en la autenticación");
      navigate("/");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    setLoading(false);
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    navigate("/");
  };

  const register = async (values: any) => {
    try {
      const userNew = await axiosConfig.post("/users", values);
      if (userNew.status === 201) {
        setSuccessRegister({
          message:
            "Usuario creado, deberá ser habilitado por un Administrador para acceder.  \n Será redirigido al inicio.",
        });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error: any) {
      setError({ message: error.data.errors[0].msg });
    }
  };

  return (
    <UserContext.Provider value={loading}>{children}</UserContext.Provider>
  );
}
