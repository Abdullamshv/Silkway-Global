import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/heroSection/Home";
import Programs from "./components/programs/Programs";
import "./i18n"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs/:country" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
