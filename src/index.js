import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Routing from './Routing'; Pro ? Cons ?
import { Vote, Top } from "./pages";
import { Routes, Route } from "react-router-dom";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Vote />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
