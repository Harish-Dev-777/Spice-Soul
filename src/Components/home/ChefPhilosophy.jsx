import { useRef } from "react";
import OptimizedImage from "../common/OptimizedImage";
import chefImage from "../../assets/images/chef1.jpg";
import "../../Styles/ChefPhilosophy.css";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const ChefPhilosophy = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Parallax text effect
    tl.fromTo(".chef-content", 
      { y: 100, opacity: 0 },
      { y: -50, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Image reveal
    gsap.fromTo(".chef-image-wrapper",
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".chef-image-wrapper",
          start: "top 80%",
        }
      }
    );

  }, []);

  return (
    <section className="chef-section" ref={containerRef}>
      <div className="chef-container">
        <div className="chef-content">
          <h4 className="sub-heading">The Philosophy</h4>
          <h2 className="heading">
            Cooking is an act of <span className="highlight">Love</span>.
          </h2>
          <p className="description">
            "We believe that every dish tells a story. It starts with the soil,
            travels through the hands of our farmers, and finds its soul in our
            kitchen. We don't just cook food; we craft memories, one plate at a
            time."
          </p>
          <div className="signature">
            <p>Chef Harish</p>
            <span>Executive Chef</span>
          </div>
        </div>

        <div className="chef-image-wrapper">
          <div className="reveal-mask">
            <OptimizedImage
              src={chefImage}
              alt="Chef Harish cooking"
              className="chef-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefPhilosophy;
