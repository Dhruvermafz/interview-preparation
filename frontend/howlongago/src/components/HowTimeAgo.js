import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function HowTimeAgo() {
  const [startDate, setStartDate] = useState("");
  const [timeAgo, setTimeAgo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the difference in milliseconds between the input date and the current date
    const diffMilliseconds = new Date() - new Date(startDate);

    // Convert milliseconds to months, days, hours, minutes, and seconds
    const months = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);

    setTimeAgo({
      months,
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Enter a Date:</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Calculate Time Ago
            </Button>
          </Form>
        </Col>
      </Row>
      {timeAgo && (
        <Row className="justify-content-md-center mt-3">
          <Col xs={6}>
            <h3>Time Ago:</h3>
            <p>
              {timeAgo.months} months, {timeAgo.days} days, {timeAgo.hours}{" "}
              hours, {timeAgo.minutes} minutes, {timeAgo.seconds} seconds
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default HowTimeAgo;
