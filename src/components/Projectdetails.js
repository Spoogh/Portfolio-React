import React from 'react';
import ProjCard from './Projectcard';
import gobline from '../assets/images/goonblin.png';
import '../index.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
const path = process.env.REACT_APP_FOR_PATH;

import RedwoodGif from '../assets/images/Redwood.gif';
import RedwoodStatic from '../assets/images/RedwoodStatic.png';
import Garden2 from '../assets/images/Garden2.gif';
import TeamGen from '../assets/images/TeamGenerator.png'; 
import ecommGif from '../assets/images/ecommercegif.gif';


const goblin = {
  
  
  image: RedwoodGif,
  link:'https://github.com/osheathe1/red-wood',
  name: 'RedWood',
  description: 'YUPPPP',
  id: 1,
};

const nope = {
  
    image:Garden2,
    link:'https://github.com/MarkGATX/Garden2',
    name: 'Garden²',
    description: 'NOOOPEEE',
    id: 12,
  };

  const teamGen = {
  
    image:TeamGen,
    link:'https://github.com/Spoogh/Team-Generator',
    name: 'Team Generator',
    description: 'NOOOPEEE',
    id: 12,
  };

  const eCommerce = {
  
    image:ecommGif,
    link:'https://github.com/Spoogh/E-commerce_backEnd',
    name: 'E-Commerce Back End',
    description: 'NOOOPEEE',
    id: 12,
  };
  


export default function Display() {
  return (
    <Container>
        <Row>
     
        <ProjCard image ={goblin.image} gif={goblin.gif} link = {goblin.link} name={goblin.name} description={goblin.description} id={goblin.id}  />
   
    
    <ProjCard image ={nope.image} link = {nope.link}name={nope.name} description={nope.description} id={nope.id} />

</Row>
<Row>
     
     <ProjCard image ={teamGen.image}  link = {teamGen.link} name={teamGen.name} description={teamGen.description} id={teamGen.id}  />

 
 <ProjCard image ={eCommerce.image} link = {eCommerce.link}name={eCommerce.name} description={eCommerce.description} id={eCommerce.id} />

</Row>
</Container>
  );
}
