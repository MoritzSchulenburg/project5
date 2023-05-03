import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";
import { Navigation } from "../Navigation";

export default function ArtPieces({ pieces }) {
  return (
    <StyledWrapper>
      <>
        <StyledHeader>Art Gallery</StyledHeader>
        {pieces.map((piece) => {
          return (
            <ArtPiecePreview
              key={piece.slug}
              title={piece.name}
              artist={piece.artist}
              image={piece.imageSource}
            />
          );
        })}
        <StyledNavigation>
          <Navigation />
        </StyledNavigation>
      </>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
  gap: 1.5em;
  font-size: 25px;
  align-items: center;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
`;
