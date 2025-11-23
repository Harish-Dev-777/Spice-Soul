import React, { useRef } from "react";
import chefsData from "../../Data/chefsData";
import { FaQuoteLeft } from "react-icons/fa";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";
import "../../Styles/ChefsSection.css";

const ChefsSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".chef-card");

    // Use a function to calculate scroll length dynamically
    // We want to scroll the entire width of the container minus one viewport width
    // This ensures the last card stops exactly in the viewport
    const getScrollLength = () => sectionRef.current.scrollWidth - window.innerWidth;

    gsap.to(sectionRef.current, {
      x: () => -getScrollLength(),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        // Calculate end based on the scroll length to ensure 1:1 mapping or slower
        end: () => `+=${getScrollLength() + window.innerWidth}`, 
        scrub: 0.5, // Reduced for snappier, more responsive feel
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Recalculate on resize
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.1, max: 0.3 }, // Faster snap for better UX
          delay: 0,
          ease: "power2.inOut",
          inertia: false // Disable inertia for precise snapping
        },
        onEnter: () => gsap.to(".navbar", { y: "-100%", duration: 0.4, ease: "power2.inOut" }),
        onLeave: () => gsap.to(".navbar", { y: "0%", duration: 0.4, ease: "power2.inOut" }),
        onEnterBack: () => gsap.to(".navbar", { y: "-100%", duration: 0.4, ease: "power2.inOut" }),
        onLeaveBack: () => gsap.to(".navbar", { y: "0%", duration: 0.4, ease: "power2.inOut" }),
      }
    });

  }, []);

  return (
    <section className="chefs-section-wrapper" ref={triggerRef}>
      <div className="chefs-intro">
        <h2>Meet The Masters</h2>
        <p>The culinary visionaries behind every exquisite dish.</p>
      </div>
      
      <div className="chefs-horizontal-scroll" ref={sectionRef}>
        {chefsData.map((chef, index) => (
          <div key={index} className="chef-card">
            <div className="chef-card-inner">
              <div className="chef-image-container">
                <img src={chef.image} alt={chef.name} className="chef-image" loading="lazy" />
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
