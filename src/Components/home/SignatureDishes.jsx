import { useRef } from "react";
import "../../Styles/SignatureDishes.css";
import signatureDishes from "../../Data/signatureDishes";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../common/OptimizedImage";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const SignatureDishes = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Trigger earlier
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".signature-header h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".signature-header p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".dish-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        ".full-menu",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
  }, []);

  return (
    <section className="signature-section" ref={containerRef}>
      <div className="signature-header">
        <h1>Our Signature Dishes</h1>
        <p>"Experience the taste of luxury with our chef’s finest creations"</p>
      </div>

      <div className="signature-grid">
        {signatureDishes.map((dish, index) => (
          <div className="dish-card" key={index}>
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
              <span className="dish-category">{dish.category}</span>
              <p className="dish-description">{dish.description}</p>
              <div className="dish-meta">
                <span className="dish-price">{dish.price}</span>
                <span className="dish-rating">⭐ {dish.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="full-menu">
        <button className="menuBtn" onClick={() => navigate("/menu")}>
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default SignatureDishes;
