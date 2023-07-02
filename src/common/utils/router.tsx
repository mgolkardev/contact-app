import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ContactsModule } from "../../modules/contacts/contacts.module";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ContactsModule />,
  },
  {
    path: "/contact/:id",
    element: <div>Single Contact</div>,
  },
]);
