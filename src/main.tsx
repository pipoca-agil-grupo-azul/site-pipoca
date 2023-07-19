import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext/userContext";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import HeaderProvider from "./Context/HeaderContext/HeaderContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </UserProvider>
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
