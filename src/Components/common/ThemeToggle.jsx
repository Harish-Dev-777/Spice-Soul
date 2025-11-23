import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
  className="fixed-theme-toggle"
  onClick={toggleTheme}
  aria-label="Toggle Theme"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  style={{
    position: "fixed",
    top: "30px",
    right: "30px",
    zIndex: 9999,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    color: "var(--accent)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  }}
>
  {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
</motion.button>
  );
};

export default ThemeToggle;
