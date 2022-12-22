import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import '../index.css';
const path = process.env.REACT_APP_FOR_PATH;


function ProjCard(props) {
  return (
    // <Row xs={1} md={3} className="g-4 ">
      // {Array.from({ length: 1 }).map((_, idx) => (
         <Col md={6} className="mt-3 slidein">
          <Card  className='project shadow' >
           
          <a href ={props.link}><Card.Img variant="top" src={props.image} className='projectimg' target='_blank'/></a> 
            <Card.Body >
             <Card.Title>{props.name}</Card.Title> 
              <Card.Text  >
               {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
         </Col>
      )
    // </Row>
  ;
}

export default ProjCard;