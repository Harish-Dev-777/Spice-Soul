import { useRef } from "react";
import "../../Styles/SignatureDishes.css";
import signatureDishes from "../../Data/signatureDishes";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../common/OptimizedImage";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const SignatureDishes = () => {
  const navigate = useNavigate(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(".signature-header h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".signature-header p", {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".dish-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");

  }, []);

  return (
    <section className="signature-section" ref={containerRef}>
      <div className="signature-header">
        <h1>Our Signature Dishes</h1>
        <p>
          <q>Experience the taste of luxury with our chef’s finest creations</q>
        </p>
      </div>

      <div className="signature-grid">
        {signatureDishes.map((dish, index) => (
          <div 
            className="dish-card" 
            key={index}
          >
            <div className="dish-img-container">
              <OptimizedImage 
                src={dish.src} 
                alt={dish.name} 
                className="dish-img"
                loading="lazy"
              />
            </div>
            <div className="dish-info">
              <h2 className="dish-name">{dish.name}</h2>
              <p className="dish-category">{dish.category}</p>
              <p className="dish-description">{dish.description}</p>
              <div className="dish-meta">
                <span className="dish-price">{dish.price}</span>
                <span className="dish-rating">⭐ {dish.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="full-menu fade-up">
        <button className="menuBtn" onClick={() => navigate("/menu")}>
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default SignatureDishes;
