import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../Data/navData";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // const navigate = useNavigate(null);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>Spice & Soul</h1>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
                onClick={() => setMenuOpen(false)} // closes menu when a link is clicked
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="book-tbl-btn" onClick={() => setMenuOpen(false)}>
          Book a Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
