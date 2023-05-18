import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container >
        <Navbar.Brand href="https://react-bootstrap.github.io/">Learn React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav>
              <Nav.Link href="/counter">Counter</Nav.Link>
              <Nav.Link href="/window">Window</Nav.Link>
              <Nav.Link href="/hook">Hook</Nav.Link>
              <Nav.Link href="/hook2">Hook2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;