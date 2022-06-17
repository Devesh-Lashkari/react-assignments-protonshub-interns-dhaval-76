import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Parking from "./screens/Parking";

function App() {
  return (
    <div className="app">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/parking" element={<Parking />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
