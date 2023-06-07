import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Pet from './Pet';
import SearchParams from "./SearchParams";
const App = () => {
  return (
       <div>
    <h1>adopt me</h1>
    <SearchParams />
  </div>
    );

};




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
