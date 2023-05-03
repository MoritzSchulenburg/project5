import styled from "styled-components";
import Link from "next/link";

export function Navigation() {
  return (
    <>
      <StyledNavigation>
        <StyledLi>
          <Link href="/">Home</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/spotlight">Spotlight</Link>
        </StyledLi>
      </StyledNavigation>
    </>
  );
}
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

const StyledLi = styled.li`
  list-style-type: none;
`;
