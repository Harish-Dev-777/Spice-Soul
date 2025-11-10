import { menuData } from "../../Data/menuData";

const MenuItemCard = () => {
  return (
    <div className="menu-grid">
      {menuData.map((item) => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="menu-footer">
            <span className="price">₹{item.price}</span>
            <span className="rating">⭐ {item.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemCard;
