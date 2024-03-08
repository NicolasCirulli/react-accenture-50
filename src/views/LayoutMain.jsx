import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutMain = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-800 text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutMain;
