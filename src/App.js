import React from "react";
import Home from "./pages/home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/aboutus";
import Countries from "./pages/countries";
import Country from "./pages/country";

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/AboutUs" element={<AboutUs />}></Route>
    <Route path="/Countries" element={<Countries />}></Route>
    <Route path="/Country" element={<Country />}></Route>
    </Routes>
      </BrowserRouter>

  </div>
  )

};




  
