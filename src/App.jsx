import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/userAction";
import { ToastContainer } from "react-toastify";
import LayoutMain from "./views/LayoutMain";
import Champions from "./views/Champions";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Champion from "./views/Champion";
import AuthPublicViews from "./guard/AuthPublicViews";
import authQueries from "./services/authQueries";
import alertas from "./utils/alertas";
import Profile from "./views/Profile";
import AuthPrivateViews from "./guard/AuthPrivateViews";
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
          <Route element={<AuthPublicViews />}>
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<AuthPrivateViews />}>
            <Route path="/perfil" element={<Profile />} />
          </Route>
        </Routes>
      </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
