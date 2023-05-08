import styled from "styled-components";
import Image from "./Image";

const StyledFigure = styled.figure`
  flex-basis: 20%;
`;
const StyledFigCaption = styled.figcaption`
  margin-top: 10px;
  font-size: 12px;
  word-wrap: break-word;
`;

const Actor = (props) => {

  return (
    <StyledFigure>
      <Image src={props.imgsrc} objectFit={true} width="75" height="75" />
      <StyledFigCaption>Name Lastname</StyledFigCaption>
    </StyledFigure>
  );
};

export default Actor;
