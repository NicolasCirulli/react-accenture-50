import { Link } from "react-router-dom";

const CardChampion = ({ champion }) => {
  return (
    <article className="w-9/12 max-w-[500px]">
      <img
        className="w-full h-[400px] object-cover object-top"
        src={champion.image}
        alt={"Imagen de " + champion.name}
      />
      <footer className="bg-white text-black ps-1 w-full">
        <h2 className="text-2xl font-bold">{champion.name}</h2>
        <p className="text-xl italic">{champion.title}</p>
        <Link
          to={"/personajes/" + champion.id}
          className="text-blue-950 text-lg underline"
        >
          Detalle
        </Link>
      </footer>
    </article>
  );
};

export default CardChampion;
