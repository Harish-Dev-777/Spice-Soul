import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import { useGsapAnimations } from "./hooks/useGsapAnimations";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import ScrollToTop from "./Components/common/ScrollToTop";
import GSAPTransition from "./Components/common/GSAPTransition";

import { useSmoothScroll } from "./utils/smoothScroll";

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
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "var(--primary-bg)",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "3px solid var(--accent)",
        borderTop: "3px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  </div>
));

PageLoader.displayName = "PageLoader";

const App = () => {
  const location = useLocation();

  // Initialize global GSAP animations
  useGsapAnimations();

  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <main>
      <ScrollToTop />
      <MemoizedNavbar />

      <GSAPTransition>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </GSAPTransition>

      <MemoizedFooter />
    </main>
  );
};

export default App;
