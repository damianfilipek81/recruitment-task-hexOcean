import React from "react";
import styled from "styled-components";
import { Form as FormField, Field } from "react-final-form";
import { Button, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const FormRoot = styled.form`
  display: grid;
`;

const TextFieldRoot = styled(TextField)`
  div {
    color: ${({ fontcolor }) => fontcolor};
    position: relative;
  }
`;

const Form = () => {
  const theme = useTheme().palette.primary;
  const onSubmit = (values) => {
    console.log(values);
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <FormField onSubmit={onSubmit}>
      {(props) => (
        <FormRoot
          onSubmit={(e) => {
            props.handleSubmit(e);
            props.form.reset();
          }}
        >
          <Field name="name" validate={required}>
            {(props) => {
              const { name, value, onChange } = props.input;
              const { error, touched } = props.meta;
              return (
                <TextFieldRoot
                  color="primary"
                  fontcolor={theme.main}
                  name={name}
                  onChange={onChange}
                  value={value}
                  error={error && touched && true}
                  label="Dish name"
                />
              );
            }}
          </Field>
          <Button type="submit">Send</Button>
        </FormRoot>
      )}
    </FormField>
  );
};

export default Form;
