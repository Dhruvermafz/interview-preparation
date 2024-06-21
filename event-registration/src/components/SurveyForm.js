import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useSurveyForm";
import axios from "axios";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
  TextareaAutosize,
  FormGroup,
  FormControlLabel,
  Checkbox,
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
    if (formData.surveyTopic) {
      axios
        .get(`https://api.example.com/questions?topic=${formData.surveyTopic}`)
        .then((response) => {
          setAdditionalQuestions(response.data.questions);
        })
        .catch((error) => {
          console.error("Error fetching additional questions:", error);
        });
    }
  }, [formData.surveyTopic]);

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
              )}\nAdditional Questions: ${JSON.stringify(
                additionalQuestions,
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
          Survey Form
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
        <FormControl fullWidth margin="normal" error={!!errors.surveyTopic}>
          <InputLabel>Survey Topic</InputLabel>
          <Select
            name="surveyTopic"
            value={formData.surveyTopic}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
          </Select>
        </FormControl>
        {formData.surveyTopic === "Technology" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.favoriteProgrammingLanguage}
            >
              <InputLabel>Favorite Programming Language</InputLabel>
              <Select
                name="favoriteProgrammingLanguage"
                value={formData.favoriteProgrammingLanguage}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="C#">C#</MenuItem>
              </Select>
            </FormControl>
            {errors.favoriteProgrammingLanguage && (
              <Typography color="error">
                {errors.favoriteProgrammingLanguage}
              </Typography>
            )}
            <TextField
              label="Years of Experience"
              name="yearsOfExperience"
              type="number"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.yearsOfExperience}
              helperText={errors.yearsOfExperience}
            />
          </>
        )}
        {formData.surveyTopic === "Health" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.exerciseFrequency}
            >
              <InputLabel>Exercise Frequency</InputLabel>
              <Select
                name="exerciseFrequency"
                value={formData.exerciseFrequency}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Rarely">Rarely</MenuItem>
              </Select>
            </FormControl>
            {errors.exerciseFrequency && (
              <Typography color="error">{errors.exerciseFrequency}</Typography>
            )}
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.dietPreference}
            >
              <InputLabel>Diet Preference</InputLabel>
              <Select
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                <MenuItem value="Vegan">Vegan</MenuItem>
                <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
              </Select>
            </FormControl>
            {errors.dietPreference && (
              <Typography color="error">{errors.dietPreference}</Typography>
            )}
          </>
        )}
        {formData.surveyTopic === "Education" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.highestQualification}
            >
              <InputLabel>Highest Qualification</InputLabel>
              <Select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                <MenuItem value="Master's">Master's</MenuItem>
                <MenuItem value="PhD">PhD</MenuItem>
              </Select>
            </FormControl>
            {errors.highestQualification && (
              <Typography color="error">
                {errors.highestQualification}
              </Typography>
            )}
            <TextField
              label="Field of Study"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
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
          value={formData.feedback}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.feedback}
          helperText={errors.feedback}
          multiline
          minRows={3}
        />
        {additionalQuestions.length > 0 && (
          <Box mt={3}>
            <Typography variant="h6">Additional Questions</Typography>
            {additionalQuestions.map((question, index) => (
              <TextField
                key={index}
                label={question}
                name={`additionalQuestion_${index}`}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            ))}
          </Box>
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

export default SurveyForm;
