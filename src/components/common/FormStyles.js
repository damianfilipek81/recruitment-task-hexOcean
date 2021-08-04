import { TimePicker } from "@material-ui/pickers";
import {
  TextField,
  FormControl,
  Slider,
  InputLabel,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

export const TextFieldRoot = styled(TextField)`
  div,
  label,
  p {
    color: ${({ fontcolor }) => fontcolor};
  }
`;

export const TimePickerRoot = styled(TimePicker)`
  div,
  label {
    color: ${({ fontcolor }) => fontcolor};
  }
`;

export const FormControlRoot = styled(FormControl)`
  label,
  div,
  svg {
    color: ${({ fontcolor }) => fontcolor};
  }
`;

export const SliderRoot = styled(Slider)`
  label,
  div,
  svg {
    color: ${({ fontcolor }) => fontcolor};
  }
`;

export const InputLabelRoot = styled(InputLabel)`
  color: ${({ fontcolor }) => fontcolor} !important;
  label {
    color: ${({ fontcolor }) => fontcolor} !important;
  }
`;

export const ButtonRoot = styled(Button)`
  width: 150px;
`;

export const FormRoot = styled.form`
  display: flex;
  width: 400px;
  padding: 50px;
  background: #fff;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  
  div {
    width: 100%;
    margin: 7px 0;
  }
`;
