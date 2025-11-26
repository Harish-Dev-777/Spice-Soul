import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export const initSmoothScroll = () => {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    autoResize: true,
    syncTouch: false,
    syncTouchLerp: 0.1,
    touchInertiaMultiplier: 35,
  });

  document.documentElement.classList.add("lenis");
  lenisInstance.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
};

export const destroySmoothScroll = () => {
  if (lenisInstance) {
    document.documentElement.classList.remove("lenis");
    gsap.ticker.remove((time) => {
      lenisInstance.raf(time * 1000);
    });
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      // Keep smooth scroll active for SPA
    };
  }, []);
};

export const scrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  }
};

export default {
  initSmoothScroll,
  destroySmoothScroll,
  useSmoothScroll,
  scrollTo,
};
