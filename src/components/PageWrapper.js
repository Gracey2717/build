// src/components/PageWrapper.js
import React from "react";

function PageWrapper({ title, subtitle, bgImage, children }) {
  return (
    <div>
      <section
        className="hero"
        style={{
          background: `url(${bgImage}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </section>

      {/* Page Content */}
      {children}
    </div>
  );
}

export default PageWrapper;
