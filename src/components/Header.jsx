import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const links = [
    { path: "/", title: "Inicio", active: "/" == location.pathname },
    {
      path: "/personajes",
      title: "Personajes",
      active: "/personajes" == location.pathname,
    },
    {
      path: "/registro",
      title: "Registro",
      active: "/registro" == location.pathname,
    },
    {
      path: "/login",
      title: "Login",
      active: "/login" == location.pathname,
    },
  ];
  return (
    <header className="px-3 w-full bg-zinc-950/90 fixed flex justify-between items-center">
      <img src="/logo.png" alt="Logo pagina" className="w-14 h-14" />
      <nav className="flex gap-5">
        {links.map((link) => (
          <Link
            key={link.title}
            className={`font-semibold py-1 px-2 border ${
              link.active ? "bg-white text-black" : ""
            }`}
            to={link.path}
          >
            {" "}
            {link.title}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
