import "./styles.css";

import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import { createRoot } from "react-dom/client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { userAtom } from "./global/userAtom";

function Root() {
  const location = useLocation();
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
  }, [location]);

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
