import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import { AnimatePresence } from "framer-motion";
import { useGsapAnimations } from "./hooks/useGsapAnimations";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import ScrollToTop from "./Components/common/ScrollToTop";
import PageTransition from "./Components/common/PageTransition";


// Lazy load pages for better performance
const Home = lazy(() => import("./Pages/Home"));
const Menu = lazy(() => import("./Pages/Menu"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));

// Memoized components to prevent unnecessary re-renders
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

// Optimized loading component
const PageLoader = memo(() => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'var(--primary-bg)',
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '3px solid var(--accent)',
      borderTop: '3px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }}></div>
  </div>
));

PageLoader.displayName = 'PageLoader';

const App = () => {
  const location = useLocation();
  
  // Initialize global GSAP animations
  useGsapAnimations();

  return (
    <main>
      <ScrollToTop />
      <MemoizedNavbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <MemoizedFooter />
    </main>
  );
};

export default App;
