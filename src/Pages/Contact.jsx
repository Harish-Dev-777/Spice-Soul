import React from "react";
import "../Styles/Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import BookTable from "../Components/contact/BookTable";
import SEO from "../Components/common/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Spice & Soul. Reserve your table, ask questions, or share feedback. We're here to make your dining experience memorable."
        keywords="contact, reservations, book table, restaurant contact, location, phone number, email"
        url="https://spice-and-soul.vercel.app/contact"
      />
      <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="contact-info">
          <h2 className="section-title">Contact Us</h2>
          <h3 className="contact-subtitle">We’d Love to Hear From You!</h3>
          <p className="contact-text">
            Have a question, feedback, or want to reserve your favorite spot?
            Reach out — our friendly team will make sure your visit to{" "}
            <span className="highlight">Spice & Soul</span> is absolutely
            memorable.
          </p>

          <div className="info-items">
            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Flavor Street, Culinary Avenue, Chennai, India</p>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <p>+91 98765 43210</p>
            </div>

            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <p>contact@spiceandsoul.com</p>
            </div>

            <div className="info-box">
              <FaClock className="info-icon" />
              <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT FORM ---------- */}
        <BookTable />
      </div>
    </section>
    </>
  );
};

export default Contact;
