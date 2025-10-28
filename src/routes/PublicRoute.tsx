import { useContext, useEffect, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { authenticated } = useContext(UserContext);

  useEffect(() => {}, []);

  if (authenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
