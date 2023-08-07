import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GoogleProvider from "./Context/contexts/GoogleContext/GoogleContext";
import HeaderProvider from "./Context/contexts/HeaderContext/HeaderContext";
import { UserProvider } from "./Context/contexts/UserContext/userContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleProvider>
        <HeaderProvider>
          <UserProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </UserProvider>
        </HeaderProvider>
      </GoogleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
