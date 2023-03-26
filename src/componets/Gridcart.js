import {Card,Col,Row} from 'react-bootstrap';
function Gridcart() {
  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top"  src="airpods.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Gridcart;