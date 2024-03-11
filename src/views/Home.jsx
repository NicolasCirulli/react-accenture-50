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
      <main className="grow flex flex-col items-center">
        <section className="min-h-screen w-full flex flex-wrap gap-5 justify-center py-5">
          <Campeones />
          <Carousel start={50} end={70} />
        </section>
        <Builds />
      </main>
    </>
  );
};

export default Home;
/* CTRL ALT A atajo de extension de tailwind */

const Campeones = () => {
  return (
    <section className="flex flex-wrap w-full justify-center gap-5 px-5">
      <h2 className="text-5xl font-bold text-center w-full">Campeones</h2>
      <p className="w-[55ch] text-lg font-semibold">
        En League of Legends, un campeón es un personaje jugable que se controla
        en la Grieta del Invocador. Cada campeón tiene un conjunto único de
        habilidades y estilo de juego que lo distingue de los demás. Los
        jugadores pueden elegir entre más de 150 campeones, cada uno con su
        propia historia, apariencia y habilidades.
      </p>
      <p className="w-[55ch] text-lg font-semibold">
        Los campeones se clasifican en diferentes roles, como asesino, tanque,
        mago, tirador y apoyo. Cada rol tiene un propósito específico en el
        equipo, y los jugadores deben trabajar juntos para lograr la victoria.
        Los campeones pueden subir de nivel durante una partida, lo que les
        permite aumentar sus estadísticas y desbloquear nuevas habilidades.
      </p>
      <p className="w-[55ch] text-lg font-semibold">
        Para dominar un campeón, los jugadores deben aprender sus habilidades,
        comprender sus fortalezas y debilidades, y practicar su uso en
        diferentes situaciones. Con el tiempo y la experiencia, los jugadores
        pueden convertirse en expertos en un solo campeón o aprender a jugar con
        varios campeones diferentes.
      </p>
    </section>
  );
};

const Builds = () => {
  return (
    <div className="w-full grow p-5 flex flex-wrap gap-8 justify-center bg-zinc-200 text-black">
      <h2 className="text-4xl font-bold text-center w-full">Builds</h2>
      <p className="text-lg font-semibold max-w-[55ch]">
        ¿Quieres convertirte en una fuerza imparable en League of Legends? La
        sección de builds de nuestra aplicación web te ofrece la clave para el
        éxito. Aquí encontrarás una completa colección de builds para cada
        campeón, diseñadas por jugadores profesionales y expertos en LoL.
      </p>
      <p className="text-lg font-semibold max-w-[55ch]">
        Explora una amplia variedad de builds personalizadas para cada rol y
        estilo de juego. Tanto si eres un jungler agresivo, un midlaner
        estratégico o un support protector, tenemos la build perfecta para
        ayudarte a sacar el máximo potencial de tu campeón favorito.
      </p>
      <div className="w-full flex justify-center items-center">
        <Link
          to="/personajes"
          className="font-semibold bg-zinc-700 text-white py-2 px-5 rounded self-center"
        >
          Explora las builds!
        </Link>
      </div>
    </div>
  );
};
