import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

import Navbar from "../pages/UI/Navbar";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Weather from "../pages/Weather";
import Admin from "../pages/Admin";
import { RoleRoute } from "./RoleRoute";
import AccessDenied from "../pages/AccessDenied";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <Services />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "/weather",
          element: <Weather />,
        },
        {
          path: "/access-denied",
          element: <AccessDenied />,
        },
        {
          path: "/logout",
          element: <div>logout</div>,
        },
      ],
    },
    {
      path: "/",
      element: <RoleRoute />,
      // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default Routes;
