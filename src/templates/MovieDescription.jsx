import styled from "styled-components";
import Heading from "../components/Heading";

const StyledP = styled.p`
  line-height: 1.8rem;
  color: #9c9c9c;
  margin-top: 8px;
`;

const MovieDescription = (props) => {
  return (
    <article>
      <Heading title="Description" size="16" as="h2" />
      <StyledP>
        {props.data.details.overview}
      </StyledP>
    </article>
  );
};

export default MovieDescription;
