import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import '../styles/card.css';

const LinkCard = (props) => {
    
   return ( 
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} height='250px' />
        <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                {props.Body}
                </Card.Text>
           <Link to={props.buttonLink}> <Button variant="primary">{props.Button}</Button></Link>
        </Card.Body>
    </Card>
   )
}
export default (LinkCard)