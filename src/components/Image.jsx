import styled from "styled-components";
import coverimage from "../assets/images/moviecover.png";

const StyledImg = styled.img`
  box-shadow: 0px 5px 10px rgb(0 0 0 / 0.5);
`;

const Image = () => {
  return <StyledImg src={coverimage} alt="blablabla" />;
};
export default Image;
