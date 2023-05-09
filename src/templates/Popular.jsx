import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import Image from "../components/Image";
import Label from "../components/Label";
import Time from "../components/Time";
import coverimage from "../assets/moviecover.png";
import { Link, useLoaderData } from "react-router-dom";

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

const Popular = () => {
  const MovieData = useLoaderData();

  return (
    <>
      {MovieData.popular.map((data) => (
        <StyledArticle>
          <Image src={coverimage} width="85" height="120" />
          <StyledSection>
            <Heading title={data.title} size="14" as="h3" />
            <Rating />
            <StyledDiv>
              <Label title="horror" />
              <Label title="thriller" />
              <Label title="documentary" />
            </StyledDiv>
            <Time />
          </StyledSection>
        </StyledArticle>
      ))}
    </>
  );
};

export default Popular;
