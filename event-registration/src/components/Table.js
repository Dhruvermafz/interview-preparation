import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TableComponent = () => {
  const eventRegistrationData =
    JSON.parse(localStorage.getItem("eventRegistrationForm")) || [];
  const jobApplicationData =
    JSON.parse(localStorage.getItem("jobApplicationForm")) || [];
  const surveyData = JSON.parse(localStorage.getItem("surveyForm")) || [];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Form Submissions
      </Typography>

      <Typography variant="h5" gutterBottom>
        Event Registration
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Attending with Guest</TableCell>
              <TableCell>Guest Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{eventRegistrationData.name}</TableCell>
              <TableCell>{eventRegistrationData.email}</TableCell>
              <TableCell>{eventRegistrationData.age}</TableCell>
              <TableCell>{eventRegistrationData.attendingWithGuest}</TableCell>
              <TableCell>{eventRegistrationData.guestName}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Job Application
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Applying for Position</TableCell>
              <TableCell>Relevant Experience</TableCell>
              <TableCell>Portfolio URL</TableCell>
              <TableCell>Management Experience</TableCell>
              <TableCell>Preferred Interview Time</TableCell>
              <TableCell>Additional Skills</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{jobApplicationData.fullName}</TableCell>
              <TableCell>{jobApplicationData.email}</TableCell>
              <TableCell>{jobApplicationData.phoneNumber}</TableCell>
              <TableCell>{jobApplicationData.applyingForPosition}</TableCell>
              <TableCell>{jobApplicationData.relevantExperience}</TableCell>
              <TableCell>{jobApplicationData.portfolioURL}</TableCell>
              <TableCell>{jobApplicationData.managementExperience}</TableCell>
              <TableCell>{jobApplicationData.preferredInterviewTime}</TableCell>
              <TableCell>
                {(jobApplicationData.additionalSkills || []).join(", ")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Survey
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Survey Topic</TableCell>
              <TableCell>Favorite Programming Language</TableCell>
              <TableCell>Years of Experience</TableCell>
              <TableCell>Exercise Frequency</TableCell>
              <TableCell>Diet Preference</TableCell>
              <TableCell>Highest Qualification</TableCell>
              <TableCell>Field of Study</TableCell>
              <TableCell>Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{surveyData.fullName}</TableCell>
              <TableCell>{surveyData.email}</TableCell>
              <TableCell>{surveyData.surveyTopic}</TableCell>
              <TableCell>{surveyData.favoriteProgrammingLanguage}</TableCell>
              <TableCell>{surveyData.yearsOfExperience}</TableCell>
              <TableCell>{surveyData.exerciseFrequency}</TableCell>
              <TableCell>{surveyData.dietPreference}</TableCell>
              <TableCell>{surveyData.highestQualification}</TableCell>
              <TableCell>{surveyData.fieldOfStudy}</TableCell>
              <TableCell>{surveyData.feedback}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableComponent;
