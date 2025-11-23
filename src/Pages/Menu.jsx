import MenuItemCard from "../Components/menu/MenuItemCard";
import SEO from "../Components/common/SEO";
import "../Styles/Menu.css";

const Menu = () => {
  return (
    <>
      <SEO
        title="Our Menu"
        description="Explore our exquisite menu featuring authentic cuisine, signature dishes, and chef specials. From appetizers to desserts, discover flavors that tell a story."
        keywords="menu, restaurant menu, food menu, signature dishes, chef specials, appetizers, main course, desserts"
        url="https://spice-and-soul.vercel.app/menu"
      />
      <section id="menu" className="menu-section">
        <h2 className="section-title">Our Menu</h2>
        <MenuItemCard />
      </section>
    </>
  );
};

export default Menu;
