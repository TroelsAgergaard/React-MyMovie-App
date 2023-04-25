import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <Heading title="Movie Title" size="14" as="h3" />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
