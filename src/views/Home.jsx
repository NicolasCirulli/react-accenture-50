import LayoutMain from "./LayoutMain";

import Carousel from "../components/Carousel/Carousel";
const Home = () => {
  return (
    <LayoutMain imagen="/1.jpg">
      <main className="grow flex flex-col gap-5 justify-center items-center p-5">
        <Carousel start={50} end={70} />
      </main>
    </LayoutMain>
  );
};

export default Home;
/* CTRL ALT A atajo de extension de tailwind */
