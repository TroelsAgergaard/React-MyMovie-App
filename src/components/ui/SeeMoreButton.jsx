import styled from "styled-components";

const Button = styled.button`
  width: 61px;
  height: 21px;
  background-color: white;
  color: #aaa9b1;
  border: solid 1px;
  border-color: #aaa9b1;
  border-radius: 25px;
  font-size: 10px;
`;

const SeeMoreButton = () => {
  const handleClick = () => console.log("The button has been clicked...");
  return <Button onClick={handleClick}>See more</Button>;
};

export default SeeMoreButton;