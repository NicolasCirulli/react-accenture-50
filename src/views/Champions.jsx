import { useEffect, useState } from "react";
import LayoutMain from "./LayoutMain";

const Champions = () => {
  const [personajes, setPersonajes] = useState([]);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    fetch("/personajes.json")
      .then((response) => response.json())
      .then((data) => setPersonajes(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    setBool(!bool);
  };
  return (
    <>
      <main className="grow flex flex-col gap-5 justify-center items-center">
        <h3 className="text-4xl text-blue-300 font-bold">Champions</h3>
        <button onClick={handleClick}>Mostrar personajes</button>
        <ul>
          {personajes.length > 0 &&
            bool &&
            personajes.map((personaje) => (
              <li key={personaje.id}> {personaje.name} </li>
            ))}
        </ul>
      </main>
    </>
  );
};

export default Champions;
