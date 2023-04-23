import styled from "styled-components";
import Image from "../../components/Image";
import Heading3 from "../../components/HeadingThree";
import MovieRating from "../../components/ui/MovieRating";

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
      <Heading3 />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
