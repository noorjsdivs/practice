import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Rasel.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";
import Rasel from "./components/Rasel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="login" element={<Login />}></Route>
			<Route path="details" element={<Details />}></Route>
			<Route path="rasel" element={<Rasel />}></Route>
		</Routes>
	</BrowserRouter>
);
