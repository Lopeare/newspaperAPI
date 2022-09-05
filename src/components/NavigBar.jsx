import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavigBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className='fa-home' as={Link} to="/home">ProSearching</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='fa-home' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">Search History</Nav.Link>
                    <Nav.Link as={Link} to="/other">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
