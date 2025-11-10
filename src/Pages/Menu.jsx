import MenuItemCard from "../Components/menu/MenuItemCard";
import "../Styles/Menu.css";

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title">Our Menu</h2>
      <MenuItemCard />
    </section>
  );
};

export default Menu;
