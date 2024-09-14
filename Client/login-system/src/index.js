import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoggedInUserScreen from "./Components/LoggedInUserScreen";
// import LoginForm from "./Components/LoginForm";
import NormalUserLoggedInScreen from "./Components/NormalUserLoggedInScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin/logged-in",
    element: <LoggedInUserScreen />,
  },
  {
    path: "user/logged-in",
    element: <NormalUserLoggedInScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
