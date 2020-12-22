import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
function Header() {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>Next Application</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Link href='/' passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href='/about' passHref>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                </Nav>
                <Nav>
                    <Link href='/login' passHref>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                    <Link href='/signup' passHref>
                        <Nav.Link>Sign Up</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
