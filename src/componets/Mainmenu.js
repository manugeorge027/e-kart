import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap"

function Mainmenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <LinkContainer to="/">
        <Navbar.Brand href="#"><i class="fa-solid fa-house"></i>Home</Navbar.Brand>
        </LinkContainer>
        <NavDropdown title="All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Real Estate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cars-Bikes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drom-Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Music</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hobbies Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          <Nav className="me-auto">
            <Nav.Link href="#link">Books</Nav.Link>
            <Nav.Link href="#link">Electronics</Nav.Link>
            <Nav.Link href="#link">Real Estate</Nav.Link>
            <Nav.Link href="#link">Cars-Bikes</Nav.Link>
            <Nav.Link href="#link">Drom-Furniture</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link">Music</Nav.Link>
            <Nav.Link href="#link">Hobbies</Nav.Link>
            <Nav.Link href="#link">Toys</Nav.Link>
            <Nav.Link href="#link">Kids</Nav.Link>
            
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default Mainmenu;