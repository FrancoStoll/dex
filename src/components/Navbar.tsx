import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 border-b border-gray-200 flex items-center justify-center">
      <Link to="/"><img src="pokemonlogo.svg" alt="Pokémon Logo" className="h-12" /></Link>
    </nav>
  );
};
