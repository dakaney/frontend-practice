import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advice from "./Advice";
import Dictionary from "./Dictionary";
import Navbar from "./Navbar";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Advice" element={<Advice />} />
        <Route path="/Dictionary" element={<Dictionary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
