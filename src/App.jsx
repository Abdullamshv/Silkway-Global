import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import  About  from "./pages/About";
import  Home  from "./pages/Home";
import  Blog  from "./pages/Blog";
import  Contact  from "./pages/Contact";
import Programs from "./pages/Programs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
