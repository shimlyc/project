import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" style={{fontWeight:"bold"}}>EXCLUSIVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"black"}} className='ms-3'>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"black"}} className='ms-3'>contact</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"black"}} className='ms-3'>about</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"black"}}className='ms-3'>sign up</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
            
            <i className="fa-regular fa-heart icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
            <i className="fa-regular fa-user icon1"></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;