import React from "react";
import ReactDOM from "react-dom/client";
import "@/style/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
