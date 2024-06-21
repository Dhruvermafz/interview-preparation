import React from "react";
import { useForm } from "../hooks/useApplicationForm";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
  FormGroup,
} from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) errors.fullName = "Full Name is required";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Valid email is required";
  if (!values.phoneNumber || isNaN(values.phoneNumber))
    errors.phoneNumber = "Valid phone number is required";
  if (
    ["Developer", "Designer"].includes(values.position) &&
    (!values.relevantExperience || values.relevantExperience <= 0)
  ) {
    errors.relevantExperience =
      "Relevant experience is required and must be greater than 0";
  }
  if (values.position === "Designer" && !values.portfolioURL) {
    errors.portfolioURL = "Portfolio URL is required";
  }
  if (values.position === "Manager" && !values.managementExperience) {
    errors.managementExperience = "Management experience is required";
  }
  if (values.additionalSkills.length === 0)
    errors.additionalSkills = "At least one skill must be selected";
  if (!values.preferredInterviewTime)
    errors.preferredInterviewTime = "Preferred interview time is required";
  return errors;
};

const JobApplicationForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      position: "",
      relevantExperience: "",
      portfolioURL: "",
      managementExperience: "",
      additionalSkills: [],
      preferredInterviewTime: "",
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
          Job Application Form
        </Typography>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
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
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <FormControl fullWidth margin="normal" error={!!errors.position}>
          <InputLabel>Applying for Position</InputLabel>
          <Select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </Select>
        </FormControl>
        {["Developer", "Designer"].includes(formData.position) && (
          <TextField
            label="Relevant Experience (Years)"
            name="relevantExperience"
            type="number"
            value={formData.relevantExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.relevantExperience}
            helperText={errors.relevantExperience}
          />
        )}
        {formData.position === "Designer" && (
          <TextField
            label="Portfolio URL"
            name="portfolioURL"
            value={formData.portfolioURL}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.portfolioURL}
            helperText={errors.portfolioURL}
          />
        )}
        {formData.position === "Manager" && (
          <TextField
            label="Management Experience"
            name="managementExperience"
            value={formData.managementExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.managementExperience}
            helperText={errors.managementExperience}
          />
        )}
        <FormControl component="fieldset" margin="normal">
          <Typography>Additional Skills:</Typography>
          <FormGroup>
            {["JavaScript", "CSS", "Python"].map((skill) => (
              <FormControlLabel
                control={
                  <Checkbox
                    name="additionalSkills"
                    value={skill}
                    checked={formData.additionalSkills.includes(skill)}
                    onChange={handleChange}
                  />
                }
                label={skill}
                key={skill}
              />
            ))}
          </FormGroup>
        </FormControl>
        {errors.additionalSkills && (
          <Typography color="error">{errors.additionalSkills}</Typography>
        )}
        <TextField
          label="Preferred Interview Time"
          name="preferredInterviewTime"
          type="datetime-local"
          value={formData.preferredInterviewTime}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.preferredInterviewTime}
          helperText={errors.preferredInterviewTime}
          InputLabelProps={{ shrink: true }}
        />
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

export default JobApplicationForm;
