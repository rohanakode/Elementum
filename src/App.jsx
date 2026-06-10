import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
