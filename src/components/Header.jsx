import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  const location = useLocation();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const links = [
    {
      path: "/",
      title: "Inicio",
      active: "/" == location.pathname,
      visible: true,
    },
    {
      path: "/personajes",
      title: "Personajes",
      active: "/personajes" == location.pathname,
      visible: true,
    },
    {
      path: "/registro",
      title: "Registro",
      active: "/registro" == location.pathname,
      visible: user.first_name ? false : true,
    },
    {
      path: "/login",
      title: "Login",
      active: "/login" == location.pathname,
      visible: user.first_name ? false : true,
    },
  ];

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <header className="px-3 w-full bg-zinc-950/90 fixed flex justify-between items-center">
      <img src="/logo.png" alt="Logo pagina" className="w-14 h-14" />
      <nav className="flex gap-5">
        {links.map((link) => (
          <Anchor link={link} />
        ))}

        {user.first_name && (
          <button
            onClick={handleClick}
            className="bg-red-900 px-2 py-1 font-semibold"
          >
            {" "}
            Logout{" "}
          </button>
        )}
      </nav>
    </header>
  );
};

const Anchor = ({ link }) => {
  if (link.visible) {
    return (
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
    );
  } else {
    <></>;
  }
};

export default Header;
