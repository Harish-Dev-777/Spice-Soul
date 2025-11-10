import "../../Styles/ChefsHighlight.css";
import chefsData from "../../Data/chefsData";

const ChefsHighlight = () => {
  return (
    <section className="chefs-highlight">
      <div className="chefs-header">
        <h1>Meet Our Culinary Masters</h1>
        <p>
          Behind every unforgettable dish lies the vision and artistry of our
          world-class chefs.
        </p>
      </div>

      <div className="chefs-grid">
        {chefsData.map((chef, index) => (
          <div className="chef-card" key={index}>
            <div className="chef-img-container">
              <img src={chef.image} alt={chef.name} className="chef-img" />
              <div className="chef-experience">{chef.experience}</div>
            </div>

            <div className="chef-info">
              <h2 className="chef-name">{chef.name}</h2>
              <p className="chef-title">{chef.title}</p>
              <blockquote className="chef-quote">“{chef.quote}”</blockquote>
              <p className="chef-description">{chef.description}</p>
              <p className="chef-specialty">
                <strong>Specialty:</strong> {chef.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsHighlight;
