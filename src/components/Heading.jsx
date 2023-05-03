import styled, { css } from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  ${(props) =>
    props.as === "h1" &&
    css`
      grid-column-start: 2;
      justify-self: center;
      align-self: center;
    `}
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
