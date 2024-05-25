import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-dark position-absolute bottom-0 w-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center py-4">
              All credits reserved to @krcpr007
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
