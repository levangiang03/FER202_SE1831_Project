import {
  Container,
  Row,
  Col,
  Nav,
  ListGroup,
  Tab,
  Dropdown,
  Accordion,
  Offcanvas,
  Button,
  Navbar,
  NavDropdown,
  Form,
  Card,
  Badge,
  Table,
  Image,
  Collapse,
  CardBody,
  CardText,
  FormControl
} from "react-bootstrap";
import { useState } from "react";
import './CourseDetail.css';
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import { CheckCircle } from 'react-bootstrap-icons';
export default function CourseDetail() {
  const [activeItem, setActiveItem] = useState("module1");
  const [showOffcanvas, setShowOffcanvas] = useState(false);



  const handleClick = (item) => {
    setActiveItem(item);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const [completedModules, setCompletedModules] = useState({
    module1: false,
    module2: false,
    module3: false,
    // Add more modules as needed
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = () => {
    // Process the answers and set the completion status
    setIsCompleted(true);
    handleComplete("module3");
  };
  
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };



  const handleComplete = (module) => {
    setCompletedModules(prevModules => ({
      ...prevModules,
      [module]: true
    }));
  };

  const getResultMessage = () => {
    // Simulated result calculation for demo purposes
    let correctAnswers = 0;
    if (answers.question1 === "Paris") correctAnswers++;
    if (answers.question2 === "Jupiter") correctAnswers++;
    if (answers.question3 === "William Shakespeare") correctAnswers++;
    return `You scored ${correctAnswers} out of 3 questions correctly.`;
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  

  // const handleSubmit = () => {
  //   // Calculate score or display results based on selected answers
  //   // For demo purposes, let's just log the selected answers
  //   console.log('Answers:', answers);
  //   setIsCompleted(true); // Mark as completed after submission
  // };



  return (
    <Container fluid>
      <Header />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#module1">
        <Row>
          <Button
            // variant="primary"
            onClick={handleShow}
            className="d-lg-none mb-3"
            style={{
              position: "fixed",
              top: "60px",
              right: "10px",
              width: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "grey",
              zIndex: "9999",
            }}
          >
            <i class="bi bi-list"></i>
          </Button>

          <Col lg={2}>


            <Offcanvas
              show={showOffcanvas}
              onHide={handleClose}
              responsive="lg"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Name Course</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-center">
                <ListGroup>
                  
                  <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0" style={{ border: "none" }}>
                      <Accordion.Header className="centered-header">
                        <div
                          className="w-100 text-center"
                          style={{ textAlign: "center", padding: "10px 0px" }}
                        >
                          <b style={{ paddingRight: "10px" }}>
                            Getting Stared
                          </b>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ textAlign: "center", padding: "10px 0px" }}
                      >
<ListGroup.Item
              action
              href="#module1"
              className={`list-item ${activeItem === "module1" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module1 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module1")}
            >
              <b className="bi bi-play-circle" style={{ fontStyle: "normal" }}> Video:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module1 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#module2"
              className={`list-item ${activeItem === "module2" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module2 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module2")}
            >
              <b className="bi bi-book" style={{ fontStyle: "normal" }}> Overview:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module2 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#module3"
              className={`list-item ${activeItem === "module3" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module3 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module3")}
            >
              <b className="bi bi-chat-left" style={{ fontStyle: "normal" }}> Quiz:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module3 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
                        
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion  >
                    <Accordion.Item eventKey="1" style={{ border: "none" }}>
                      <Accordion.Header className="centered-header">
                        <div
                          className="w-100 text-center"
                          style={{ textAlign: "center", padding: "10px 0px" }}
                        >
                          <b style={{ paddingRight: "10px" }}>
                            Specialization
                          </b>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ textAlign: "center", padding: "10px 0px" }}
                      >
<ListGroup.Item
              action
              href="#module4"
              className={`list-item ${activeItem === "module4" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module4 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module4")}
            >
              <b className="bi bi-play-circle" style={{ fontStyle: "normal" }}> Video:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module4 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#module5"
              className={`list-item ${activeItem === "module5" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module5 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module5")}
            >
              <b className="bi bi-book" style={{ fontStyle: "normal" }}> Overview:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module5 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#module6"
              className={`list-item ${activeItem === "module6" ? "list-item-active" : ""}`}
              style={{
                backgroundColor: completedModules.module6 ? "lightgreen" : "white",
                color: "black",
                border: "none",
              }}
              onClick={() => handleClick("module6")}
            >
              <b className="bi bi-chat-left" style={{ fontStyle: "normal" }}> Quiz:<span> </span></b>
              <span>Welcome to the Capstone!</span>
              {completedModules.module6 && <CheckCircle style={{ marginLeft: '10px', color: 'green' }} />}
            </ListGroup.Item>
                        
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          <Col style={{ borderLeft: "2px solid black" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#module1">
                <Container style={{ padding: '50px' }}>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "center" }}>
                        <iframe
                          width="1100"
                          height="615"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <Button
                  onClick={() => handleComplete("module1")}
                  variant={completedModules.module1 ? "success" : "primary"}
                  disabled={completedModules.module1}
                  style={{ marginTop: '20px' }}
                >
                  {completedModules.module1 ? "Completed" : "Mark as Complete"}
                </Button>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#module2" >
              <Container style={{ padding: '50px' }}>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>Overview</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button
                  onClick={() => handleComplete("module2")}
                  variant={completedModules.module2 ? "success" : "primary"}
                  disabled={completedModules.module2}
                  style={{ marginTop: '20px' }}
                >
                  {completedModules.module2 ? "Completed" : "Mark as Complete"}
                </Button>
              </Col>
            </Row>
          </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#module3">
              <Container style={{ padding: '50px' }}>
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>Quiz Questions</h1>
          <Form>
            <Form.Group controlId="question1">
              <Form.Label>Question 1: What is the capital of France?</Form.Label>
              <Form.Check
                type="radio"
                name="question1"
                id="question1-option1"
                label="Paris"
                value="Paris"
                onChange={handleRadioChange}
                style={{ backgroundColor: isCompleted  ? "lightgreen" : "transparent" }}
              />
              <Form.Check
                type="radio"
                name="question1"
                id="question1-option2"
                label="London"
                value="London"
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                name="question1"
                id="question1-option3"
                label="Berlin"
                value="Berlin"
                onChange={handleRadioChange}
              />
            </Form.Group>
            <Form.Group controlId="question2">
              <Form.Label>Question 2: What is the largest planet in our solar system?</Form.Label>
              <Form.Check
                type="radio"
                name="question2"
                id="question2-option1"
                label="Jupiter"
                value="Jupiter"
                onChange={handleRadioChange}
                style={{ backgroundColor: isCompleted  ? "lightgreen" : "transparent" }}
              />
              <Form.Check
                type="radio"
                name="question2"
                id="question2-option2"
                label="Saturn"
                value="Saturn"
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                name="question2"
                id="question2-option3"
                label="Neptune"
                value="Neptune"
                onChange={handleRadioChange}
              />
            </Form.Group>
            <Form.Group controlId="question3">
              <Form.Label>Question 3: Who wrote the play 'Hamlet'?</Form.Label>
              <Form.Check
                type="radio"
                name="question3"
                id="question3-option1"
                label="William Shakespeare"
                value="William Shakespeare"
                onChange={handleRadioChange}
                style={{ backgroundColor: isCompleted  ? "lightgreen" : "transparent" }}
              />
              <Form.Check
                type="radio"
                name="question3"
                id="question3-option2"
                label="Charles Dickens"
                value="Charles Dickens"
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                name="question3"
                id="question3-option3"
                label="Jane Austen"
                value="Jane Austen"
                onChange={handleRadioChange}
              />
            </Form.Group>
          </Form>
          <Button
            onClick={handleSubmit}
            variant={completedModules.module3 ? "success" : "primary"}
            disabled={completedModules.module3}
            style={{ marginTop: '20px' }}
          >
            {completedModules.module3 ? "Completed" : "Submit"}
          </Button>
          {isCompleted && (
            <div style={{ marginTop: '20px' }}>
              <h3>Results:</h3>
              <p>{getResultMessage()}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
              </Tab.Pane>

             
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </Container>
  );
}
