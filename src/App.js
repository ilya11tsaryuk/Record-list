import React, { useState } from "react";
import slyles from "./slyle.css";
import Record from "./record";
import AddRecord from "./AddRecord";
import LogIn from "./LogIn";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);

  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
