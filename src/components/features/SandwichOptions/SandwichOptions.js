import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import { TextFieldRoot, Error } from "../../common/FormStyles/FormStyles";
import { useTheme } from "@material-ui/core/styles";

const SandwichOptions = ({ required }) => {
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const maxValue = (max) => (value) =>
    isNaN(value) || value <= max ? undefined : `Should be less than ${max}`;

  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  const theme = useTheme().palette.primary;

  return (
    <Field
      name="slices_of_bread"
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
          <React.Fragment>
            <TextFieldRoot
              label="Slices of bread"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fontcolor={theme.main}
              error={error && touched && true}
              name={name}
              value={value}
              onChange={(e) => onChange(parseInt(e.target.value))}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
            />
            {error && touched && <Error>{error}</Error>}
          </React.Fragment>
        );
      }}
    </Field>
  );
};

SandwichOptions.propTypes = {
  required: PropTypes.func,
};

export default SandwichOptions;
