import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations
 * @param {Function} animationCallback - Function containing GSAP animation code
 * @param {Array} dependencies - Dependencies array for useEffect
 */
const useGSAP = (animationCallback, dependencies = []) => {
  const contextRef = useRef();

  useEffect(() => {
    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {
      animationCallback();
    });

    // Cleanup function
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef;
};

export default useGSAP;
