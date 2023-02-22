import { NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar className='nav' sticky='top' collapseOnSelect variant="dark">

            <NavItem>
              <Nav.Link href="#about"><h4>About</h4></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#about"><h4>Projects</h4></Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#about"><h4>Contact</h4></Nav.Link>
            </NavItem>

    </Navbar>
  );
}

export default CollapsibleExample;