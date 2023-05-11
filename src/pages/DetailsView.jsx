import styled, { css } from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import MovieInfo from "../templates/MovieInfo";
import MovieDescription from "../templates/MovieDescription";
import MovieCast from "../templates/MovieCast";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const StyledFaArrowLeft = styled(FaArrowLeft)`
  grid-column-start: 1;
  grid-row-start: 1;
  color: #fff;
  margin: 2rem;
`;
const StyledHeader = styled.header`
  /* background-image: url(); */
  /* background-size: cover; */
  /* background-position: 0 20%; */
  /* padding: 2rem; */
  display: grid;
  grid-template-columns: 3;
  height: calc(200px + 2rem);
  background-color: gray;
`;
const StyledSpan = styled.span`
  position: relative;
  display: flex;
  grid-column-start: 2;
  grid-row-start: 1;
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
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;
const StyledDiv = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const DetailsView = () => {
  const movieData = useLoaderData();

  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${movieData.videos.results[0].key}`} 
            title="YouTube video player"
            allow="accelerometer; auto-play; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </StyledDiv>
        <StyledFaArrowLeft />
        <Switch justify="end" align="top" />
      </StyledHeader>
      <StyledMain>
        <MovieInfo data={movieData} />
        <MovieDescription />
        <MovieCast />
      </StyledMain>
    </>
  );
};

export const detailsViewData = async ({ params }) => {
  const { id } = params;
  return await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a996c0fb2a62f3545c6946cb0685bfa0&append_to_response=videos`
  ).then((details) => {
    return details.data;
  });
};

export default DetailsView;
