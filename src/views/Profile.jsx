import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../services/countriesQueries";
import { useEffect, useState } from "react";
import authQueries from "../services/authQueries";
import alerts from "../utils/alertas";
import { update } from "../redux/actions/userAction";
const Profile = () => {
  const user = useSelector((store) => store.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const [newURL, setNewURL] = useState("");
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
      if (response.status == 201) {
        alerts.success("Usuario actualizado");
        dispatch(update(response.data));
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  function updateImage(newImage) {
    const aux = { image: newImage };
    authQueries.update(aux).then((response) => {
      if (response.status == 201) {
        alerts.success("Usuario actualizado");
        dispatch(update(response.data));
        setIsOpen(false);
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  return (
    <main className="grow mt-20 p-5 flex flex-col items-center justify-center relative">
      {/* MODAL */}
      {isOpen && (
        <div className="absolute w-full h-full bg-zinc-800/80 z-20 flex justify-center items-center">
          <div className="relative bg-white w-9/12 min-h-48 py-5 rounded flex flex-col gap-5 justify-evenly items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="border text-xl font-semibold text-zinc-900 h-8 w-8 rounded border-zinc-950 absolute top-4 right-4"
            >
              x
            </button>
            <label className="text-zinc-950 font-semibold text-center flex flex-col">
              {" "}
              Nueva imagen
              <input
                onInput={(e) => setNewURL(e.target.value)}
                type="text"
                placeholder="https://...."
                className="border w-48 rounded ps-2"
              />
            </label>
            <img
              src={newURL}
              className="w-28 h-28 rounded-full object-cover select-none"
              alt="Imagen de perfil del usuario nueva"
            />
            <div className="flex gap-5">
              <button
                className="bg-blue-800 font-semibold px-4 py-2 rounded"
                onClick={() => updateImage(newURL)}
              >
                Cambiar
              </button>
              <button
                className="bg-red-800 font-semibold px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -- */}
      <div className="relative h-28 w-28 group">
        <div className="absolute scale-100 transition-all duration-200 ease-in-out group-hover:visible invisible inset-0 flex justify-center items-center bg-zinc-500/50 rounded-full">
          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-white text-zinc-900 p-1 h-10 w-10 rounded-full flex place-content-center cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </div>
        <img
          src={user.image || "/userdefault.webp"}
          className="w-28 h-28 rounded-full object-cover select-none"
          alt="Imagen de perfil del usuario"
        />
      </div>
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
          type="submit"
          className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
          value="Actualizar"
        />
      </form>
    </main>
  );
};

export default Profile;
