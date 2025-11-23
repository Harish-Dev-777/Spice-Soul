import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../Styles/ChefsHighlight.css";
import chefsData from "../../Data/chefsData";
import OptimizedImage from "../common/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

const ChefsHighlight = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    // Calculate total width to scroll
    // (Card width + gap) * number of cards - viewport width + padding
    // Approximate calculation, better to let GSAP handle it via "end"
    
    let ctx = gsap.context(() => {
      gsap.to(section, {
        x: () => -(section.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => "+=" + section.scrollWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="chefs-scroll-wrapper" ref={triggerRef}>
      <section className="chefs-highlight">
        <div className="chefs-intro">
          <h1>Meet Our <br /> Culinary Masters</h1>
          <p>Scroll to explore the team</p>
        </div>
        
        <div className="chefs-horizontal-track" ref={sectionRef}>
          {chefsData.map((chef, index) => (
            <div className="chef-card horizontal" key={index}>
              <div className="chef-img-container">
                <OptimizedImage src={chef.image} alt={chef.name} className="chef-img" />
                <div className="chef-experience">{chef.experience}</div>
              </div>

              <div className="chef-info">
                <h2 className="chef-name">{chef.name}</h2>
                <p className="chef-title">{chef.title}</p>
                <blockquote className="chef-quote">“{chef.quote}”</blockquote>
                <p className="chef-specialty">
                  <strong>Specialty:</strong> {chef.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefsHighlight;
