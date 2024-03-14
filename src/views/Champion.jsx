import { Link, useNavigate, useParams } from "react-router-dom";
import { getChampionById } from "../services/championsQueries";
import { useEffect, useState } from "react";

const Champion = () => {
  const params = useParams();
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getChampionById(params.id)
      .then((res) => {
        if (res.personaje) {
          setPersonaje(res.personaje);
        } else {
          alert("Personaje no disponible");
          navigate("/personajes");
        }
      })
      .finally(() => setCargando(false));
  }, []);

  return (
    <>
      {cargando ? (
        <div className="grow pt-20">
          <h2 className="pt-20 text-4xl text-whtie">Cargando</h2>
        </div>
      ) : (
        <div className="grow flex flex-col items-center gap-5 justify-center pt-20">
          <h2 className="pt-20 text-4xl text-whtie">{personaje.name} </h2>
          <img
            className="w-1/2 h-[500px] object-cover"
            src={personaje.image}
            alt={"imagen de " + personaje.name}
          />
          <Link to={"/personajes"}>Volver a personajes</Link>
        </div>
      )}
    </>
  );
};

export default Champion;
