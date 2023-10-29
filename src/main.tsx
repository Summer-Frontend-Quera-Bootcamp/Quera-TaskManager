import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Features/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
