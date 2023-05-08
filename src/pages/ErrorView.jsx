import Lottie from "lottie-react";
import errorAnimation from "../assets/lottiefiles/erroranimation.json";
import styled from "styled-components";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20vw;
  height: 100vh;
`;
const StyledLottie = styled(Lottie)`
  width: 75vw;
`;

const ErrorView = () => {
  return (
    <StyledDiv>
      <Heading title="Ohh no..." size="16" as="h1" />
      <StyledLottie animationData={errorAnimation} loop={false} />
      <Link to="/">
        <Button title="Take me home" />
      </Link>
    </StyledDiv>
  );
};

export default ErrorView;
