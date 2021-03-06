import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';
import Welcome from './Welcome';

function NavBar() {
return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <CartWidget/>
        <Navbar.Brand href="#home">The Game Over</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#Juegos">Juegos</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
        </Nav>
        <Welcome nombreUsuario={"Franco"} />
        </Container>
    </Navbar>
    </>
);
}

export default NavBar;