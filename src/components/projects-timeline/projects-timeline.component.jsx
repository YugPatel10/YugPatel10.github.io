import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_LINKEDIN from "../../assets/img/projects/linkedin.webp";
import L_DAV from "../../assets/img/projects/dav.webp";
import L_SmartHomeAutomation from "../../assets/img/projects/smartHomeAutomation.webp";
import L_FOODFRENZY from "../../assets/img/projects/foodfrenzy.webp";
import L_DBMS from "../../assets/img/projects/DBMS.webp";
import L_DRD from "../../assets/img/projects/drd.webp";
import L_RFID from "../../assets/img/projects/rfid.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_PHP from "../../assets/img/skills/php.png";
import L_PHPMYADMIN from "../../assets/img/skills/phpmyadmin.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JQUERY from "../../assets/img/skills/jquery.png";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.png";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_ARDUINO from "../../assets/img/skills/arduino.png";
import L_C from "../../assets/img/skills/c.png";
import L_MATLAB from "../../assets/img/skills/matlab.png";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: LinkedIn Clone */}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="LinkedIn Clone"
            src={L_LINKEDIN}
            alt="LinkedIn Clone App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a LinkedIn Clone made in React, Redux, Material-ui, Styled-component and hosted using firebase.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Data Management was done by Redux</li>
                          <li> Realtime Databse was fetched and stored using firebase firestore</li>
                          <li>  Authentication functionality was through firebase Authentication</li>
                          <li>  Deployed on Firebase Hosting </li>
                          <li>  Designed by Material-Ui</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              REDUX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-ui"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-ui 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              FIREBASE 
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://linkedin-clone-3618a.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/YugPatel10/linkedin-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>


{/* Project: Weather Forecast using Time Series Analysis */}
<ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Weather Forecast Prediction"
            src={L_DAV}
            alt="MERN Tip Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This was a Data Analysis and Visualization project done during my bachelors (Course: CSE520)
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>We have researched deeply into analyzing and forecasting weather data using different techniques. </li>
                          <li>
                            Some features are: Time-Series Analysis project from raw data, dealing with a Time-Series data that has seasonality, Moving Average to capture long-term fluctuations, Parameter Selection for the model using GRID Search, Weather Forecasts Prediction using the SARIMAX model, Lastly, finding the accuracy of our model.

                          </li>
                          <li>Python Libraries used were: Numpy, Pandas, Matplorlib, Seaborn, sci-kitlib. </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          
                            
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/YugPatel10/Weather-Forecast"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Home Automation */}
          <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Smart Home Automation"
            src={L_SmartHomeAutomation}
            alt="Smart Home Automation"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Project that deals with an interesting manner of how energy can be saved by just turning A/C's, fan's, Light's of room off when not in used.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Atmega-32 Arduino Uno was used as a power supply, inputs were IR Sensors, LM35, LDR, 4X4 KeyPad, Outputs were 16X2 Lcd, Led, Servo Motor.</li>
                          <li>Through the Wifi module ESP8266 all the data was fetched from the system and displayed on our website.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt=" Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="C language"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C langauge
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/YugPatel10/SmartHomeAutomation"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Food Frenzy */}
          <ImageEvent
            date="09/04/2020"
            className="text-center"
            text="Food Frenzy"
            src={L_FOODFRENZY}
            alt="Food Frenzy"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This was a Software Engineering project done during my bachelors (Course: CSE300).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Complete Software designed, developed and deployed with Scrum practice using agile project management framework.</li>
                          <li>It was an online food odering system which enables user to save time and energy by having them decide which place to dine in on their phones anywhere in the city.</li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Djnago
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/YugPatel10/FoodFrenzy"
                  target="_blank" >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>

          {/* Project: Blood Bank Management System*/}

          <ImageEvent
            date="27/04/2019"
            className="text-center"
            text="Blood Bank Management System"
            src={L_DBMS}
            alt="Blood Bank Management System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This was a Database Management Systems project done during my bachelors (Course: CSC250).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Designed and Developed a Webapp which have different functionalties.</li>
                          <li>It has two main actors: Admin and Blood Seekers </li>
                          <li>Admin have functionalities like user auhentication, add donor and can modify details. </li>
                          <li>Blood Seeker have functionalities like user auhentication, search donor, save contacts, search donor and contact with admin. </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JQUERY}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JQuery
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHPMYADMIN}
                                alt="PHP Myadmin"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              phpMyAdmin
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/YugPatel10/BloodBankManagementSystem"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: DIABETIC RENAL DISEASE */}

          <ImageEvent
            date="16/04/2019"
            className="text-center"
            text="Diabetic Renal Disease"
            src={L_DRD}
            alt="Diabetic Renal Disease"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This was a Probability and Random Processes project done during my bachelors (Course: MAT202).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>We were given three domains: Biology, Physics and Chemistry. We worked in group of 4 in a team.</li>
                          <li>We were assigned a Research Paper we have to got hrough that and come up with the rsults in form of graph.</li>
                          <li>For plotting graph we used python as a language and MATLAB as tool.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_MATLAB}
                                alt="Matlab"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Matlab
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/YugPatel10/DiabeticRenalDisease"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

                <UrlButton
                  href="https://drive.google.com/file/d/1XyHDC8JPSJsUkWXuoZQzPm1epAamN39K/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RFID BASED ATTENDENCE SYSTEM */}
          <ImageEvent
            date="01/04/2019"
            className="text-center"
            text="RFID BASED ATTENDENCE SYSTEM"
            src={L_RFID}
            alt="RFID BASED ATTENDENCE SYSTEM"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This was an Embedded System Design project done during my bachelors (Course: EVD220).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Smart Attendence System for Insitution</li>
                          <li>Sensors: RFID</li>
                          <li>Actuators and Displays: GSM, LDR, LCD  </li>
                          <li>
                            After an effective market survey all the efficeint components were used.
                          </li>
                          <li> Hardware Connections and Simulations both are done.</li>
                          <li>Fully working video of the SMS system using GSM module</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="C Language"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C Language
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ARDUINO}
                                alt="ARDUINO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ARDUINO
                            </span>
                          </li>
                        
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/YugPatel10/RFID-Based-Attendence-System" target="_blank">
                  Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
