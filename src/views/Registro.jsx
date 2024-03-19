import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries } from "../services/countriesQueries";
import authQueries from "../services/authQueries";
import alerts from "../utils/alertas";
function Registro() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "",
  });
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = { ...formData };
    for (const key in aux) {
      if (!aux[key]) delete aux[key];
    }
    authQueries.register(aux).then((response) => {
      if (response.status == 201) {
        alerts.success("Cuenta creada, puede logear");
        navigate("/login");
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  return (
    <main className="grow pt-20 flex flex-col gap-5 justify-center items-center">
      <h2 className="text-4xl font-bold">Registro</h2>
      <div className="border w-10/12 py-5 flex flex-col items-center h-fit">
        <form
          onSubmit={handleSubmit}
          onInput={handleInput}
          className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
        >
          <input
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            type="text"
            placeholder="Primer nombre"
            name="first_name"
          />
          <input
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            type="text"
            placeholder="Primer apellido"
            name="last_name"
          />
          <input
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            type="password"
            placeholder="Contraseña"
            name="password"
          />
          <select
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            name="country"
            defaultValue={formData.country}
          >
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={country} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
          </select>
          <input
            className="w-10/12 h-10 outline-none rounded-lg ps-5"
            type="text"
            name="image"
            placeholder="URL imagen"
          />
          <input
            type="submit"
            className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
            value="Enviar"
          />
        </form>
        <Link
          className="flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
          to="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}

export default Registro;
