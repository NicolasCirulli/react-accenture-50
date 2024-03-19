import LayoutMain from "./views/LayoutMain";
import Champions from "./views/Champions";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champion from "./views/Champion";
import store from "./redux/store";
import { Provider } from "react-redux";
import Registro from "./views/Registro";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Champions />} />
            <Route path="/personajes/:id" element={<Champion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<h2 className="pt-20">login</h2>} />
          </Routes>
        </LayoutMain>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
