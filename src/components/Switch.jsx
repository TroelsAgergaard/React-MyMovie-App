import { useState } from "react";
import ReactSwitch from "react-switch";
import styled from "styled-components";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  grid-row-start: 1;
  justify-self: ${(props) => props.justify};
  align-self: ${(props) => props.align};
`;

const Switch = (props) => {
  let [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <StyledSwitch
      {...props}
      height={21}
      width={38}
      offColor="#AAA9B1"
      onColor="#FFF"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Switch;
