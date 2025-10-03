import { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";

type LoginValues = { email: string; password: string }; // tipa los valores de login

type UserContextType = {
  login: (values: LoginValues) => Promise<void>;
  logout: () => void;
  getAuth: () => Promise<void>;
  register: (values: any) => Promise<void>;
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  loading: boolean;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

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

      const { data } = await axiosConfig.post("/auth/login", values);
      setUser(data.data.user);
      setToken(data.data.token);
      setAuthenticated(true);
      setLoading(false);
      localStorage.setItem("token", data.data.token);
      navigate("/");
    } catch (error: any) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }

      setUser(null);
      setToken(null);
      setAuthenticated(false);
      setError({ message: error.response.data.message });
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
    const { password2, ...data } = values;
    try {
      const response = await axiosConfig.post("/users", data);
      if (data.status === 201) {
        setSuccessRegister({
          message: response.data.message,
        });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error: any) {
      setError({ message: error.response.data.errors[0].message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        getAuth,
        register,
        authenticated,
        setAuthenticated,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
