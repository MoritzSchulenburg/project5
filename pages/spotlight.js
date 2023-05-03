import { useState } from "react";
import Spotlight from "../components/Spotlight";
import { useEffect } from "react";
import styled from "styled-components";
import { Navigation } from "../components/Navigation";

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
      <StyledHeader>Spotlight</StyledHeader>
      <StyledUL>
        <styledLi>
          <Spotlight art={art} />
        </styledLi>
      </StyledUL>
      <StyledNavigation>
        <Navigation />
      </StyledNavigation>
    </>
  );
}

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 10px;
  gap: 10px;
`;
const styledLi = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: grey;
  gap: 3.5em;
  font-size: 25px;
  align-items: center;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.header`
  display: flex;
  background-color: grey;
  height: 90px;
  font-size: 45px;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  border-radius: 5px;
`;
