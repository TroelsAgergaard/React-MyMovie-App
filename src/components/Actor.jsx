import styled from "styled-components";
import Image from "./Image";

const StyledFigure = styled.figure`
  flex-basis: 20%;
  margin-bottom: 1rem;
`;
const StyledFigCaption = styled.figcaption`
  margin-top: 5px;
  font-size: 12px;
  word-wrap: break-word;
`;

const Actor = ({ data }) => {
  return (
    <StyledFigure>
      <Image
        src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`}
        objectFit={true}
        width="75"
        height="75"
      />
      <StyledFigCaption>{data.name}</StyledFigCaption>
    </StyledFigure>
  );
};

export default Actor;
