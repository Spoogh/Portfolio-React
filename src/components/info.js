import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import logo from '../assets/images/goonblin.png'
import Container from 'react-bootstrap/Container';
import Aboutme from './aboutme';

const Picandbio = () => {
  return (
    <Container >
    <Row bg="dark" variant="dark" >
        <Col xs={5}><img  width= "500" src={logo}></img></Col>
        <Col xs={5}><Aboutme ></Aboutme> </Col>
        
      </Row>
      </Container>
  );
};

export default Picandbio;