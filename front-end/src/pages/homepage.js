import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LinkCard from "../components/card";
import Logo from '../img/Logo.png'

const HomePage = () => {
    return (
        <Container>
        <h1>Portfolio</h1>
            <Row>
                <Col md="auto"><LinkCard Title='Snake' Body='lets play!' Button='Play' buttonLink='/snake' img={Logo}/> </Col>
                <Col md="auto"><LinkCard Title='Website' Body='lets learn' Button='Lets Go' buttonLink='/website' img={Logo}/> </Col>
            </Row>
        </Container>
       );    
}

export default (HomePage)