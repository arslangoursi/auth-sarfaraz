import "./styles.css";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./screens/Login";
import { createRoot } from "react-dom/client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { userAtom } from "./global/userAtom";

function Root() {
  const navigate = useNavigate();
  const [user] = useAtom(userAtom);

  useEffect(() => {
    if (user) {
      navigate("/dashboard", {
        replace: true,
      });
    } else {
      navigate("/", {
        replace: true,
      });
    }
  }, []);

  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="531536906225-57bss0u2ho8toi258m8rq4etvi1g0v4r.apps.googleusercontent.com">
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
