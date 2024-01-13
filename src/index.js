import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Layout } from "./Layout";
import { AuthPage } from "./Auth";
import "./styles/global.scss";
import "./styles/fonts.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="auth" element={<AuthPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} fallbackElement={<div>Loading</div>} /> */}
  </React.StrictMode>
);

