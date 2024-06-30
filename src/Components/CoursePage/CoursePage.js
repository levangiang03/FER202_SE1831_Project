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
import './CoursePage.css';
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";

export default function CoursePage() {
  const [activeItem, setActiveItem] = useState("module1");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const [open, setOpen] = useState(false);

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
            <Card
              style={{
                width: "auto",
                border: "none",
                padding: "20px",
                textAlign: "center",
              }}
              className="d-none d-lg-block"
            >
              <Card.Img
                variant="top"
                src="/image/CoursePage/logo192.png"
                style={{ borderRadius: "20px" }}
              />
              <Card.Body>
                <Card.Title>Name Course</Card.Title>
              </Card.Body>
            </Card>

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
                            Course Material
                          </b>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ textAlign: "center", padding: "10px 0px" }}
                      >
                        <ListGroup.Item
                          action
                          href="#module1"
                          className={`list-item ${activeItem === "module1" ? "list-item-active" : ""
                            }`}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                          }}
                          onClick={() => handleClick("module1")}
                        >
                          Module 1
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="#module2"
                          className={`list-item ${activeItem === "module2" ? "list-item-active" : ""
                            }`}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                          }}
                          onClick={() => handleClick("module2")}
                        >
                          Module 2
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="#module3"
                          className={`list-item ${activeItem === "module3" ? "list-item-active" : ""
                            }`}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                          }}
                          onClick={() => handleClick("module3")}
                        >
                          Module 3
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="#module4"
                          className={`list-item ${activeItem === "module4" ? "list-item-active" : ""
                            }`}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                          }}
                          onClick={() => handleClick("module4")}
                        >
                          Module 4
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="#module5"
                          className={`list-item ${activeItem === "module5" ? "list-item-active" : ""
                            }`}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                          }}
                          onClick={() => handleClick("module5")}
                        >
                          Module 5
                        </ListGroup.Item>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <ListGroup.Item
                    action
                    href="#grades"
                    className={`list-item ${activeItem === "grades" ? "list-item-active" : ""
                      }`}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick("grades")}
                  // onClick={() => scrollToTop()}
                  >
                    <b>Grades</b>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#massages"
                    className={`list-item ${activeItem === "massages" ? "list-item-active" : ""
                      }`}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick("massages")}
                  >
                    <b>Massages</b>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#courseInfo"
                    className={`list-item ${activeItem === "courseInfo" ? "list-item-active" : ""
                      }`}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick("courseInfo")}
                  >
                    <b>Course Info</b>
                  </ListGroup.Item>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          <Col style={{ borderLeft: "2px solid black" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#module1">
                <Row style={{ padding: "50px 50px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid black" }}
                    >
                      <Accordion.Header>
                        <b>Promote an Ethical Organizational Culture</b>
                      </Accordion.Header>
                      <Accordion.Body>
                        The first module in this course begins by outlining
                        strategies for building ethics into the organization's
                        culture. An ethical culture promotes ethical behavior in
                        all areas of the business and encourages all internal
                        stakeholders to engage in ethical behavior, regardless
                        of department or individual roles and responsibilities.
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Overview</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Ethical Organizational Culture</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Evaluate What You're Learned</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 2
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#module2">
                <Row style={{ padding: "50px 50px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid black" }}
                    >
                      <Accordion.Header>
                        <b>Ethical Risk Analysis Fundamentals</b>
                      </Accordion.Header>
                      <Accordion.Body>
                        The first module in the course lays the groundwork for
                        some concepts that are fundamental to data-driven
                        technologies like artificial intelligence (AI). As an
                        ethicist, you may not be putting these concepts into
                        practice yourself, but you still need to understand
                        them. That way, you'll be able to make more informed
                        judgments and communicate with other people about how
                        best to detect and mitigate ethical risks.
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Overview</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Ethical Organizational Culture</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Evaluate What You're Learned</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 2
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#module3">
                <Row style={{ padding: "50px 50px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid black" }}
                    >
                      <Accordion.Header>
                        <b>
                          Comunication the Business Impacts of Ethical Risks to
                          Diverse Stakeholders
                        </b>
                      </Accordion.Header>
                      <Accordion.Body>
                        The first module in this course begins by covering the
                        ethical risks a data-driven organization faces, the
                        impacts those risks have on the business, as well as
                        strategies for communicating these ideas. Effective
                        communication to a diverse array of stakeholders is
                        crucial for maintaining their trust, as well as for
                        fostering a culture of ethical business practices.
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Overview</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Ethical Organizational Culture</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Evaluate What You're Learned</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 2
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#module4">
                <Row style={{ padding: "50px 50px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid black" }}
                    >
                      <Accordion.Header>
                        <b>
                          Comunication the Business Impacts of Ethical Risks to
                          Diverse Stakeholders
                        </b>
                      </Accordion.Header>
                      <Accordion.Body>
                        The first module in this course begins by covering the
                        ethical risks a data-driven organization faces, the
                        impacts those risks have on the business, as well as
                        strategies for communicating these ideas. Effective
                        communication to a diverse array of stakeholders is
                        crucial for maintaining their trust, as well as for
                        fostering a culture of ethical business practices.
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Overview</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Ethical Organizational Culture</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Evaluate What You're Learned</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 2
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#module5">
                <Row style={{ padding: "50px 50px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid black" }}
                    >
                      <Accordion.Header>
                        <b>
                          Comunication the Business Impacts of Ethical Risks to
                          Diverse Stakeholders
                        </b>
                      </Accordion.Header>
                      <Accordion.Body>
                        The first module in this course begins by covering the
                        ethical risks a data-driven organization faces, the
                        impacts those risks have on the business, as well as
                        strategies for communicating these ideas. Effective
                        communication to a diverse array of stakeholders is
                        crucial for maintaining their trust, as well as for
                        fostering a culture of ethical business practices.
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Overview</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Ethical Organizational Culture</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer2
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-play-circle"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Exer3
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-book"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Overview
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ padding: "20px 0px" }}
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <b>Evaluate What You're Learned</b>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 1
                                  </i>
                                </Button>
                              </Row>
                              <Row>
                                <Button href="#" className="customButton">
                                  <i
                                    class="bi bi-chat-left"
                                    style={{ fontStyle: "normal" }}
                                  >
                                    {" "}
                                    Quiz 2
                                  </i>
                                </Button>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#grades">
                <Row style={{ padding: "50px 50px" }}>
                  <Card style={{ width: "100%", border: "1px solid black" }}>
                    <Card.Body>
                      <Card.Title
                        style={{ marginBottom: "20px", fontWeight: "bold" }}
                      >
                        Grades
                      </Card.Title>
                      <Card.Text>
                        <Row
                          style={{
                            border: "1px solid lightgrey",
                            padding: "20px 10px",
                            marginBottom: "20px",
                          }}
                        >
                          <i
                            class="bi bi-check-lg"
                            style={{ fontStyle: "normal" }}
                          >
                            {" "}
                            You have completed all of the assessments that are
                            currently due.
                          </i>
                        </Row>
                        <Row
                          style={{
                            border: "1px solid lightgrey",
                            padding: "20px 10px",
                            marginBottom: "20px",
                          }}
                        >
                          <i
                            class="bi bi-clipboard-check"
                            style={{ fontStyle: "normal" }}
                          >
                            {" "}
                            You passed this course! Your grade is 96.50%.
                          </i>
                        </Row>
                        <Row
                          style={{
                            border: "1px solid lightgrey",
                            padding: "20px 10px",
                          }}
                        >
                          <Table>
                            <thead>
                              <tr>
                                <th>Module</th>
                                <th>Name module</th>
                                <th>Status</th>
                                <th>Due</th>
                                <th>Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <a href="#">
                                    Ethical Organizational Culture Quiz
                                  </a>
                                </td>
                                <td>Passed</td>
                                <td>May 26</td>
                                <td>90%</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <a href="#">
                                    Ethical Considerations in Governance and
                                    Policy Making Quiz
                                  </a>
                                </td>
                                <td>Passed</td>
                                <td>June 2</td>
                                <td>96%</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>
                                  <a href="#">Code of Ethics Quiz</a>
                                </td>
                                <td>Passed</td>
                                <td>June 6</td>
                                <td>100%</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>
                                  <a href="#">
                                    Policy Development and Monitoring Quiz
                                  </a>
                                </td>
                                <td>Passed</td>
                                <td>June 12</td>
                                <td>100%</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#massages">
                <Row style={{ padding: "50px 50px" }}>
                  <Row>
                    <Card style={{ width: "100%", border: "none" }}>
                      <Card.Body>
                        <Card.Title
                          style={{ fontWeight: "bold", paddingBottom: "20px" }}
                        >
                          Massages
                        </Card.Title>
                        <Card.Text>
                          <Row
                            style={{
                              borderBottom: "1px solid lightgrey",
                              padding: "20px 0px",
                            }}
                          >
                            <Col>
                              <Image
                                src="/image/logo192.png"
                                alt="Coursera Logo"
                                style={{ width: "100%", marginRight: "10px" }}
                              />
                            </Col>
                            <Col xs={11}>
                              <p style={{ fontWeight: "bold" }}>
                                Congratulations, Your Course Certificate is
                                Ready!
                              </p>
                              <p>
                                Congratulations! You did it. You've successfully
                                completed Create and Lead an Ethical Data-Driven
                                Organization. CertNexus and Coursera have issued
                                you an official Course Certificate.
                              </p>
                              <Button href="#" className="buttonMassage">
                                View Your Accomplishments
                              </Button>
                            </Col>
                          </Row>
                          <Row
                            style={{
                              borderBottom: "1px solid lightgrey",
                              padding: "20px 0px",
                            }}
                          >
                            <Col>
                              <Image
                                src="/image/logo192.png"
                                alt="Coursera Logo"
                                style={{ width: "100%", marginRight: "10px" }}
                              />
                            </Col>
                            <Col xs={11}>
                              <p style={{ fontWeight: "bold" }}>
                                Welcome to Course!
                              </p>
                              <p>
                                Welcome to Create and Lead an Ethical
                                Data-Driven Organization! You’re joining
                                thousands of learners currently enrolled in the
                                course. I'm excited to have you in the class and
                                look forward to your contributions to the
                                learning community.
                              </p>
                              <Button href="#" className="buttonMassage">
                                Go to Course
                              </Button>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#courseInfo">
                <Row style={{ padding: "10px 50px" }}>
                  <Row
                    style={{
                      borderBottom: "1px solid lightgrey",
                      paddingBottom: "10px",
                    }}
                  >
                    <Card style={{ width: "100%", border: "none" }}>
                      <Card.Body>
                        <Card.Title
                          style={{ paddingBottom: "20px", textAlign: "center" }}
                        >
                          <p style={{ fontWeight: "bold", fontSize: "1cm" }}>
                            Create and Lead an Ethical Data-Driven Organization
                          </p>
                          <a>by CertNexus</a>
                        </Card.Title>
                        <Card.Text>
                          <Row>
                            <Card.Body>
                              <Card.Title>About this Course</Card.Title>
                              <Card.Text>
                                Creating and leading an ethical data-driven
                                organization, when done successfully, is a
                                cultural transformation for an organization.
                                Navigating a cultural shift requires leadership
                                buy in, resourcing, training, and support
                                through creation of boards, policies, and
                                governance. Beyond leadership and organization,
                                it is imperative to engage employees through
                                forums and incentive programs for continual
                                involvement. A strong understanding of ethical
                                organizational policies provides the foundation
                                for consistent monitoring to maintain an ethical
                                culture.
                              </Card.Text>
                            </Card.Body>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row
                    style={{
                      padding: "20px 30px",
                      alignContent: "center",
                      borderBottom: "1px solid lightgrey",
                    }}
                    className="d-flex"
                  >
                    <Col xs={2}>
                      <Image
                        src="/image/CoursePage/logo192.png"
                        roundedCircle
                        style={{
                          border: "1px solid black",
                          backgroundColor: "black",
                          width: "100%",
                        }}
                      />
                    </Col>
                    <Col>
                      <Card style={{ border: "none" }}>
                        <CardBody>
                          <Card.Title>Taught by:</Card.Title>
                          <CardText>
                            <a href="#">Aaron Hui</a>, Founding President of The
                            AI Robotics Ethics Society
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      padding: "20px 30px",
                      alignContent: "center",
                      borderBottom: "1px solid lightgrey",
                    }}
                    className="d-flex"
                  >
                    <Col xs={2}>
                      <Image
                        src="/image/CoursePage/logo192.png"
                        roundedCircle
                        style={{
                          border: "1px solid black",
                          backgroundColor: "black",
                          width: "100%",
                        }}
                      />
                    </Col>
                    <Col>
                      <Card style={{ border: "none" }}>
                        <CardBody>
                          <Card.Title>Taught by:</Card.Title>
                          <CardText>
                            <a href="#">Abhishek Gupta</a>, Founder, Montreal AI
                            Ethics Institute
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      padding: "20px 30px",
                      alignContent: "center",
                    }}
                    className="d-flex"
                  >
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Basic Info</td>
                          <td>
                            Course 5 of 6 in the CertNexus Certified Ethical
                            Emerging Technologist Specialization
                          </td>
                        </tr>
                        <tr>
                          <td>Level</td>
                          <td>Beginner</td>
                        </tr>
                        <tr>
                          <td>Commitment</td>
                          <td>4 weeks of study, 2-3 hours per week</td>
                        </tr>
                        <tr>
                          <td>Language</td>
                          <td>
                            English, Subtitles: Arabic, French, Ukrainian,
                            Chinese (Simplified), Greek, Italian, Portuguese
                            (Brazil), Dutch, Korean, German, Russian, Thai,
                            Indonesian, Swedish, Turkish, Spanish, Hindi,
                            Japanese, Kazakh, Polish
                          </td>
                        </tr>
                        <tr>
                          <td>Hardware Req</td>
                          <td>You will need to access to the Internet.</td>
                        </tr>
                        <tr>
                          <td>How To Pass</td>
                          <td>
                            Pass all graded assignments to complete the course.
                          </td>
                        </tr>
                        <tr>
                          <td>User Ratings</td>
                          <td>Average User Rating 4.6</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </Container>
  );
}
