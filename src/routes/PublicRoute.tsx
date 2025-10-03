import { useContext, useEffect, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { authenticated, getAuth, setAuthenticated, loading } =
    useContext(UserContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  if (authenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
