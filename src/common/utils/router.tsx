import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Contacts</div>,
  },
  {
    path: "/contact/:id",
    element: <div>Single Contact</div>,
  },
]);