import React from "react";
import { Container, Typography, Box, Paper, Link } from "@mui/material";

const IndexPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          {/* Introduction */}
          <Typography variant="h4" gutterBottom>
            Welcome to the assignment
          </Typography>
          <Typography variant="body1" paragraph>
            Hi, I'm Dhruv Verma, a passionate software engineering fresher with
            a strong background in web development and a keen interest in the
            latest technologies. With a proven track record of developing
            high-quality applications.
          </Typography>
          <Typography variant="body1" paragraph>
            Check out my work on{" "}
            <Link
              href="https://github.com/Dhruvermafz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            , or connect with me on{" "}
            <Link
              href="https://linkedin.com/in/dhruvermafz"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            .
          </Typography>
          <Typography variant="body1" paragraph>
            My expertise lies in front-end development, particularly with
            JavaScript frameworks such as React, and Next.Js. I also have
            experience with backend technologies including Node.js, Express, and
            databases like MongoDB and MySQl.
          </Typography>
          <Typography variant="body1" paragraph>
            I enjoy working on challenging projects that require innovative
            solutions and continuous learning.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default IndexPage;
