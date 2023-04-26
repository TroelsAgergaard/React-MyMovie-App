import styled from "styled-components";

const StyledSpan = styled.span`
  width: fit-content;
  padding 4px 12px;
  background-color: #DBE3FF;
  color: #88A4E8;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 8px;
`;

const Label = (props) => {
  return <StyledSpan>{props.title}</StyledSpan>;
};

export default Label;
