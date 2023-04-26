import styled from "styled-components";
import { FaFilm, FaTicketAlt, FaRegBookmark } from "react-icons/fa";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const Navigation = () => {
  return (
    <StyledNav>
      <FaFilm />
      <FaTicketAlt />
      <FaRegBookmark />
    </StyledNav>
  );
};

export default Navigation;
