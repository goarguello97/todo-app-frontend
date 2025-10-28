import { useContext, useEffect, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { authenticated, loading } = useContext(UserContext);

  useEffect(() => {}, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
