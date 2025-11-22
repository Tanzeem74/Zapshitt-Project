import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Covarage from "../pages/Coverage/Covarage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authPage/Login";
import Register from "../pages/authPage/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/rider',
        element: <PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>
      },
      {
        path: '/covarge',
        Component: Covarage,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      }
    ]
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  }
]);