import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGSAP from "../../hooks/useGSAP";
import "../../Styles/HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const navigate = useNavigate();
  
  // Refs for animation targets
  const titleRef = useRef(null);
  const quoteRef = useRef(null);
  const btnsRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Premium GSAP Animations
  useGSAP(() => {
    // Kill any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      delay: 0.3
    });

    // Sequential entrance animations
    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(
      quoteRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.8"
    )
    .fromTo(
      btnsRef.current.children,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.7,
        stagger: 0.15
      },
      "-=0.5"
    )
    .fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: -10 },
      { opacity: 0.7, y: 0, duration: 0.8 },
      "-=0.3"
    );

    // Parallax Background - Only run after component mount
    const parallaxTrigger = gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        invalidateOnRefresh: true
      }
    });

    // Scroll Indicator Animation
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut"
    });

    // Cleanup
    return () => {
      tl.kill();
      parallaxTrigger.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="hero-section" ref={containerRef}>
      {/* Background with Parallax */}
      <div className="hero-bg" ref={bgRef}>
        <div className="hero-bg-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        {/* Main Title */}
        <h1 className="hero-title" ref={titleRef}>
          Spice <span className="title-accent">&</span> Soul
        </h1>

        {/* Quote */}
        <p className="hero-quote" ref={quoteRef}>
          "Where Every Bite Tells a Story"
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons" ref={btnsRef}>
          <button className="btn-primary" onClick={() => navigate("/menu")}>
            <span>Explore Menu</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => navigate("/contact")}>
            <span>Reserve Table</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <span className="scroll-text">Scroll to Explore</span>
        <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
