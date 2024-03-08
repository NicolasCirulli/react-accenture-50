import LayoutMain from "./views/LayoutMain";
import Champions from "./views/Champions";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Champions />} />
          <Route path="/builds" element={<h2> Builds </h2>} />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;
