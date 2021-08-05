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

    &::before {
      border-color: ${({ fontcolor }) => fontcolor};
    }
  }
`;

export const TimePickerRoot = styled(TimePicker)`
  div,
  label {
    color: ${({ fontcolor }) => fontcolor};
    &::before {
      border-color: ${({ fontcolor }) => fontcolor};
    }
  }
`;

export const FormControlRoot = styled(FormControl)`
  label,
  div,
  svg {
    color: ${({ fontcolor }) => fontcolor};
    &::before {
      border-color: ${({ fontcolor }) => fontcolor};
    }
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
  border: 1px solid !important;
  border-color: ${({ theme }) => theme} !important;
  color: ${({ theme }) => theme} !important;
`;

export const FormRoot = styled.form`
  display: flex;
  width: 400px;
  padding: 50px;
  background: ${({ theme }) => theme};
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

export const Error = styled.span`
  color: #f12f42;
  text-align: center;
  font-size: 12px;
`;

export const FormSent = styled.span`
  color: ${({ theme }) => theme};
  font-size: 25px;
`;
