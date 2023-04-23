import styled from "styled-components";
import { useState } from "react";
import ToggleSwitch from "react-switch";

const StyledToggleSwitch = styled(ToggleSwitch)`
  justify-self: end;
`;

const Switch = () => {
  const [theme, setTheme] = useState(false);
  const handleStage = () => {
    setTheme(!theme);
  };
  return (
    <StyledToggleSwitch
      height={21}
      width={38}
      offColor="#AAA9B1"
      onColor="#AAA9B1"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={handleStage}
      checked={theme}
    />
  );
};

export default Switch;
