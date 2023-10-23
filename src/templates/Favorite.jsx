import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  gap: 8px;
`;

const Favorite = () => {
  const [favoriteListData, setFavoriteListData] = useState(undefined);
  const genres = useGenres();

  useEffect(() => {
    const favoriteOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/account/19103084/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      favoriteOptions
    )
      .then((response) => response.json())
      .then((response) => setFavoriteListData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="HorizontalMovieListContainer flex flex-col gap-4">
      {favoriteListData &&
        favoriteListData.results.map((movie) => (
          <Link to={`../details/${movie.id}`} key={movie.id}>
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
                  {movie.genre_ids.map((genreId) =>
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
    </section>
  );
};

export default Favorite;
