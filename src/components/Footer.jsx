import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pokemon-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Pokemon</h2>
          <p>Explore the world of Pokemon!</p>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">Pokedex</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>

          <div className="footer-social">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Pokemon. All rights reserved.</p>
        <p>Design by Sidharth . 🫶🏻</p>
      </div>
    </footer>
  );
};

export default Footer;
