const Hero = (props) => {
  return (
    <section>
      <h2 className="bg-white text-black text-4xl font-bold text-center p-2">
        {props.titulo}
      </h2>
      <img src={props.imagen} alt="banner" />
      {props.children}
    </section>
  );
};

export default Hero;
