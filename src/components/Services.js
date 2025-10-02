// src/pages/Services.jsx
import React, { useState } from "react";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Building Construction",
      description:
        "High-quality construction services for residential, commercial, and industrial projects.",
      icon: "🏢",
    },
    {
      title: "Renovation & Maintenance",
      description:
        "Reliable renovation and maintenance solutions to keep your structures safe and modern.",
      icon: "🛠️",
    },
    {
      title: "Civil Engineering Design",
      description:
        "Innovative and sustainable designs tailored to meet client and community needs.",
      icon: "📐",
    },
    {
      title: "Project Management",
      description:
        "Efficient planning and execution to ensure projects are completed on time and within budget.",
      icon: "📊",
    },
    {
      title: "Road & Bridge Construction",
      description:
        "Durable infrastructure development including highways, bridges, and drainage systems.",
      icon: "🛤️",
    },
    {
      title: "Consulting Services",
      description:
        "Expert advice and strategies to optimize construction and engineering outcomes.",
      icon: "💼",
    },
  ];

  // Show only first 3 if not expanded
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p>
          We provide a wide range of professional construction and engineering
          services to meet the needs of clients across Nigeria.
        </p>

        <div className="service-cards">
          {visibleServices.map((service, index) => (
            <div key={index} className="card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* See More / See Less button */}
        <div className="see-more-container">
          <button
            className="see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
