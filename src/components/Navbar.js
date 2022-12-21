import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/goonblin.png'
import Nav from 'react-bootstrap/Nav';

function BrandExample() {
 
    return (
        <>
         
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                {' '}
                <h1 className ="d-inline-block align-top">Joshua Flores</h1>
              </Navbar.Brand>
              <Nav>
            <Nav.Link href="#deets"><h2>More deets</h2></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <h2>Contact</h2>
            </Nav.Link>
          </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default BrandExample;