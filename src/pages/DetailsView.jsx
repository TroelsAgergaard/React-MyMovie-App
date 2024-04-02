import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Switch from "../components/Switch";
import MovieCast from "../templates/MovieCast";
import MovieDescription from "../templates/MovieDescription";
import MovieInfo from "../templates/MovieInfo";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2;
  height: 232px;
`;
const StyledLink = styled(Link)`
  position: relative; /* fix z position on safari mobile */
  color: #fff;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-top: 2rem;
  margin-left: 2rem;
`;
const StyledIframe = styled.iframe`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;
const StyledSwitch = styled(Switch)`
  grid-column-start: 2;
  margin-top: 2rem;
  margin-right: 2rem;
`;
const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const DetailsView = () => {
  const DetailData = useLoaderData();
  console.log("DetailsData: ", DetailData);
  return (
    <>
      <StyledHeader>
        <StyledIframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${DetailData.details.videos.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></StyledIframe>
        <StyledLink to="/">
          <FaArrowLeft />
        </StyledLink>
        <StyledSwitch justify="end" align="top" />
      </StyledHeader>
      <StyledMain>
        <MovieInfo data={DetailData.details} />
        <MovieDescription data={DetailData.details} />
        <MovieCast data={DetailData.cast} />
      </StyledMain>
    </>
  );
};

export const DetailsViewData = async ({ params }) => {
  return await Promise.allSettled([
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&append_to_response=videos`
    ),
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    ),
  ]).then((data) => {
    return {
      details: data[0].value.data,
      cast: data[1].value.data,
    };
  });
};

export default DetailsView;
