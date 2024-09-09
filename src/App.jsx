import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PokeMons from "./components/PokeMons"
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PokeMons/>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
