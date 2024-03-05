import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const LayoutMain = ({ imagen, children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-800 text-white">
      <Header />

      <Hero titulo="League of blogs" imagen={imagen}>
        <h3 className="bg-white text-black font-bold text-2xl text-center p-5">
          acá tendríamos que poner una descripción
        </h3>
      </Hero>

      {children}
      <Footer />
    </div>
  );
};

export default LayoutMain;
