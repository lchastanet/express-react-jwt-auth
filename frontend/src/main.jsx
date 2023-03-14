import React from "react";
import ReactDOM from "react-dom/client";
import { CurrentUserContextProvider } from "./contexts/authContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </React.StrictMode>
);
