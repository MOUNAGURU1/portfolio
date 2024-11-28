import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";

import crud from "../assets/projects/crud.jfif";
import todo from "../assets/projects/todo.PNG";
import doctor from "../assets/projects/doctor.PNG";
import CALCULATOR from "../assets/projects/CALCULATOR.PNG";
import paper from "../assets/projects/paper.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor Booking Appoinment"
              description="A doctor portal appointment description typically refers to an online scheduling system where patients can book, manage, and track their medical appointments with a healthcare provider. Here's an example of a general description for a doctor portal appointment:Schedule and manage your medical appointments conveniently through our secure Doctor Portal. Whether it's for a routine check-up, follow-up consultation, or a specialist visit, our portal allows you to book appointments with just a few clicks."
              ghLink="https://github.com/MOUNAGURU1/DOCTOR-PORTAL-PROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD OPERATION"
              description="CRUD stands for Create, Read, Update, and Delete operations, which are the four basic functions for interacting with a database. In PHP, these operations can be performed using MySQL as the database. Below is a step-by-step explanation of how to implement CRUD operations using PHP and MySQL.First, create a database and a table in MySQL for storing data.To insert data, you need to create a form to collect user input, then insert that data into the database.To display the data from the MySQL database, you can fetch records using a SELECT query and loop through the results."
              ghLink="https://github.com/MOUNAGURU1/phpcrud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper}
              isBlog={false}
              title="PAPER SCIESSOR STONE GAME"
              description="Paper, Scissors, Stone (also known as Rock, Paper, Scissors) is a simple hand game usually played between two people. It is a popular game for decision-making or as a quick and easy game for entertainment. The game is typically played in a best-of-three or a single round format.he game is typically played between two players, although variations exist for larger groups.If both players choose the same gesture, the game is a tie (also called a If one player's gesture beats the other's (according to the rules mentioned), that player wins the round."
              ghLink="https://github.com/MOUNAGURU1/stone-paper-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO LIST APP"
              description="A To-Do List is a simple, organized tool that helps individuals manage tasks, prioritize activities, and stay organized. It's commonly used for both personal and professional purposes to track things that need to be done, ensuring nothing is forgotten. A to-do list can be physical (written on paper) or digital (created using apps or software)."
              ghLink="https://github.com/MOUNAGURU1/my-project/blob/main/todo-list.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CALCULATOR}
              isBlog={false}
              title="CALCULATOR"
              description="A calculator is a device or software application used to perform mathematical operations such as addition, subtraction, multiplication, division, and more complex functions like square roots, exponentiation, and trigonometric calculations. It is a fundamental tool in mathematics, engineering, finance, and many other fields, designed to simplify the process of doing calculations."
              ghLink="https://github.com/MOUNAGURU1/my-project/blob/main/calculator.html"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects