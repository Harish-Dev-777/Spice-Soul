import { useEffect, useRef } from "react";
import "../../Styles/Testimonials.css";
import testimonialsData from "../../Data/testimonialsData";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollSpeed = 1.5; // reduced for smoother scroll
    let direction = 1; // 1 = right, -1 = left

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed * direction;

        // Reverse direction smoothly instead of resetting
        if (container.scrollLeft <= 0) {
          direction = 1;
        } else if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 1
        ) {
          direction = -1;
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
            <div style={{ minWidth: "40px" }} />
            {testimonialsData.concat(testimonialsData).map((testimonial, i) => (
              <div className="testimonial-card" key={i}>
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
