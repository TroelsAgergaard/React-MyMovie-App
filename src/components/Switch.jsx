import { useOutletContext } from "react-router-dom";
import ReactSwitch from "react-switch";
import styled from "styled-components";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  grid-row-start: 1;
  justify-self: ${(props) => props.justify};
  align-self: ${(props) => props.align};
`;

const Switch = (props) => {
  const [darkmode, setDarkmode] = useOutletContext();
  const handleChange = () => {
    setDarkmode(!darkmode);
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
      checked={darkmode}
      onChange={handleChange}
    />
  );
};

export default Switch;
