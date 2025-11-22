// src/pages/Contact.jsx
import React from "react";

function Contact() {
  // Replace with your dad's real details
  const phoneNumber = "2348035531793"; 
  const emailAddress = "pjandcrews@gmail.com";

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Get in touch with us for inquiries, collaborations, or project
          consultations.
        </p>

        <div className="contact-grid">
          {/* Contact Options */}
          <div className="contact-options">
            <button
              className="btn whatsapp"
              onClick={() =>
                window.open(`https://wa.me/${phoneNumber}`, "_blank")
              }
            >
              Chat on WhatsApp
            </button>

            <button
              className="btn email"
              onClick={() =>
                (window.location.href = `mailto:${emailAddress}`)
              }
            >
              Send Email
            </button>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>88 Ojuemuren Road,, Odogunyan Lagos, Ikorodu</p>
            <p>Email: {emailAddress}</p>
            <p>Phone: +{phoneNumber}</p>

            <h3>Working Hours</h3>
            <p>Mon – Fri: 9:00am – 6:00pm</p>
            <p>Sat: 10:00am – 4:00pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="map">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63403.97329685211!2d3.443411221679691!3d6.6780700000000195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be942e730985d%3A0x83d3a38ae7dfeba1!2sBestcrew%20Property%20Ltd!5e0!3m2!1sen!2sng!4v1763791217434!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
