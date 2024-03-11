import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <Hero titulo="League of blogs" imagen="/1.jpg">
        <h3 className="text-black font-bold text-xl text-center p-5 lg:w-[80ch]">
          Explora un universo de campeones únicos, cada uno con sus propias
          habilidades y estilos de juego. Descubre builds, estrategias y
          consejos para dominar el campo de batalla y convertirte en una
          leyenda.
        </h3>
        <Link
          to="/personajes"
          className="font-semibold bg-blue-700 py-2 px-5 rounded"
        >
          Explora los campeones!
        </Link>
      </Hero>
      <main className="min-h-screen grow flex flex-col gap-5 justify-start items-center pt-20">
        <h2 className="text-3xl font-semibold">Campeones populares</h2>
        <Carousel start={50} end={70} />
      </main>
    </>
  );
};

export default Home;
/* CTRL ALT A atajo de extension de tailwind */
