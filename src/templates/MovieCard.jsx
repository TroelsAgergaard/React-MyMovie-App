import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import coverimage from "../assets/moviecover.png";

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
        <Image shadow={true} src={coverimage} alt="Cover Image" />
      </figure>
      <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
      <Rating />
    </StyledArticle>
  );
};

export default MovieCard;
