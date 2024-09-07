import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AppMetaData from "./pages/AppMetaData"
import { AppUserDetailsContextProvider } from "./context/AppUserDetailsContext";
import { MetaDataContextProvider } from "./context/MetaDataContext"

import AppUserDataPage from "./pages/AppUserDataPage"

const router = createBrowserRouter([
  {
    path: "/metadata",
    element: <MetaDataContextProvider><AppMetaData /></MetaDataContextProvider>,
  },
  {
    path: "/userdata",
    element: <AppUserDetailsContextProvider><AppUserDataPage /></AppUserDetailsContextProvider>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);