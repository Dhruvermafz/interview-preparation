import React from "react";
import { useForm } from "../hooks/useForm";
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Valid email is required";
  if (!values.age || values.age <= 0) errors.age = "Age must be greater than 0";
  if (values.isAttendingWithGuest && !values.guestName)
    errors.guestName = "Guest name is required";
  return errors;
};

const Form = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      age: "",
      isAttendingWithGuest: false,
      guestName: "",
    },
    validate
  );

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={(e) =>
          handleSubmit(e, () =>
            alert(
              `Form submitted successfully: ${JSON.stringify(
                formData,
                null,
                2
              )}`
            )
          )
        }
        noValidate
        sx={{ mt: 3 }}
      >
        <Typography variant="h4" gutterBottom>
          Event Registration
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.age}
          helperText={errors.age}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="isAttendingWithGuest"
              checked={formData.isAttendingWithGuest}
              onChange={handleChange}
            />
          }
          label="Are you attending with a guest?"
        />
        {formData.isAttendingWithGuest && (
          <TextField
            label="Guest Name"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.guestName}
            helperText={errors.guestName}
          />
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
