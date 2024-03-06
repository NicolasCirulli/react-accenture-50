import LayoutMain from "./LayoutMain";

import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <LayoutMain>
      <Hero titulo="League of blogs" imagen="/1.jpg">
        <h3 className="bg-white text-black font-bold text-2xl text-center p-5">
          acá tendríamos que poner una descripción
        </h3>
      </Hero>
      <main className="grow flex flex-col gap-5 justify-center items-center p-5">
        <Carousel start={50} end={70} />
      </main>
    </LayoutMain>
  );
};

export default Home;
/* CTRL ALT A atajo de extension de tailwind */
