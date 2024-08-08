import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsPage } from "./pages/PokemonsPage";
import { PokemonPage } from "./pages/PokemonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsPage />} />
        <Route path="/:pokemon" element={<PokemonPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
