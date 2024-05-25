import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div className="bg-dark">
      <Container>
        <Row>
          <Col>
            <h1 className="py-2 text-info text-center display-4 font-serif underline">
              Sorting Visualizer
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
