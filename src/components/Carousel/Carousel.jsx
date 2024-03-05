import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { personajes } from "../../data/data";
const Carousel = ({ start, end }) => {
  const champions = personajes.slice(start, end);
  const [champion, setChampion] = useState(champions[0]);
  const [indice, setIndice] = useState(0);
  const next = () => {
    let aux = indice == champions.length - 1 ? 0 : indice + 1;
    setIndice(aux);
    setChampion(champions[aux]);
  };
  const prev = () => {
    let aux = indice == 0 ? champions.length - 1 : indice - 1;
    setIndice(aux);
    setChampion(champions[aux]);
  };

  return (
    <div className="w-11/12 flex justify-between">
      <button className="text-3xl" onClick={prev}>
        {" "}
        ⬅️{" "}
      </button>
      <CarouselItem champion={champion} />
      <button className="text-3xl" onClick={next}>
        {" "}
        ➡️{" "}
      </button>
    </div>
  );
};

export default Carousel;
