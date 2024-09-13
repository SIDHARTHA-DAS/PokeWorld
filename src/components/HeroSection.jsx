import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="heros">Welcome to PokeWorld</h1>
          <p>Lets Find ToGether The Pokemon You need</p>
          <Link to="/Pokemon" href="/Pokemon" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
