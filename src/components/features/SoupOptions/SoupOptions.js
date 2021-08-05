import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import { SliderRoot, InputLabelRoot, Error } from "../../common/FormStyles/FormStyles";
import { useTheme } from "@material-ui/core/styles";

const SoupOptions = ({ required }) => {
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
    <FormControl>
      <InputLabelRoot id="spiciness" fontcolor={theme.main}>
        Spiciness scale
      </InputLabelRoot>
      <Field
        name="spiciness_scale"
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
              <SliderRoot
                aria-labelledby="spiciness"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
                fontcolor={theme.main}
                name={name}
                value={value}
                onChange={(e, v) => onChange(v)}
                error={error && touched && true}
              />
              {error && touched && <Error>{error}</Error>}
            </React.Fragment>
          );
        }}
      </Field>
    </FormControl>
  );
};

SoupOptions.propTypes = {
  required: PropTypes.func,
};

export default SoupOptions;
