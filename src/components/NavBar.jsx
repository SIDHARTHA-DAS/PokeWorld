import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">PokeWorld</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a className="navlink" href="#home">
          Home
        </a>
        <a className="navlink" href="#about">
          About
        </a>
        <a className="navlink" href="#Pokemon">
          Pokemon
        </a>
        <a className="navlink" href="#contact">
          Contact
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
