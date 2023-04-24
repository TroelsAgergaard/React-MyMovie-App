import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size};
  color: #110e47;
  justify-self: center;
`;

const Heading = ({ text }) => {
  return <StyledHeading>{text}</StyledHeading>;
};
// const Heading = (props) => {
//   return <StyledHeading>{props.text}</StyledHeading>;
// };
export default Heading;
