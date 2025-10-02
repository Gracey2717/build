// src/pages/About.jsx
import React from "react";
import Aboutimg from '../Assets/construction-site-silhouettes.jpg';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            With over 20 years of experience, we are dedicated to delivering
            world-class construction and civil engineering projects across
            Nigeria. Our team of experts combines innovation, integrity, and
            quality workmanship to bring every client’s vision to life.
          </p>

          <h3>Our Core Values</h3>
          <ul>
            <li>✔ Excellence in every project</li>
            <li>✔ Integrity and transparency</li>
            <li>✔ Safety first, always</li>
            <li>✔ Innovation for modern solutions</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <img
            src={Aboutimg}
            alt="Construction project"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
