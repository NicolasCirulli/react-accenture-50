const Header = () => {
  return (
    <header className="px-3 flex justify-between items-center">
      <img src="/logo.png" alt="Logo pagina" className="w-14 h-14" />
      <nav className="flex gap-5">
        <a href="#">Inicio</a>
        <a href="#">Personajes</a>
        <a href="#">Builds</a>
      </nav>
    </header>
  );
};

export default Header;
