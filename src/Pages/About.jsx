import { useNavigate } from "react-router-dom";
import aboutImg from "/AboutImage.png";
import SEO from "../Components/common/SEO";

import useGSAP from "../hooks/useGSAP";
import gsap from "gsap";
import { useRef } from "react";
import "../Styles/About.css";

const About = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.from(".about-content h2", { y: 30, opacity: 0, duration: 0.8 })
      .from(".about-content h3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".about-text", { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6")
      .from(".explore-btn", { y: 20, opacity: 0, duration: 0.8 }, "-=0.4");
      
    gsap.from(imgRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        scrub: 1
      }
    });

  }, []);

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Spice & Soul - where culinary art meets heartfelt passion. Discover our story, tradition, and commitment to authentic cuisine with a modern twist."
        keywords="about us, restaurant story, culinary tradition, authentic cuisine, indian restaurant, chef team"
        url="https://spice-and-soul.vercel.app/about"
      />
      <section id="about" className="about-section" ref={containerRef}>
        <div className="about-container">
          {/* Left Content */}
          <div 
            className="about-content"
          >
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
          <div className="about-image-wrapper">
            <div className="about-image" ref={imgRef}>
              <img src={aboutImg} alt="About Spice & Soul" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
