import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CustomComponent = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h2>Content Left</h2>
          <p>This is the content on the left side.</p>
        </Col>
        <Col lg={6}>
          <h2>GIF Right</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://giphy.com/embed/LHZyixOnHwDDy" width="600" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/computer-working-cat-LHZyixOnHwDDy"></a></p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="order-lg-2">
          <h2>GIF Left</h2>
          <h1>Right side</h1>
        </Col>
        <Col lg={6} className="order-lg-1">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://giphy.com/embed/LHZyixOnHwDDy" width="600" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/computer-working-cat-LHZyixOnHwDDy"></a></p>
          </div>
        </Col>
      </Row>
      {/* Repeat the above Row and Col pattern for more sections if needed */}
    </Container>
  );
};

export default CustomComponent;
