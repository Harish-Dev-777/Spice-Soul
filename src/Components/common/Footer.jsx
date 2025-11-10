import React from "react";
import { navLinks, socialLinks } from "../../Data/footerData";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "../../Styles/Footer.css";

// Map icon names to actual React components
const iconMap = {
  FaInstagram: FaInstagram,
  FaFacebookF: FaFacebookF,
  FaTwitter: FaTwitter,
  FaYoutube: FaYoutube,
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand + Quote */}
        <div className="footer-brand">
          <h2>Spice & Soul</h2>
          <p>
            “A journey of flavors crafted with passion, served with warmth.”
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now + Socials */}
        <div className="footer-book">
          <h3>Reserve a Table</h3>
          <p>Experience culinary artistry at its finest.</p>
          <a href="/book" className="book-btn">
            Book Now
          </a>

          <div className="social-icons">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Spice & Soul. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
