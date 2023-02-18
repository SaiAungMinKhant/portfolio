import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';

function CollapsibleExample() {
  return (
    <Navbar className='nav' collapseOnSelect expand="md" bg="transparent" variant="dark">
      <Container>
 
          <Nav>
            <Navbar.Brand href="#home"><img src={logo} alt='' className='logo' /></Navbar.Brand>
          </Nav>

          <Nav>

            <Nav.Link href="#deets"><h4>About</h4></Nav.Link>

            <Nav.Link eventKey={2} href="#memes"><h4>Contact</h4></Nav.Link>

            <Nav.Link eventKey={2} href="#memes"><h4>Contact</h4></Nav.Link>

          </Nav>

      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;