import React, { useRef, useEffect } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import "../../Styles/GSAPTransition.css";

const GSAPTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial setup
    if (circleRef.current && overlayRef.current) {
      // Start hidden and small
      gsap.set(circleRef.current, {
        scale: 0,
        transformOrigin: "center center",
      });
      gsap.set(overlayRef.current, { visibility: "hidden" });
    }
  }, []);

  const onExit = (node) => {
    const overlay = overlayRef.current;
    const circle = circleRef.current;

    if (!overlay || !circle) return;

    const ctx = gsap.context(() => {
      gsap.set(overlay, { visibility: "visible", zIndex: 9999 });
      gsap.set(circle, { scale: 0 });

      // Smooth Bubble Expansion
      const tl = gsap.timeline();

      tl.to(circle, {
        scale: 1.5, // Expand to cover screen
        duration: 0.5, // Faster
        ease: "power3.inOut",
      });

      // Animate content out
      gsap.to(node, {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.5, // Faster
        ease: "power3.inOut",
      });
    });

    return () => ctx.revert();
  };

  const onEnter = (node) => {
    const overlay = overlayRef.current;
    const circle = circleRef.current;

    if (!overlay || !circle) return;

    const ctx = gsap.context(() => {
      gsap.set(overlay, { visibility: "visible" });
      gsap.set(circle, { scale: 1.5 }); // Full coverage

      // Prepare new content
      gsap.set(node, { scale: 1.1, autoAlpha: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { visibility: "hidden" });
          gsap.set(circle, { scale: 0 });
          gsap.set(node, { autoAlpha: 1, scale: 1 });
        },
      });

      // Smooth Bubble Contraction (Shrink away)
      tl.to(circle, {
        scale: 0,
        duration: 0.5, // Faster
        ease: "power3.inOut",
        delay: 0,
      });

      // Animate content in
      gsap.to(node, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.5, // Faster
        ease: "power3.out",
        delay: 0.1,
      });
    });

    return () => ctx.revert();
  };

  return (
    <>
      <svg
        ref={overlayRef}
        className="transition-overlay"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Simple Circle for smooth expansion */}
        <circle ref={circleRef} cx="50" cy="50" r="50" fill="var(--accent)" />
      </svg>

      <SwitchTransition mode="out-in">
        <Transition
          key={location.pathname}
          nodeRef={contentRef}
          timeout={800} // Reduced timeout
          onExit={onExit}
          onEnter={onEnter}
          unmountOnExit
        >
          <div ref={contentRef} className="page-transition-content">
            {children}
          </div>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default GSAPTransition;
