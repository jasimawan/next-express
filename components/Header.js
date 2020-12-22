import { Navbar, Nav } from 'react-bootstrap';
function Header() {
    const router = useRo;
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>Next Application</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href='/login'>Login</Nav.Link>
                    <Nav.Link href='/signup'>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
