import { useState, useEffect, useRef } from "react";
import { getChampions } from "../services/championsQueries";
import CardChampion from "../components/CardChampion";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByName,
  load,
  loadAsync,
} from "../redux/actions/championsActions";
const Champions = () => {
  const inputBusqueda = useRef(null);

  const dispatch = useDispatch();

  const { all, filtered, search } = useSelector((store) => store.champions);

  useEffect(() => {
    if (all.length == 0) {
      dispatch(loadAsync());
    }
  }, []);

  const handleInput = () => {
    dispatch(filterByName(inputBusqueda.current.value));
  };

  return (
    <main className="grow flex gap-5 justify-center items-center pt-20">
      <section className="w-full flex justify-center flex-wrap gap-5 ">
        <h2 className="text-4xl text-zinc-100 font-bold w-full text-center">
          Personajes
        </h2>
        <search className="w-full flex justify-center">
          <input
            type="text"
            name="Name_champion"
            className="w-3/4 md:w-2/5 h-8 font-semibold text-lg text-blue-950 rounded outline-none"
            onInput={handleInput}
            ref={inputBusqueda}
            defaultValue={search}
          />
        </search>
        {filtered.length > 0 ? (
          filtered.map((personaje) => (
            <CardChampion key={personaje.id} champion={personaje} />
          ))
        ) : (
          <h2>No hay personajes que coincidan con esa busqueda</h2>
        )}
      </section>
    </main>
  );
};

export default Champions;
