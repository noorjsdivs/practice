import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";
import Rasel from "./components/Rasel";
import Habib from "./components/Habib";
import Shahariar from "./components/Shahariar";
import Ratul from "./components/Ratul";
import Nahid from "./components/Nahid";
import Sarjana from "./components/Sarjana";
import Popover from "./components/master/Popover";
import Learnmore from "./components/master/Learnmore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="details" element={<Details />}></Route>
      <Route path="rasel" element={<Rasel />}></Route>
      <Route path="habib" element={<Habib />}></Route>
      <Route path="shahariar" element={<Shahariar />}></Route>
      <Route path="ratul" element={<Ratul />}></Route>
      <Route path="nahid" element={<Nahid />}></Route>
      <Route path="sarjana" element={<Sarjana />}></Route>
      <Route path="popover" element={<Popover />}></Route>
      <Route path="learnmore" element={<Learnmore />}></Route>
    </Routes>
  </BrowserRouter>
);
