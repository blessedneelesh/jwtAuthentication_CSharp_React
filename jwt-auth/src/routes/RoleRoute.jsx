import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const RoleRoute = () => {
  const { token, roles } = useAuth();

  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  if (token && roles.indexOf("Admin") === -1) {
    // role not authorised so redirect to home page
    return <Navigate to="/access-denied" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
