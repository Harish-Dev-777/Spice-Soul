import "../../Styles/SignatureDishes.css";
import signatureDishes from "../../Data/signatureDishes";

const SignatureDishes = () => {
  return (
    <section className="signature-section">
      <div className="signature-header">
        <h1>Our Signature Dishes</h1>
        <p>
          <q>Experience the taste of luxury with our chef’s finest creations</q>
        </p>
      </div>

      <div className="signature-grid">
        {signatureDishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.src} alt={dish.name} className="dish-img" />
            <div className="dish-info">
              <h2 className="dish-name">{dish.name}</h2>
              <p className="dish-category">{dish.category}</p>
              <p className="dish-description">{dish.description}</p>
              <div className="dish-meta">
                <span className="dish-price">{dish.price}</span>
                <span className="dish-rating">⭐ {dish.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="full-menu">
        <button className="menuBtn">View Full Menu</button>
      </div>
    </section>
  );
};

export default SignatureDishes;
