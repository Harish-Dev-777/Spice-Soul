import React, { useRef } from "react";
import { navLinks, socialLinks } from "../../Data/footerData";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "../../Styles/Footer.css";
import { NavLink } from "react-router-dom";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

// Map icon names to actual React components
const iconMap = {
  FaInstagram: FaInstagram,
  FaFacebookF: FaFacebookF,
  FaTwitter: FaTwitter,
  FaYoutube: FaYoutube,
};

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      }
    });

    tl.from(".footer-brand", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(".footer-nav", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".footer-book", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".footer-bottom", { opacity: 0, duration: 1 }, "-=0.4");

  }, []);

  return (
    <footer className="footer-section" ref={footerRef}>
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
                <NavLink 
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now + Socials */}
        <div className="footer-book">
          <h3>Reserve a Table</h3>
          <p>Experience culinary artistry at its finest.</p>
          <NavLink to="/contact" className="book-btn">
            Book Now
          </NavLink>

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
        <p>
          &copy;{new Date().getFullYear()} Spice & Soul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
