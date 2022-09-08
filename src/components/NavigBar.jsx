import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="ms-3" as={Link} to="/home">America Newspaper</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/history">Search History</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default NavigBar;
