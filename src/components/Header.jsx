import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/react.svg'

const Header = () => {
  return <header>
 <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FarmCult          
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Feiras</Nav.Link>
            <Nav.Link href="#features">Clientes</Nav.Link>
            <Nav.Link href="#pricing">Propriedades</Nav.Link>
            <Nav.Link href="#pricing">Cultivos</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>;
  
}

export default Header