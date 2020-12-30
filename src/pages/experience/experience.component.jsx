import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ZLines from "../../assets/img/experience/zlines.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={ZLines} alt="ZLines logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"> Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> HTML5, CSS3, JavaScript, React JS, Python, Django, AWS.
                    <br />
                    <strong>Duration:</strong> May 1, 2019 - June 29, 2019
                    <br/>
                    <strong>Project Link:</strong> < a href="https://labgrowndiamondonline.com/">Labgrown Design</a>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><a href="https://zlines.in/" > <strong>Zlines Design </strong> </a> is a company that provides various servies like <strong>Graphics</strong> &amp; <strong>Design</strong>,<strong> Web Development</strong>, <strong>Mobile Apps</strong>, <strong>Digital Marketing </strong> and <strong>Hosting your Website </strong>  </li>
                      <li><strong>Developed</strong> &amp; <strong>enhanced </strong>multiple features like <strong>Diamonds module</strong> and <strong> Educational module </strong> with customizability option across web application.</li>
                      <li>Performed <strong> CRUD </strong>operations on multiple databases to <strong> load/ remove </strong> data according 
                      to the business requirements.</li>
                      <li>Implemented <strong> REST APIs </strong> deployed on <strong>AWS </strong> API gateway using AWS lambda for serverless setup.
                      </li>
                     </ul>
                    
                    
                  </Card.Text >
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
