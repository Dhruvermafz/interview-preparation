import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventRegistrationForm from "./components/Form";
import JobApplicationForm from "./components/JobApplicationForm";
import SurveyForm from "./components/SurveyForm";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              component={Link}
              to="/"
            >
              Form Management
            </Typography>

            <Button color="inherit" component={Link} to="/event-registration">
              Event Registration
            </Button>
            <Button color="inherit" component={Link} to="/job-application">
              Job Application
            </Button>
            <Button color="inherit" component={Link} to="/survey">
              Survey
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/event-registration"
            element={<EventRegistrationForm />}
          />
          <Route path="/job-application" element={<JobApplicationForm />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
