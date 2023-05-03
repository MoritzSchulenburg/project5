import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ art }) {
  console.log("Art in spotlight: ", art);
  return (
    <StyledCard>
      <Image src={art.imageSource} alt="art piece" width={400} height={400} />
      <p>{art.artist}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 1rem;
  width: fit-content;
  align-self: center;
  font-size: 30px;
  font-style: italic;
  box-shadow: 4px 4px 4px 4px grey;
`;
