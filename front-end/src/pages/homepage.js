import React from "react";

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomePage = () => {
    return (
        <Container>
        <h1>Portfolio</h1>
            <Row>
                <Col md="auto"> <a href='/snake'>  <h3>Project One - Snake</h3> </a> </Col>
                <Col md="auto"><a href='/website'> <h3>Project Two - website</h3> </a> </Col>
            </Row>
        </Container>
       );    
}

export default (HomePage)