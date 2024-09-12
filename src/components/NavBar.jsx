import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">PokeWorld</Link>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navlink" href="/">
          Home
        </Link>
        <Link to="/about" className="navlink" href="/about">
          About
        </Link>
        <Link to="/Pokemon" className="navlink" href="/Pokemon">
          Pokemon
        </Link>
        <Link to="/contact" className="navlink" href="/contact">
          Contact
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
