import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import PokemonDetail from "./screens/PokemonDetail";

function App() {
  return (
    <div className="app">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
