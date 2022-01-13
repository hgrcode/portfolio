import React from "react";

import Container from 'react-bootstrap/Container';
import Timeline from "../components/timeline";
import "../styles/timeline.css";

const Cv = () => {
    return (
        <Container>
        <h1>Coding Venture Timeline</h1>
        <>
        <Timeline />
        </>
        </Container>
       );    
}

export default (Cv)