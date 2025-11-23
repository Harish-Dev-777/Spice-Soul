import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance = null;

export const initSmoothScroll = () => {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.5, // Longer duration for "gliding" feel
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Keep exponential for now, it's reliable
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
};

export const destroySmoothScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = initSmoothScroll();

    return () => {
      // Don't destroy on unmount, keep it running for the app
    };
  }, []);
};

export const scrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  }
};

export default { initSmoothScroll, destroySmoothScroll, useSmoothScroll, scrollTo };
