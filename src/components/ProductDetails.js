// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Residential Duplex",
      details:
        "This duplex was designed with cutting-edge architecture, solar power integration, and energy efficiency in mind. Completed in 2024.",
    },
    2: {
      title: "Commercial Complex",
      details:
        "This project provided workspace solutions for businesses with modern amenities, elevators, and eco-friendly designs.",
    },
    3: {
      title: "Road Development",
      details:
        "A 50km road construction improving trade between local communities and reducing travel time significantly.",
    },
    4: {
      title: "Luxury Apartments",
      details:
        "The apartments are designed with modern architecture, gym facilities, and 24/7 security.",
    },
    5: {
      title: "Water Treatment Plant",
      details:
        "This project ensures access to clean drinking water using sustainable filtration technologies.",
    },
    6: {
      title: "Industrial Warehouse",
      details:
        "Built with reinforced steel frames and fire-safety systems, serving multiple companies for logistics.",
    },
    7: {
      title: "University Campus Block",
      details:
        "This block includes lecture halls, laboratories, and digital classrooms for modern learning.",
    },
  };

  const project = projects[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="project-details">
      <div className="details-container">
        <h2>{project.title}</h2>
        <p>{project.details}</p>

        {/* Back button */}
        <Link to="/projects" className="back-btn">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetails;
