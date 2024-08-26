import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 border-b border-gray-200 flex items-center justify-center relative">
      <Link to="/">
        <img src="pokemonlogo.svg" alt="Pokémon Logo" className="h-12 animate__animated animate__heartBeat" />
      </Link>
      <SocialIcons />
    </nav>
  );
};
