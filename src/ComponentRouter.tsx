import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/common/Footer";

function ComponentRouter() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default ComponentRouter;