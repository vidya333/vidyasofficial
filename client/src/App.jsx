import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Services from "./components/Services";
import GitHubStats from "./components/GitHubStats";
import Life from "./components/Life";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Projects from "./components/Projects";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects/>
      <GitHubStats />
      <Services />
      <Testimonials />
      <Life />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
