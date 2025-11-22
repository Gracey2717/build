// src/pages/Projects.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Residential Duplex",
      description:
        "A modern duplex designed and constructed for luxury living.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      details:
        "This duplex was designed with cutting-edge architecture, solar power integration, and energy efficiency in mind. Completed in 2024.",
    },
    {
      id: 2,
      title: "Commercial Complex",
      description:
        "A multi-story office complex built to meet international standards.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      details:
        "This project provided workspace solutions for businesses with modern amenities, elevators, and eco-friendly designs.",
    },
    {
      id: 3,
      title: "Luxury Apartments",
      description:
        "High-rise apartment block with state-of-the-art facilities.",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?w=800",
      details:
        "The apartments are designed with modern architecture, gym facilities, and 24/7 security.",
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      description: "Large-scale construction for logistics and storage.",
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad1?w=800",
      details:
        "Built with reinforced steel frames and fire-safety systems, serving multiple companies for logistics.",
    },
    {
      id: 5,
      title: "University Campus Block",
      description: "Educational facility designed for modern learning needs.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      details:
        "This block includes lecture halls, laboratories, and digital classrooms for modern learning.",
    },
    {
      id: 6,
      title: "And Many More...",
      description: "Various residential, commercial, and industrial projects.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      details:
        "This block includes lecture halls, laboratories, and digital classrooms for modern learning.",
    },
  ];

  // State to control how many projects are shown
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Our Projects</h2>
        <p>
          Explore some of our completed works that showcase our expertise and
          commitment to quality.
        </p>

        <div className="project-grid">
          {allProjects.slice(0, visibleCount).map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`} className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More button */}
        {visibleCount < allProjects.length && (
          <button className="see-more-btn" onClick={handleSeeMore}>
            See More Projects
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
