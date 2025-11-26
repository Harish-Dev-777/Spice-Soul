import React from "react";
import chefsData from "../../Data/chefsData";
import OptimizedImage from "../common/OptimizedImage";
import { FaQuoteLeft } from "react-icons/fa";
import "../../Styles/ChefsSection.css";

const ChefsSection = () => {
  return (
    <section className="chefs-section-wrapper">
      <div className="chefs-intro">
        <h2>Meet The Masters</h2>
        <p>The culinary visionaries behind every exquisite dish.</p>
      </div>

      <div className="chefs-grid">
        {chefsData.map((chef, index) => (
          <div key={index} className="chef-card">
            <div className="chef-card-inner">
              <div className="chef-image-container">
                <OptimizedImage
                  src={chef.image}
                  alt={chef.name}
                  className="chef-image"
                />
                <div className="chef-overlay"></div>
              </div>
              <div className="chef-content">
                <FaQuoteLeft className="quote-icon" />
                <h3>{chef.name}</h3>
                <span className="chef-role">{chef.title}</span>
                <p className="chef-quote">"{chef.quote}"</p>
                <div className="chef-tags">
                  <span>{chef.specialty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsSection;
