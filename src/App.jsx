import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Pet from './Pet';
import SearchParams from "./SearchParams";
const App = () => {
  return (
       <div>
    <h1>adopt me</h1>
    <Pet name="Luna" animal="dog" breed="kantri" />
    <Pet name="Pepper" animal="bird" breed="cockatiel" />
    <Pet name="cookie" animal="cat" breed="shitxhu" />
  </div>
    );

};




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
