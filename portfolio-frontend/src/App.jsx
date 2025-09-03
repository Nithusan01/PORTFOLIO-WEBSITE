import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
       <Header /> 
      <main>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Contact/>} />
          <Route path="/contact" element={<Contact/>} />  
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
