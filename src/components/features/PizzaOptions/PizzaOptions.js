import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import {TextFieldRoot, FormControlRoot} from '../../common/FormStyles';
import { useTheme } from "@material-ui/core/styles";

const PizzaOptions = ({ required }) => {
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const maxValue = (max) => (value) =>
    isNaN(value) || value <= max ? undefined : `Should be less than ${max}`;
    const theme = useTheme().palette.primary;

  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  return (
    <FormControlRoot>
      <Field
        name="no_of_slices"
        initialValue={1}
        validate={composeValidators(
          required,
          mustBeNumber,
          minValue(1),
          maxValue(10)
        )}
      >
        {(props) => {
          const { name, value, onChange } = props.input;
          const { error, touched } = props.meta;

          return (
            <TextFieldRoot
              label="Number of slices"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fontcolor={theme.main}
              name={name}
              value={value}
              onChange={(e) => onChange(parseInt(e.target.value))}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              error={error && touched && true}
            />
          );
        }}
      </Field>
      <Field
        name="diameter"
        initialValue={10}
        validate={composeValidators(
          required,
          mustBeNumber,
          minValue(10),
          maxValue(50)
        )}
      >
        {(props) => {
          const { name, value, onChange } = props.input;
          const { error, touched } = props.meta;

          return (
            <TextFieldRoot
              label="Diameter"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fontcolor={theme.main}
              name={name}
              value={value}
              error={error && touched && true}
              onChange={(e) => onChange(parseFloat(e.target.value))}
              InputProps={{
                inputProps: { min: 10, max: 50, step: 0.1 },
                endAdornment: (
                  <InputAdornment position="end">Cm</InputAdornment>
                ),
              }}
            />
          );
        }}
      </Field>
    </FormControlRoot>
  );
};

PizzaOptions.propTypes = {
  required: PropTypes.func,
};

export default PizzaOptions;
