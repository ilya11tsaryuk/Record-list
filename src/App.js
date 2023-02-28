/* eslint-disable */
import React from "react";
import "./index.css";
// import Record from "./Record";
// import AddRecord from "./FormAddRecord";
// import LogIn from "./LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import AddRecordPage from "./pages/AddRecordPage";
import RecordsContextProvider from "./context/RecordsContext";
import UpdatePage from "./pages/UpdatePage";

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
    {
      path: "/note/:id",
      element: <UpdatePage />,
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
