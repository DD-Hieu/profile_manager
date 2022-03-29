import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>My next app</Navbar.Brand>
        <Nav>
            <Nav.Link>Posts</Nav.Link>
            <Nav.Link>About</Nav.Link>
        </Nav>
    </Navbar>
)

export default NavbarMenu