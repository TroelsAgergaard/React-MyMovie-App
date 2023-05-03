import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import Label from "../components/Label";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledFaRegBookmark = styled(FaRegBookmark)`
  align-self: center;
`;
const StyledGridSection = styled.section`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
`;
const StyledFlexSection = styled.section`
  display: flex;
  gap: 8px;
`;
const StyledP = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
`;

const MovieInfo = () => {
  return (
    <StyledSection>
      <div className="flexContainer justify-space-between">
        <Heading title="Spiderman: No Way Home" size="20" as="h1" />
        <StyledFaRegBookmark />
      </div>
      <Rating />
      <StyledFlexSection>
        <Label title="action" />
        <Label title="action" />
        <Label title="action" />
      </StyledFlexSection>
      <StyledGridSection>
        <Heading title="Length" size="12" as="h4" />
        <Heading title="Langauge" size="12" as="h4" />
        <Heading title="Rating" size="12" as="h4" />
        <StyledP>Length4</StyledP>
        <StyledP>Length4</StyledP>
        <StyledP>Length4</StyledP>
      </StyledGridSection>
    </StyledSection>
  );
};

export default MovieInfo;
