import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../Data/navData";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="nav-logo">
        <h1>Spice & Soul</h1>
      </div>

      {/* Hamburger Icon with accessibility */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        type="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div
        className={`nav-right ${menuOpen ? "open" : ""}`}
        id="main-menu"
        role="menu"
      >
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
                onClick={closeMenu}
                role="menuitem"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
