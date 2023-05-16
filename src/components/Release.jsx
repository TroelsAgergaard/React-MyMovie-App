import styled from "styled-components";

const StyledP = styled.p`
  color: #9c9c9c;
`;

const Release = (props) => {
  return <StyledP>Release: {props.date}</StyledP>;
};

export default Release;
