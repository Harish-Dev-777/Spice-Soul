import { useRef } from "react";
import "../../Styles/Ambiance.css";
import OptimizedImage from "../common/OptimizedImage";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

import AmbianceImage1 from "../../assets/images/AmbianceImage1.png";
import AmbianceImage2 from "../../assets/images/AmbianceImage2.png";
import AmbianceImage3 from "../../assets/images/AmbianceImage3.png";
import AmbianceImage4 from "../../assets/images/AmbianceImage4.png";
import AmbianceImage5 from "../../assets/images/AmbianceImage5.png";
import AmbianceImage6 from "../../assets/images/AmbianceImage6.png";
import AmbianceImage7 from "../../assets/images/AmbianceImage7.png";
import AmbianceImage8 from "../../assets/images/AmbianceImage8.png";

const Ambiance = () => {
  const containerRef = useRef(null);

  const images = [
    AmbianceImage1,
    AmbianceImage2,
    AmbianceImage3,
    AmbianceImage4,
    AmbianceImage5,
    AmbianceImage6,
    AmbianceImage7,
    AmbianceImage8,
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".ambiance-header h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      ".ambiance-header p",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

    // Staggered grid reveal
    gsap.fromTo(
      ".ambiance-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambiance-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="ambiance-section" ref={containerRef}>
      <div className="ambiance-header">
        <h1>Experience Our Ambiance</h1>
        <p>
          "Where luxury meets comfort - a perfect setting for every occasion."
        </p>
      </div>

      <div className="ambiance-grid">
        {images.map((img, index) => {
          // Create a masonry pattern
          let gridClass = "";
          if (index === 0) gridClass = "span-big"; // 2x2
          else if (index === 3 || index === 4 || index === 5 || index === 7)
            gridClass = "span-wide"; // 2x1
          else if (index === 2) gridClass = "span-tall"; // 1x2

          return (
            <div className={`ambiance-card ${gridClass}`} key={index}>
              <OptimizedImage
                src={img}
                alt={`Ambiance ${index + 1}`}
                className="ambiance-img"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ambiance;
