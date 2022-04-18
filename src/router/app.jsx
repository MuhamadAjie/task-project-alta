import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing-page";
import Home from "../pages/home";
import City from "../pages/city";
import Skill from "../pages/skill";
import Villain from "../pages/villain";
import ErrorPage from "../components/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="city/:id" element={<City />} />
        <Route path="skill/:id" element={<Skill />} />
        <Route path="villain" element={<Villain />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
