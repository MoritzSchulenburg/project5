import { useState } from "react";
import Spotlight from "../components/Spotlight";
import { useEffect } from "react";

export default function SpotlightPage({ pieces }) {
  const [art, setArt] = useState({});

  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      // The maximum is exclusive and the minimum is inclusive
      return Math.floor(Math.random() * (max - min) + min);
    }
    setArt(pieces[getRandomInt(0, pieces.length)]);
  }, [pieces]);

  return (
    <>
      <Spotlight art={art} />
    </>
  );
}
