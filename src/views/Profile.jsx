import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../services/countriesQueries";
import { useEffect, useState } from "react";
import authQueries from "../services/authQueries";
import alerts from "../utils/alertas";
import { update } from "../redux/actions/userAction";
const Profile = () => {
  const user = useSelector((store) => store.user.user);
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    country: user.country,
  });
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
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
    authQueries.update(aux).then((response) => {
      console.log(response);
      if (response.status == 201) {
        alerts.success("Usuario actualizado");
        dispatch(update(response.data));
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }
  return (
    <main className="grow mt-20 p-5 flex flex-col items-center justify-center">
      <img
        src={user.image || "/logo.png"}
        className="w-28 h-28 object-cover rounded-full"
        alt="Imagen de perfil del usuario"
      />
      <h2 className="text-4xl font-semibold py-5">{user.first_name}</h2>
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
          defaultValue={user.first_name}
        />
        <input
          className="w-10/12 h-10 outline-none rounded-lg ps-5"
          type="text"
          placeholder="Primer apellido"
          name="last_name"
          defaultValue={user.last_name}
        />
        <input
          className="w-10/12 h-10 outline-none rounded-lg ps-5"
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={user.email}
        />
        <select
          className="w-10/12 h-10 outline-none rounded-lg ps-5"
          name="country"
          value={formData.country}
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
          defaultValue={user.image}
        />
        <input
          type="submit"
          className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
          value="Actualizar"
        />
      </form>
    </main>
  );
};

export default Profile;
