import styled, { css } from "styled-components";
import coverimage from "../assets/moviecover.png";

const StyledImg = styled.img`
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 5px 10px rgb(0 0 0 / 0.35);
    `}
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
`;
const Image = (props) => {
  return <StyledImg {...props} src={coverimage} alt="blablabla" />;
};
export default Image;
