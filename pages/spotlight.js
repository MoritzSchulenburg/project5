import { useState } from "react";
import Spotlight from "../components/Spotlight";
import { useEffect } from "react";

// console.log(getRandomInt(0, 11));

export default function SpotlightPage({ pieces }) {
  const [count, setCount] = useState(getRandomInt(0, pieces.length));
  const [art, setArt] = useState(pieces[count]);

  // // const count = getRandomInt(0, 11);

  // useEffect(() => {
  //   setPiece(pieces[count]);
  // }, []);

  console.log("pieces: ", pieces);
  console.log("piece: ", art);
  console.log("coutn: ", count);
  console.log("pieces.lenght", pieces.length);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  return (
    <>
      <Spotlight art={art} />
    </>
  );
}
