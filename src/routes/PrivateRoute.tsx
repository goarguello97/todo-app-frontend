import { useContext, useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { authenticated, getAuth, setAuthenticated, loading } =
    useContext(UserContext);
  const [flag, setFlag] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // getAuth();
      setAuthenticated(true);
    }
    setFlag(true);
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return flag ? (
    authenticated ? (
      children
    ) : (
      <Navigate to="/login" replace />
    )
  ) : (
    <p>Cargando...</p>
  );
};

export default PrivateRoute;
