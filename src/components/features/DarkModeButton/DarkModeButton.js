import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Switch from "@material-ui/core/Switch";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { changeDarkMode } from "../../../redux/darkModeRedux";
import styled from 'styled-components';

const Icon = styled(Brightness5Icon)`
  color: #EBE53B;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
`
const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const setDarkModeHandler= () =>{
    setDarkMode(!darkMode);
  } 
  dispatch(changeDarkMode(darkMode));
  return (
    <Wrapper>
      <Switch
        checked={darkMode}
        onChange={setDarkModeHandler}
        name="checkedA"
        inputProps={{ "aria-label": "primary checkbox" }}
        color="primary"
      />
      <Icon />
    </Wrapper>
  );
};

export default DarkModeButton;