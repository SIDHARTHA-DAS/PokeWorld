import './AboutPokemon.css'; // Importing the custom CSS

const AboutPokemon = () => {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        <h2 className="about-title">About Pokémon</h2>
        <p className="about-description">
          Pokémon is a world filled with amazing creatures, each with its own unique powers and characteristics. From catching them in the wild to battling with them, Pokémon has captured the imagination of millions worldwide. Lets dive into the world of Pokémon and discover the adventure that awaits!
        </p>

        {/* Pokémon Images */}
        <div className="pokemon-images">
          <div className="pokemon-image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="Bulbasaur"
              className="pokemon-image"
            />
            <p className="pokemon-name">Bulbasaur</p>
          </div>
          <div className="pokemon-image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              alt="Charmander"
              className="pokemon-image"
            />
            <p className="pokemon-name">Charmander</p>
          </div>
          <div className="pokemon-image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
              alt="Squirtle"
              className="pokemon-image"
            />
            <p className="pokemon-name">Squirtle</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="features">
          {/* Feature 1 */}
          <div className="feature-card">
            <h3 className="feature-title">Catch Em All</h3>
            <p className="feature-description">
              Explore different regions and catch various Pokémon, from common to legendary ones.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <h3 className="feature-title">Epic Battles</h3>
            <p className="feature-description">
              Train your Pokémon and battle other trainers to become a Pokémon Master.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <h3 className="feature-title">Explore Regions</h3>
            <p className="feature-description">
              Travel through different Pokémon regions, meet new trainers, and discover rare Pokémon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPokemon;
