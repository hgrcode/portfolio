import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';

import {Link} from 'react-router-dom';
import Logo from '../img/Logo.png';

const NavBar = () => {
    return (
    <Navbar  expand="lg">
        <Container>
                <Link className="logo" to='/' ><img src={Logo} height='90px'/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="navbarbutton" to='/'>Home</Link> 
                    <Link className="navbarbutton" to='/cv' >CodingVenture</Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default (NavBar)