/* eslint-disable */
import React from "react";
import slyles from "./index.css";
import Record from "./Record";
import AddRecord from "./FormAddRecord";
import LogIn from "./LogIn";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import AddRecordPage from "./pages/AddRecordPage";
import RecordsContextProvider from "./context/RecordsContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/add",
      element: <AddRecordPage />,
    },
  ]);

  return (
    <div>
      <RecordsContextProvider>
        <RouterProvider router={router} />
      </RecordsContextProvider>
    </div>
  );
}

export default App;
