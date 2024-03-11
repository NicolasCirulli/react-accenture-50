const Hero = (props) => {
  return (
    <section className="h-screen">
      <img
        src={props.imagen}
        className="h-1/2 lg:h-3/4 w-full object-cover"
        alt="banner"
      />
      <div className="h-1/2 lg:h-1/4 bg-zinc-200 flex flex-col justify-center items-center">
        <h2 className=" text-black text-4xl font-bold text-center p-2">
          {props.titulo}
        </h2>
        <div className="flex flex-col items-center">{props.children}</div>
      </div>
    </section>
  );
};

export default Hero;
