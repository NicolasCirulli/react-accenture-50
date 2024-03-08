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
      path: "/builds",
      title: "Builds",
      active: "/builds" == location.pathname,
    },
  ];

  console.log(links);
  return (
    <header className="px-3 flex justify-between items-center">
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
