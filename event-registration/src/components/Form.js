import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Valid email is required";
  if (!values.age || values.age <= 0) errors.age = "Age must be greater than 0";
  if (values.attendingWithGuest === "Yes" && !values.guestName)
    errors.guestName = "Guest Name is required";
  return errors;
};

const EventRegistrationForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      age: "",
      attendingWithGuest: "No",
      guestName: "",
    },
    validate
  );

  useEffect(() => {
    const savedData = localStorage.getItem("eventRegistrationForm");
    if (savedData) {
      formData.setValues(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem(
      "eventRegistrationForm",
      JSON.stringify(formData.values)
    );
    alert("Form submitted and data saved to localStorage");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(e, saveData)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          Event Registration
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.values.name}
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
          value={formData.values.email}
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
          value={formData.values.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.age}
          helperText={errors.age}
        />
        <TextField
          label="Are you attending with a guest?"
          name="attendingWithGuest"
          value={formData.values.attendingWithGuest}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {formData.values.attendingWithGuest === "Yes" && (
          <TextField
            label="Guest Name"
            name="guestName"
            value={formData.values.guestName}
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
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default EventRegistrationForm;
