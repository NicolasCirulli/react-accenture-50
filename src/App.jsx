import LayoutMain from "./views/LayoutMain";
import Champions from "./views/Champions";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champion from "./views/Champion";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Champions />} />
            <Route path="/personajes/:id" element={<Champion />} />
            <Route path="/builds" element={<h2> Builds </h2>} />
          </Routes>
        </LayoutMain>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
