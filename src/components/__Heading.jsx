import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size};
  color: #110e47;
  justify-self: center;
  grid-column-start: 2;
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
