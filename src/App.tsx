import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsPage } from "./pages/PokemonsPage";
import { PokemonPage } from "./pages/PokemonPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="/:pokemon" element={<PokemonPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
