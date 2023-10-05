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
  return (
    <section className="HorizontalMovieListContainer">
      {/* {MovieData.popular.map((data) => ( */}
      <Link to={`details/xxxxxx`} key="xxxxxx">
        <StyledArticle>
          <Image
            // src={`https://image.tmdb.org/t/p/w200/poster_path`}
            src={"https://picsum.photos/85/120"}
            width="85"
            height="120"
          />
          <StyledSection>
            <Heading title="title" size="14" as="h3" />
            <Rating voteAverage="5" />
            <StyledDiv>
              <Label title="horror" />
              <Label title="thriller" />
              <Label title="documentary" />
            </StyledDiv>
            <Release date="11.11.2012" />
          </StyledSection>
        </StyledArticle>
      </Link>
      {/* ))} */}
    </section>
  );
};

export default Favorite;
