import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Covarage from "../pages/Coverage/Covarage";

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
        path: '/covarge',
        Component: Covarage,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      }
    ]
  },
]);