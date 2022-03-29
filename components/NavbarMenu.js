import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from 'next/link';

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>My next app</Navbar.Brand>
        <Nav>
            <Link href='/home' passHref>
                <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href='/posts' passHref>
                <Nav.Link>Posts</Nav.Link>
            </Link>
            <Link href='/about'passHref>
                <Nav.Link>About</Nav.Link>
            </Link>
        </Nav>
    </Navbar>
)

export default NavbarMenu