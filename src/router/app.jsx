import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import City from "../pages/city";
import Skill from "../pages/skill";
import Villain from "../pages/villain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="city" element={<City />} />
        <Route path="skill" element={<Skill />} />
        <Route path="villain" element={<Villain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
