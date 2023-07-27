import React from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

import SearchParams from "./SearchParams";
import Details from "./Details";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <header>
         <Link to="/">adopt me</Link>
      </header>
     
        
       
        <Routes>
          <Route path="/detail/:id" element={<Details/>}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

};




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
