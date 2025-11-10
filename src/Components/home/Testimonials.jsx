import { useEffect, useRef } from "react";
import "../../Styles/Testimonials.css";
import testimonialsData from "../../Data/testimonialsData";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    let scrollSpeed = 2;

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationRef.current);
    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h1>What Our Guests Say</h1>
        <p>
          Real stories from those who’ve savored the <span>Spice & Soul</span>{" "}
          experience.
        </p>
      </div>

      <div className="testimonials-slider" ref={scrollRef}>
        <div className="testimonial-card-container">
          <div className="testimonial-cards">
            {testimonialsData
              .concat(testimonialsData)
              .map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-rating">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-review">“{testimonial.review}”</p>
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-meta">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
