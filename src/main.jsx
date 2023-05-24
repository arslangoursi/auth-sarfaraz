import "./styles.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./screens/Login";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="531536906225-57bss0u2ho8toi258m8rq4etvi1g0v4r.apps.googleusercontent.com">
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
