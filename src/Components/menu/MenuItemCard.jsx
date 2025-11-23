import { menuData } from "../../Data/menuData";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";
import { useRef } from "react";

const MenuItemCard = () => {
  const containerRef = useRef(null);

  // Group data by category
  const categories = [...new Set(menuData.map(item => item.category))];
  const groupedData = categories.map(category => ({
    category,
    items: menuData.filter(item => item.category === category)
  }));

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate categories
    categories.forEach((_, index) => {
      tl.fromTo(`.category-section-${index}`, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        index === 0 ? 0 : "-=0.4"
      );
      
      // Animate items within category with scale effect
      tl.fromTo(`.category-items-${index} .menu-item-card`, 
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.3"
      );
    });

  }, []);

  if (!menuData || menuData.length === 0) {
    return <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>Loading Menu...</div>;
  }

  return (
    <div ref={containerRef}>
      {groupedData.map((group, index) => (
        <div key={group.category} className={`menu-category category-section-${index}`}>
          <h3 className="category-title">{group.category}</h3>
          <div className={`menu-grid category-items-${index}`}>
            {group.items.map((item) => (
              <div key={item.id} className="menu-item-card">
                <div className="menu-item-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="menu-item-img"
                    loading="lazy" 
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <span className="menu-item-price">₹{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                  <div className="menu-item-footer">
                    <div className="menu-item-tags">
                      {item.tags && item.tags.slice(0, 2).map((tag, i) => (
                        <span 
                          key={i} 
                          className={`menu-tag ${tag.toLowerCase().includes('veg') && !tag.toLowerCase().includes('non') ? 'veg' : ''} ${tag.toLowerCase().includes('spicy') ? 'spicy' : ''}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="menu-item-rating">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemCard;
