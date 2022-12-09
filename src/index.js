import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FpjsProvider
    loadOptions={{
      apiKey: "s6wgiLTSndtJXYGnC5lc",
    }}
  >
    <App />
  </FpjsProvider>
);
