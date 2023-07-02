import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ContactsModule } from "../../modules/contacts/contacts.module";
import { ContactModule } from "../../modules/contact/contact.module";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ContactsModule />,
  },
  {
    path: "/contact/:id",
    element: <ContactModule />,
  },
]);
