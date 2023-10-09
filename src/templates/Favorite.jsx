import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Label from "../components/Label";
import Rating from "../components/Rating";
import Release from "../components/Release";

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
  useEffect(() => {
    const favorite_options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_TOKEN,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/account/19103084/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      favorite_options
    )
      .then((response) => response.json())
      .then((response) => setFavoriteListData(response))
      .catch((err) => console.error(err));
  }, [favoriteListData]);

  return (
    <section className="HorizontalMovieListContainer flex flex-col gap-4">
      {favoriteListData &&
        favoriteListData.results.map((data) => (
          <Link to={`../details/${data.id}`} key={data.id}>
            <StyledArticle>
              <Image
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                width="85"
                height="120"
              />
              <StyledSection>
                <Heading title={data.title} size="14" as="h3" />
                <Rating voteAverage={data.vote_average} />
                <StyledDiv>
                  <Label title="horror" />
                  <Label title="thriller" />
                  <Label title="documentary" />
                </StyledDiv>
                <Release date={data.release_date} />
              </StyledSection>
            </StyledArticle>
          </Link>
        ))}
    </section>
  );
};

export default Favorite;
