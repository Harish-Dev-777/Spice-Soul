import React, { useRef } from "react";
import "../../Styles/GoogleMap.css";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useGSAP(() => {
    gsap.from(mapRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // Restaurant location coordinates (Chennai, India - example)
  // Replace with your actual restaurant coordinates
  const restaurantLocation = {
    lat: 13.0827,
    lng: 80.2707,
    address: "123 Flavor Street, Culinary Avenue, Chennai, India",
  };

  // Google Maps embed URL with custom styling
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62204.20326830812!2d80.23066482167966!3d13.082680000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

  // Direct Google Maps link for "Get Directions"
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.lat},${restaurantLocation.lng}`;

  return (
    <section className="google-map-section" ref={mapRef}>
      <div className="map-container">
        <div className="map-header">
          <div className="map-title-wrapper">
            <FaMapMarkerAlt className="map-header-icon" />
            <div>
              <h2 className="map-title">Find Us Here</h2>
              <p className="map-subtitle">Visit us at our location</p>
            </div>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            <FaDirections />
            <span>Get Directions</span>
          </a>
        </div>

        <div className="map-wrapper">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
            className="map-iframe"
          ></iframe>
        </div>

        <div className="map-footer">
          <div className="map-address">
            <FaMapMarkerAlt className="address-icon" />
            <p>{restaurantLocation.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
