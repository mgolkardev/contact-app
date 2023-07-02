import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "common/utils/react-query-client";
import { MainLayout } from "common/components";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>{/* TODO: add router */}</MainLayout>
    </QueryClientProvider>
  );
}

export default App;
