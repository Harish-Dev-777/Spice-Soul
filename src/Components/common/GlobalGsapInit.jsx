import { memo } from 'react';
import { useGsapAnimations } from '../../hooks/useGsapAnimations';

/**
 * Optimized global GSAP initialization hook
 * Memoized to prevent unnecessary re-initialization
 */
const GlobalGsapInit = memo(() => {
  useGsapAnimations();
  return null;
});

GlobalGsapInit.displayName = 'GlobalGsapInit';

export default GlobalGsapInit;
