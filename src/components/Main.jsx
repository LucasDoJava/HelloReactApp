import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const Main = () => {

    return <main>
        <Container fluid className='mt-2'>
            <Row>
                <Col>
                <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1472495010058-65576a9959e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybSUyMGNvZmZlfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
                <Col>
                <Card>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661391536771-f18becd9f76e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybSUyMGNvZmZlfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
                <Col>
                <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1550470789-fc6193fd518c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMGNvZmZlfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>  
    </Container>
    </main>;
    
  }
  
  export default Main