import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/goonblin.png'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../index.css';

function Navi() {
 
    return (
        <>
         <div>
          <Navbar className='dark' variant="dark">
            <Container>
              <Link to="/" >
                {' '}
                <h1 className ="d-inline-block align-top name noblue">Joshua Flores</h1>
              </Link>
              
            <Link to="/projects"><h2 className ="d-inline-block align-top noblue">Projects </h2> </Link>
            
            <Link to = "/contact">
              <h2 className ="d-inline-block align-top m-20 noblue" > Contact </h2>
            </Link>
          
            </Container>
          </Navbar>
          </div>
        </>
      );
}

export default Navi;