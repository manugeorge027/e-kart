import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Itemdetails from '../itemcart/Itemdetails';

function Topbar() {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="#home"><i class="fa-solid fa-phone"></i>+221336622</Navbar.Brand>
        <Navbar.Collapse className="justify-content-center">
        <Navbar.Brand href="#home"> <i class="fa-solid fa-envelope"></i> support@elextra.io</Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand href="#home"><i class="fa-solid fa-location-dot"></i> Location</Navbar.Brand>
        <i class="fa-solid fa-dollar-sign"></i>
          <NavDropdown title="Dollar(US)|" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">INR</NavDropdown.Item>
              
            </NavDropdown>
            <Navbar.Brand href="#home"> <i class="fa-solid fa-cart-shopping"></i><Link to="/item">Cart</Link></Navbar.Brand>
            <Navbar.Brand href="#home"><i className="fa-solid fa-right-to-bracket"></i> Sign In</Navbar.Brand>
          
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;