import LayoutMain from "./views/LayoutMain";
import Champions from "./views/Champions";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champion from "./views/Champion";
import { useDispatch } from "react-redux";
import Registro from "./views/Registro";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./views/Login";
import { useEffect } from "react";
import authQueries from "./services/authQueries";
import alertas from "./utils/alertas";
import { login } from "./redux/actions/userAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data));
        alertas.success("Bienvenido " + res.data.first_name);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Champions />} />
          <Route path="/personajes/:id" element={<Champion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
