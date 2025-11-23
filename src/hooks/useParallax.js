import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for parallax effects
 * @param {number} speed - Parallax speed (0.5 = half speed, 2 = double speed)
 * @param {string} direction - Direction of parallax ('y' or 'x')
 */
const useParallax = (speed = 0.5, direction = 'y') => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const property = direction === 'y' ? 'yPercent' : 'xPercent';
    const movement = (1 - speed) * 100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      element,
      { [property]: -movement / 2 },
      { [property]: movement / 2, ease: 'none' }
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [speed, direction]);

  return elementRef;
};

export default useParallax;
