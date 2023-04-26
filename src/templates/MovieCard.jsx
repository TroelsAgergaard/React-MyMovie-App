import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
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
        <Image shadow={true} />
      </figure>
      <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
      <Rating />
    </StyledArticle>
  );
};

export default MovieCard;
