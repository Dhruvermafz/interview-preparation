import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Page 1</Card.Title>
            <Card.Text>
              Navigate to Page 1 for something interesting.
            </Card.Text>
            <Link to="/page1">
              <Button variant="primary">Go to Page 1</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Page 2</Card.Title>
            <Card.Text>
              Explore Page 2 for more exciting content.
            </Card.Text>
            <Link to="/page2">
              <Button variant="primary">Go to Page 2</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Add more cards for additional pages as needed */}
      </div>
    </div>
  );
};

export default Home;
