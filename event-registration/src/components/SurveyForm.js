import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useSurveyForm";
import axios from "axios";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) errors.fullName = "Full Name is required";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Valid email is required";
  if (!values.surveyTopic) errors.surveyTopic = "Survey Topic is required";
  if (
    values.surveyTopic === "Technology" &&
    !values.favoriteProgrammingLanguage
  )
    errors.favoriteProgrammingLanguage =
      "Favorite Programming Language is required";
  if (
    values.surveyTopic === "Technology" &&
    (!values.yearsOfExperience || values.yearsOfExperience <= 0)
  ) {
    errors.yearsOfExperience =
      "Years of Experience is required and must be greater than 0";
  }
  if (values.surveyTopic === "Health" && !values.exerciseFrequency)
    errors.exerciseFrequency = "Exercise Frequency is required";
  if (values.surveyTopic === "Health" && !values.dietPreference)
    errors.dietPreference = "Diet Preference is required";
  if (values.surveyTopic === "Education" && !values.highestQualification)
    errors.highestQualification = "Highest Qualification is required";
  if (values.surveyTopic === "Education" && !values.fieldOfStudy)
    errors.fieldOfStudy = "Field of Study is required";
  if (!values.feedback || values.feedback.length < 50)
    errors.feedback = "Feedback is required and must be at least 50 characters";
  return errors;
};

const SurveyForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      fullName: "",
      email: "",
      surveyTopic: "",
      favoriteProgrammingLanguage: "",
      yearsOfExperience: "",
      exerciseFrequency: "",
      dietPreference: "",
      highestQualification: "",
      fieldOfStudy: "",
      feedback: "",
    },
    validate
  );

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.values.surveyTopic) {
      axios
        .get(
          `http://api.example.com/questions?topic=${formData.values.surveyTopic}`
        )
        .then((response) => {
          setAdditionalQuestions(response.data.questions);
        })
        .catch((error) => {
          console.error("Error fetching additional questions:", error);
        });
    }
  }, [formData.values.surveyTopic]);

  useEffect(() => {
    const savedData = localStorage.getItem("surveyForm");
    if (savedData) {
      formData.setValues(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem("surveyForm", JSON.stringify(formData.values));
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
          Survey Form
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
          value={formData.values.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <FormControl fullWidth margin="normal" error={!!errors.surveyTopic}>
          <InputLabel>Survey Topic</InputLabel>
          <Select
            name="surveyTopic"
            value={formData.values.surveyTopic}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
          </Select>
          {errors.surveyTopic && <p>{errors.surveyTopic}</p>}
        </FormControl>
        {formData.values.surveyTopic === "Technology" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.favoriteProgrammingLanguage}
            >
              <InputLabel>Favorite Programming Language</InputLabel>
              <Select
                name="favoriteProgrammingLanguage"
                value={formData.values.favoriteProgrammingLanguage}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="C#">C#</MenuItem>
              </Select>
              {errors.favoriteProgrammingLanguage && (
                <p>{errors.favoriteProgrammingLanguage}</p>
              )}
            </FormControl>
            <TextField
              label="Years of Experience"
              name="yearsOfExperience"
              type="number"
              value={formData.values.yearsOfExperience}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.yearsOfExperience}
              helperText={errors.yearsOfExperience}
            />
          </>
        )}
        {formData.values.surveyTopic === "Health" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.exerciseFrequency}
            >
              <InputLabel>Exercise Frequency</InputLabel>
              <Select
                name="exerciseFrequency"
                value={formData.values.exerciseFrequency}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Rarely">Rarely</MenuItem>
              </Select>
              {errors.exerciseFrequency && <p>{errors.exerciseFrequency}</p>}
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.dietPreference}
            >
              <InputLabel>Diet Preference</InputLabel>
              <Select
                name="dietPreference"
                value={formData.values.dietPreference}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                <MenuItem value="Vegan">Vegan</MenuItem>
                <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
              </Select>
              {errors.dietPreference && <p>{errors.dietPreference}</p>}
            </FormControl>
          </>
        )}
        {formData.values.surveyTopic === "Education" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.highestQualification}
            >
              <InputLabel>Highest Qualification</InputLabel>
              <Select
                name="highestQualification"
                value={formData.values.highestQualification}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                <MenuItem value="Master's">Master's</MenuItem>
                <MenuItem value="PhD">PhD</MenuItem>
              </Select>
              {errors.highestQualification && (
                <p>{errors.highestQualification}</p>
              )}
            </FormControl>
            <TextField
              label="Field of Study"
              name="fieldOfStudy"
              value={formData.values.fieldOfStudy}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.fieldOfStudy}
              helperText={errors.fieldOfStudy}
            />
          </>
        )}
        <TextField
          label="Feedback"
          name="feedback"
          value={formData.values.feedback}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          error={!!errors.feedback}
          helperText={errors.feedback}
        />
        {additionalQuestions.map((question, index) => (
          <TextField
            key={index}
            label={question.label}
            name={question.name}
            value={formData.values[question.name] || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        ))}
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

export default SurveyForm;
