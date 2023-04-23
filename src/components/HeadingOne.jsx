import styled from "styled-components";

const Heading = styled.h1`
  font-size: 16px;
  color: #110e47;a
  border: solid 1px red;
  grid-column-start: 2;
  justify-self: center;
`;

const HeadingOne = () => {
  return <Heading>Overskrift</Heading>;
};
export default HeadingOne;
