import { TimePicker } from "@material-ui/pickers";
import { TextField, FormControl, Slider, InputLabel } from "@material-ui/core";
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
`;
