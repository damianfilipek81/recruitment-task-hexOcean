import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSendForm, getLoadingData } from "../../../redux/formRedux";
import { Form as FormField, Field } from "react-final-form";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PizzaOptions from "../PizzaOptions/PizzaOptions";
import {
  TextFieldRoot,
  TimePickerRoot,
  FormControlRoot,
  FormRoot,
  ButtonRoot,
  Error,
  FormSent,
} from "../../common/FormStyles/FormStyles";
import SandwichOptions from "../SandwichOptions/SandwichOptions";
import SoupOptions from "../SoupOptions/SoupOptions";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const theme = useTheme().palette.primary;
  const [dishType, setDishType] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingData).error;
  const dishTypes = ["pizza", "soup", "sandwich"];
  const newDate = new Date(0);
  const required = (value) => (value ? undefined : "Required");

  const onSubmit = (values) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      preparation_time: values.preparation_time.toLocaleTimeString(),
      type: values.type,
    };

    if (values.type === "pizza") {
      data.no_of_slices = values.no_of_slices;
      data.diameter = values.diameter;
    } else if (values.type === "soup") {
      data.spiciness_scale = values.spiciness_scale;
    } else if (values.type === "sandwich") {
      data.slices_of_bread = values.slices_of_bread;
    }
    dispatch(fetchSendForm(data));
    setFormSent(true);
    setTimeout(() => setFormSent(false), 10000);
  };

  const handleDishType = (e, onChange) => {
    onChange(e);
    setDishType(e.target.value);
  };

  return (
    <FormField onSubmit={onSubmit}>
      {(props) => (
        <FormRoot
          onSubmit={(e) => {
            props.handleSubmit(e);
            props.form.reset();
          }}
          theme={theme.light}
        >
          {formSent && loading === false ? (
            <FormSent theme={theme.main}>Form has been sent! </FormSent>
          ) : (
            formSent &&
            loading && <FormSent theme={theme.main}>Error! </FormSent>
          )}
          <Field name="name" validate={required}>
            {(props) => {
              const { name, value, onChange } = props.input;
              const { error, touched } = props.meta;
              return (
                <React.Fragment>
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
                  {error && touched && <Error>{error}</Error>}
                </React.Fragment>
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
                  <InputLabel id="dish_type" error={error && touched && true}>
                    Dish type
                  </InputLabel>
                  <Select
                    error={error && touched && true}
                    name={name}
                    onChange={(e) => handleDishType(e, onChange)}
                    value={value}
                  >
                    <MenuItem value={"pizza"}>Pizza</MenuItem>
                    <MenuItem value={"soup"}>Soup</MenuItem>
                    <MenuItem value={"sandwich"}>sandwich</MenuItem>
                  </Select>
                  {error && touched && <Error>{error}</Error>}
                </FormControlRoot>
              );
            }}
          </Field>
          {dishTypes.map((dish) => {
            return (
              dish === dishType && (
                <FormControl key={dish}>
                  {dish === "pizza" ? (
                    <PizzaOptions required={required} />
                  ) : dish === "sandwich" ? (
                    <SandwichOptions required={required} />
                  ) : (
                    dish === "soup" && <SoupOptions required={required} />
                  )}
                </FormControl>
              )
            );
          })}
          <ButtonRoot type="submit" theme={theme.main}>
            Send
          </ButtonRoot>
        </FormRoot>
      )}
    </FormField>
  );
};

export default Form;
