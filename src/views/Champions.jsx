import { useState, useEffect, useRef } from "react";
import { getChampions } from "../services/championsQueries";
import CarouselItem from "../components/Carousel/CarouselItem";

const Champions = () => {
  const [personajes, setPersonajes] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const inputBusqueda = useRef(null);

  useEffect(() => {
    getChampions().then((data) => {
      setPersonajes(data);
      setFiltrados(data);
    });
  }, []);

  const handleInput = () => {
    const aux = filterByName(personajes, inputBusqueda.current.value);
    setFiltrados(aux);
  };

  const filterByName = (listaPersonajes, value) =>
    listaPersonajes.filter((personaje) =>
      personaje.name.toLowerCase().startsWith(value.toLowerCase())
    );

  const personajesCards = filtrados.map((personaje) => (
    <CarouselItem key={personaje.id} champion={personaje} />
  ));
  return (
    <main className="grow flex flex-col gap-5 justify-center items-center pt-20">
      <search className="w-full flex justify-center">
        <input
          type="text"
          name="Name_champion"
          className="w-3/4 rounded text-black outline-none"
          onInput={handleInput}
          ref={inputBusqueda}
        />
      </search>
      <section className="w-full flex justify-center flex-wrap gap-5">
        <h2 className="text-4xl text-blue-100 font-bold">Personajes</h2>
        {filtrados.length > 0 && personajesCards}
      </section>
    </main>
  );
};

export default Champions;
