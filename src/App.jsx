import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import AsteroidDetailScreen from "./screens/AsteroidDetailScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/asteroid/:id" element={<AsteroidDetailScreen />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
