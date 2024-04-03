import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Label from "../components/Label";
import Rating from "../components/Rating";
import Release from "../components/Release";
import { useGenres } from "../hooks/useGenres";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 8px;
`;

const Popular = () => {
  const MovieData = useLoaderData();
  const genres = useGenres();

  return (
    <>
      {MovieData.popular.map((movie) => (
        <Link to={`details/${movie.id}`} key={movie.id}>
          <StyledArticle>
            <Image
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              width="85"
              height="120"
            />
            <StyledSection>
              <Heading title={movie.title} size="14" as="h3" />
              <Rating voteAverage={movie.vote_average} />
              <StyledDiv>
                {MovieData &&
                  movie.genre_ids.map(
                    (genreId) =>
                      genres &&
                      genres.map(
                        (genre) =>
                          genre.id === genreId && (
                            <Label title={genre.name} key={genre.id} />
                          )
                      )
                  )}
              </StyledDiv>
              <Release date={movie.release_date} />
            </StyledSection>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export default Popular;
