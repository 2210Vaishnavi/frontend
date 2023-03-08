import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarSection = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#"> book movies </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="ms-auto my-2 my-lg-0  "
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#action2">profile</Nav.Link>
                        <NavDropdown title="more" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">my bookings</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                account settings
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/login ">
                        <button >Sign In</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarSection;

