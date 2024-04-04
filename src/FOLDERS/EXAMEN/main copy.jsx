import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Students from "./EXAMEN/PAGES/Students/Students";
import Exercices from "./EXAMEN/PAGES/Exercices/Exercices";
import Contact from "./EXAMEN/PAGES/Contact/Contact";
import Student from "./EXAMEN/Conponents/Students/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/students/",
    element: <Students></Students>,
  },
  {
    path: "/student/:id",
    element: <Student></Student>,
  },
  {
    path: "/exercices",
    element: <Exercices></Exercices>,
  },
  {
    path: "/constact",
    element: <Contact></Contact>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
