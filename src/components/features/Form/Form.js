import React, { useState } from "react";
import styled from "styled-components";
import { Form as FormField, Field } from "react-final-form";
import {
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PizzaOptions from '../PizzaOptions/PizzaOptions';
import {TextFieldRoot, TimePickerRoot, FormControlRoot} from '../common/FormStyles';
import SandwitchOptions from "../SandwitchOptions/SandwitchOptions";
import SoupOptions from "../SoupOptions/SoupOptions";

const FormRoot = styled.form`
  display: grid;
`;

const Form = () => {
  const theme = useTheme().palette.primary;
  const [dishType, setDishType] = useState(null);
  const dishTypes = ["pizza", "soup", "sandwitch"];

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleDishType = (e, onChange) => {
    onChange(e);
    setDishType(e.target.value);
  };
  const newDate = new Date(0);
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
                  autoComplete="off"
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
          <Field
            name="preparation_time"
            initialValue={newDate}
            validate={required}
          >
            {(props) => {
              const { name, value, onChange } = props.input;
              const { error, touched } = props.meta;

              return (
                <TimePickerRoot
                  name={name}
                  fontcolor={theme.main}
                  ampm={false}
                  openTo="hours"
                  views={["hours", "minutes", "seconds"]}
                  format="HH:mm:ss"
                  label="Preparation time"
                  value={value}
                  onChange={onChange}
                  error={error && touched && true}
                />
              );
            }}
          </Field>
          <Field name="type" validate={required}>
            {(props) => {
              const { name, value, onChange } = props.input;
              const { error, touched } = props.meta;

              return (
                <FormControlRoot fontcolor={theme.main}>
                  <InputLabel id="dish_type">Dish type</InputLabel>
                  <Select
                    error={error && touched && true}
                    name={name}
                    onChange={(e) => handleDishType(e, onChange)}
                    value={value}
                  >
                    <MenuItem value={"pizza"}>Pizza</MenuItem>
                    <MenuItem value={"soup"}>Soup</MenuItem>
                    <MenuItem value={"sandwitch"}>Sandwitch</MenuItem>
                  </Select>
                </FormControlRoot>
              );
            }}
          </Field>
          {dishTypes.map(dish => {
              return dish === dishType &&
                <FormControl key={dish}>
                  {dish === 'pizza' ?
                    <PizzaOptions required={required} />
                    : dish === 'sandwitch' ?
                    <SandwitchOptions required={required} />
                    : dish === 'soup' &&
                    <SoupOptions required={required}/>
                   }
                </FormControl>
            })}
          <Button type="submit">Send</Button>
        </FormRoot>
      )}
    </FormField>
  );
};

export default Form;
