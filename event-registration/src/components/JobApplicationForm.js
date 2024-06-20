import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useApplicationForm";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) errors.fullName = "Full Name is required";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Valid email is required";
  if (!values.phoneNumber) errors.phoneNumber = "Phone Number is required";
  if (
    values.applyingForPosition &&
    !values.relevantExperience &&
    ["Developer", "Designer"].includes(values.applyingForPosition)
  )
    errors.relevantExperience = "Relevant Experience is required";
  if (values.applyingForPosition === "Designer" && !values.portfolioURL)
    errors.portfolioURL = "Portfolio URL is required";
  if (values.applyingForPosition === "Manager" && !values.managementExperience)
    errors.managementExperience = "Management Experience is required";
  if (!values.preferredInterviewTime)
    errors.preferredInterviewTime = "Preferred Interview Time is required";
  return errors;
};

const JobApplicationForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      applyingForPosition: "",
      relevantExperience: "",
      portfolioURL: "",
      managementExperience: "",
      preferredInterviewTime: "",
      additionalSkills: [],
    },
    validate
  );

  useEffect(() => {
    const savedData = localStorage.getItem("jobApplicationForm");
    if (savedData) {
      formData.setValues(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem("jobApplicationForm", JSON.stringify(formData.values));
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
          Job Application
        </Typography>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.values.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.fullName}
          helperText={errors.fullName}
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
          label="Phone Number"
          name="phoneNumber"
          value={formData.values.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <FormControl
          fullWidth
          margin="normal"
          error={!!errors.applyingForPosition}
        >
          <InputLabel>Applying for Position</InputLabel>
          <Select
            name="applyingForPosition"
            value={formData.values.applyingForPosition}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </Select>
          {errors.applyingForPosition && <p>{errors.applyingForPosition}</p>}
        </FormControl>
        {["Developer", "Designer"].includes(
          formData.values.applyingForPosition
        ) && (
          <TextField
            label="Relevant Experience (years)"
            name="relevantExperience"
            type="number"
            value={formData.values.relevantExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.relevantExperience}
            helperText={errors.relevantExperience}
          />
        )}
        {formData.values.applyingForPosition === "Designer" && (
          <TextField
            label="Portfolio URL"
            name="portfolioURL"
            value={formData.values.portfolioURL}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.portfolioURL}
            helperText={errors.portfolioURL}
          />
        )}
        {formData.values.applyingForPosition === "Manager" && (
          <TextField
            label="Management Experience"
            name="managementExperience"
            value={formData.values.managementExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.managementExperience}
            helperText={errors.managementExperience}
          />
        )}
        <TextField
          label="Preferred Interview Time"
          name="preferredInterviewTime"
          type="datetime-local"
          value={formData.values.preferredInterviewTime}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.preferredInterviewTime}
          helperText={errors.preferredInterviewTime}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box mt={2}>
          <Typography variant="h6">Additional Skills</Typography>
          <FormControlLabel
            control={
              <Checkbox
                name="additionalSkills"
                value="JavaScript"
                checked={formData.values.additionalSkills.includes(
                  "JavaScript"
                )}
                onChange={handleChange}
              />
            }
            label="JavaScript"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="additionalSkills"
                value="Python"
                checked={formData.values.additionalSkills.includes("Python")}
                onChange={handleChange}
              />
            }
            label="Python"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="additionalSkills"
                value="Project Management"
                checked={formData.values.additionalSkills.includes(
                  "Project Management"
                )}
                onChange={handleChange}
              />
            }
            label="Project Management"
          />
        </Box>
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

export default JobApplicationForm;
