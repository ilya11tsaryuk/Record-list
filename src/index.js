import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./routes/root";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}

    <App />
  </React.StrictMode>
);
