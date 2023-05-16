import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledFaStar = styled(FaStar)`
  color: #ffc319;
`;
const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
`;
const StyledDiv = styled.div`
  display: flex;
`;

const Rating = (props) => {
  return (
    <StyledDiv>
      <StyledFaStar />
      <StyledP>{props.voteAverage}/10 IMDb</StyledP>
    </StyledDiv>
  );
};

export default Rating;
