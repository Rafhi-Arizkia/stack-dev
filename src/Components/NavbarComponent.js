import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import StackDev from '../Images/StackDev.png'
import '../Css/Navbar.css'

const NavbarComponent = () => {
  return(
    <>
      <Navbar className="navbar" fixed='top'>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src={StackDev}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              StackDev
            </Navbar.Brand>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Paket Kami</Nav.Link>
                <Nav.Link href="#">Layanan</Nav.Link>
                <Nav.Link href='#'>Kontak</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
    </>
  );
}
export default NavbarComponent;