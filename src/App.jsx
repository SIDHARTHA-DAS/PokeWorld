import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PokeMons from "./components/PokeMons"
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPokemon from "./components/AboutPokemon ";

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPokemon/>} />
        <Route path="/Pokemon" element={<PokeMons/>} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
