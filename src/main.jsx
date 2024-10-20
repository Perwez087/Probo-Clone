import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
