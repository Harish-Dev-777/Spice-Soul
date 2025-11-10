import { useNavigate } from "react-router-dom";
import "../../Styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(null);

  return (
    <div className="heroSection">
      <h1>Spice & Soul</h1>
      <h3>
        <q>Where Every Bite Tells a Story</q>
      </h3>
      <p>
        Discover world-class flavors, crafted with passion and served with soul.
      </p>
      <div className="btns">
        <button className="menuBtn" onClick={() => navigate("/menu")}>
          
          View Menu
        </button>
        <button className="tblBtn" onClick={() => navigate("/contact")}>
          Book a Table
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
