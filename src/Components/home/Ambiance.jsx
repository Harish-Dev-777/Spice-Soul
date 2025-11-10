import "../../Styles/Ambiance.css";
import AmbianceImage1 from "../../assets/images/AmbianceImage1.png";
import AmbianceImage2 from "../../assets/images/AmbianceImage2.png";
import AmbianceImage3 from "../../assets/images/AmbianceImage3.png";
import AmbianceImage4 from "../../assets/images/AmbianceImage4.png";
import AmbianceImage5 from "../../assets/images/AmbianceImage5.png";
import AmbianceImage6 from "../../assets/images/AmbianceImage6.png";
import AmbianceImage7 from "../../assets/images/AmbianceImage7.png";
import AmbianceImage8 from "../../assets/images/AmbianceImage8.png";

const Ambiance = () => {
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

  return (
    <section className="ambiance-section">
      <div className="ambiance-header">
        <h1>Experience Our Ambiance</h1>
        <p>
          Where luxury meets comfort - a perfect setting for every occasion.
        </p>
      </div>

      <div className="ambiance-grid">
        {images.map((img, index) => (
          <div className="ambiance-card" key={index}>
            <img
              src={img}
              alt={`Ambiance ${index + 1}`}
              className="ambiance-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ambiance;
