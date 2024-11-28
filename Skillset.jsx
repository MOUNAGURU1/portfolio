import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';




const Skillset = () => {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>
        <div>
      <label>HTML</label><ProgressBar striped variant="success" now={90} /><br></br>
      <label>CSS</label><ProgressBar striped variant="info" now={80} /><br></br>
      <label>JAVA SCRIPT</label><ProgressBar striped variant="warning" now={80} /><br></br>
      <label>PHP</label><ProgressBar striped variant="success" now={80} /><br></br>
      <label>MY SQL</label><ProgressBar striped variant="info" now={90} /><br></br>
      <label>REACT.JS</label><ProgressBar striped variant="warning" now={70} /><br></br>
      <label>EXPRESS.JS</label><ProgressBar striped variant="success" now={70} /><br></br>
     <label>MONGO DB</label> <ProgressBar striped variant="info" now={70} /><br></br>
     <label>NODE.JS</label> <ProgressBar striped variant="warning" now={60} /><br></br>
    </div>



        
      </Container>
    </Container>
  )
}

export default Skillset