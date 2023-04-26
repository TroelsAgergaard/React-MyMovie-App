import { FaRegClock } from "react-icons/fa";
import styled from "styled-components";

const StyledP = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 100;
`;

const Time = () => {
  return (
    <StyledP>
      <FaRegClock />
      1h 47m
    </StyledP>
  );
};

export default Time;
