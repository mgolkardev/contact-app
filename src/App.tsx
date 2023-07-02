import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/utils/react-query-client";
import { MainLayout } from "./common/components";
import { RouterProvider } from "react-router-dom";
import { routes } from "./common/utils/router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <RouterProvider router={routes} />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
