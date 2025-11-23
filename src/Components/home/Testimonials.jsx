import { useRef } from "react";
import "../../Styles/Testimonials.css";
import testimonialsData from "../../Data/testimonialsData";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const Testimonials = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(".testimonials-header h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".testimonials-header p", {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.6");

    // Infinite Scroll Animation
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2; // Since we duplicated data
    
    gsap.to(slider, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
    
    // Hover pause
    slider.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
    slider.addEventListener("mouseleave", () => gsap.globalTimeline.play());

  }, []);

  return (
    <section className="testimonials-section" ref={containerRef}>
      <div className="testimonials-header">
        <h1>What Our Guests Say</h1>
        <p>
          Real stories from those who’ve savored the <span>Spice & Soul</span>{" "}
          experience.
        </p>
      </div>

      <div className="testimonials-slider-wrapper">
        <div className="testimonial-cards" ref={sliderRef}>
          {/* Triple the data for smoother infinite scroll loop */}
          {testimonialsData.concat(testimonialsData).concat(testimonialsData).map((testimonial, i) => (
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
    </section>
  );
};

export default Testimonials;
