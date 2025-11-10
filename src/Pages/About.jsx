import { useNavigate } from "react-router-dom";
import aboutImg from "/AboutImage.png";
import "../Styles/About.css";

const About = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <h3 className="about-subtitle">A Taste of Tradition & Passion</h3>

          <p className="about-text">
            Welcome to <span className="highlight">Spice & Soul</span>, a place
            where culinary art meets heartfelt passion. Every recipe here is
            crafted to bring people closer through the shared joy of food —
            blending authentic Indian spices with modern cooking finesse.
          </p>

          <p className="about-text">
            Our chefs carefully curate each dish to preserve the soul of Indian
            tradition while giving it a modern twist. From sizzling starters to
            rich curries and decadent desserts, we promise a dining experience
            that celebrates both flavor and culture.
          </p>

          <p className="about-text">
            At <span className="highlight">Spice & Soul</span>, it’s not just
            about food — it’s about the moments created around it. Whether it’s
            a cozy dinner, a family celebration, or a casual evening with
            friends, we’re here to make every visit memorable.
          </p>

          <button className="explore-btn" onClick={handleExploreClick}>
            Explore Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Spice & Soul" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
