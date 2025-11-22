// src/pages/ProjectDetails.jsx
import { useParams } from "react-router-dom";
import React from "react";

function ProjectDetails() {
  const { id } = useParams();

  const allProjects = [
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 2,
      title: "Clean contemporary bungalow",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A 4-bedroom fully detached bungalow designed for a retired couple seeking accessibility, low maintenance, and long-term comfort.",
      clientNeed:
        "A home with wide hallways, fewer stairs, high ventilation, and simple modern finishes.",
      solution:
        "We developed a low-profile structure with open-plan interiors, wheelchair-friendly pathways, and heat-resistant roofing.",
      features: [
        "Anti-slip floor tiles",
        "Aluminum roofing",
        "Smart water storage system",
        "Cross-ventilated living area", 
        "Spacious outdoor sit-out", 
      ],
      timeline: "4 months",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
     
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },
    {
      id: 1,
      title: "Residential Duplex",
      banner: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      overview:
        "A high-end residential duplex designed for a young family seeking functionality, elegance, and long-term value.",
      clientNeed:
        "Client wanted a modern duplex with natural lighting, efficient ventilation, and a layout suitable for both privacy and social gatherings.",
      solution:
        "We provided full architectural design, structural engineering, electrical planning, interior layout, and landscaping.",
      features: [
        "Solar power integration",
        "Premium POP ceiling finish",
        "Italian marble flooring",
        "Automated lighting",
        "Energy-efficient windows",
      ],
      timeline: "6 months (Jan 2024 – June 2024)",
      budgetRange: "₦75M – ₦110M",
      results:
        "Client received a fully functional luxury duplex with increased property value and reduced energy consumption.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
      ],
    },

    // Add others later… (for now one sample)
  ];

  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-details">
      <img className="banner" src={project.banner} alt={project.title} />

      <h1>{project.title}</h1>

      <section>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section>
        <h2>Client Requirement</h2>
        <p>{project.clientNeed}</p>
      </section>

      <section>
        <h2>Our Solution</h2>
        <p>{project.solution}</p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          {project.features.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Project Timeline</h2>
        <p>{project.timeline}</p>
      </section>

      <section>
        <h2>Results</h2>
        <p>{project.results}</p>
      </section>

      <section className="gallery">
        <h2>Project Gallery</h2>
        <div className="images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Project view ${index + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
