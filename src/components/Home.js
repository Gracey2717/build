// src/components/Home.js
import React from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <div>
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Building with Excellence & Integrity</h1>
          <p>Over 20 years of delivering quality projects across Nigeria.</p>
          <div className="hero-buttons">
            <button className="btn primary">View Our Projects</button>
            <button className="btn secondary">Request a Quote</button>
          </div>
        </div>
      </div>
    </section>
    <About />
      <Services />
      <Projects />
      <Contact />

    </div>
  );
}

export default Home;
