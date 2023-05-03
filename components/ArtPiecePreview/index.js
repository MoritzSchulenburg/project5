import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledCard className="card">
      <h2>{title}</h2>
      <Image src={image} alt="art piece" width={200} height={200} />

      <p>{artist}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 2rem;
  width: fit-content;
  align-self: center;
  box-shadow: 4px 4px 4px 4px grey;

  p {
    font-size: 20px;
    font-style: italic;
  }
`;
