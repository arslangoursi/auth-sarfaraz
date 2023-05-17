import "./styles.css";

import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import Dashboard from "./screens/Dashboard";
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
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [user]);
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
  <RouterProvider router={router} />
);
