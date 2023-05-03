import styled, { css } from "styled-components";

const StyledImg = styled.img`
  ${(props) =>
    (props.shadow &&
      css`
        box-shadow: 0px 5px 10px rgb(0 0 0 / 0.35);
      `) ||
    (props.objectFit &&
      css`
        object-fit: cover;
      `)}

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
`;
const Image = (props) => {
  return <StyledImg {...props} />;
};
export default Image;
