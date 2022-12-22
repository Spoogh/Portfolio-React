import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Aboutme from './aboutme';
import Me from '../assets/images/ME.png'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import logo from '../assets/images/goonblin.png'

const Picandbio = () => {
  return (
    <Container >
    <Row bg="dark" variant="dark" >
        <Col xs={5}><img  width= "800" src={Me}></img></Col>
        <Col xs={5}><Aboutme ></Aboutme> </Col>
        
      </Row>
      </Container>
  );
};

export default Picandbio;