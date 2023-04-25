import styled from "styled-components";
import { useState } from "react";
import ReactSwitch from "react-switch";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  justify-self: end;
`;

const Switch = () => {
  let [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <StyledSwitch
      height={21}
      width={38}
      offColor="#AAA9B1"
      onColor="#AAA9B1"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Switch;
