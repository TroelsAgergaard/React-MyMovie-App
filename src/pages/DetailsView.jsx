import styled, { css } from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import MovieInfo from "../templates/MovieInfo";
import MovieDescription from "../templates/MovieDescription";
import MovieCast from "../templates/MovieCast";
import { Link } from "react-router-dom";

const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;
const StyledHeader = styled.header`
  /* background-image: url(); */
  background-size: cover;
  background-position: 0 20%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 3;
  height: 200px;
  background-color: gray;
`;
const StyledSpan = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50px;
  justify-self: center;
  align-self: center;
  &:after {
    content: "Play Trailer";
    position: absolute;
    top: 53px;
    white-space: nowrap;
    color: #fff;
  }
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const DetailsView = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <StyledFaArrowLeft />
        </Link>
        <StyledSpan>
          <FaPlay />
        </StyledSpan>
        <Switch justify="end" align="top" />
      </StyledHeader>
      <StyledMain>
        <MovieInfo />
        <MovieDescription />
        <MovieCast />
      </StyledMain>
    </>
  );
};

export default DetailsView;
