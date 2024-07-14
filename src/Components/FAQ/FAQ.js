import { Accordion,Offcanvas,NavDropdown, Breadcrumb, Button, Card, Carousel, Col, Container, Form, Image, Nav, Navbar, Row, Table, FormControl } from "react-bootstrap";
import HeaderUser from "../HomepageUser/HeaderUser";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function FAQ() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [listCate, setListCate] = useState([]);
  useEffect(() => {
    
    fetch("http://localhost:9999/category")
      .then((res) => res.json())
      .then((listCate) => setListCate(listCate))
      .catch((err) => console.error("error: ", err));
    }, []);
  return (
    <Container fluid >

<Row style={{ padding: "0px 50px", backgroundColor: "#f8f9fa" }}>
              <Navbar key="lg" expand="lg" style={{ alignContent: "center" }}>
                <Container fluid>
                  <Navbar.Brand
                        href="/"
                        style={{ fontWeight: "bold", color: "#87CEFA" }}
                    >
                        <Link to={"/homeViewer"} style={{ textDecoration: "none" }}><i className="bi bi-book"></i> Edu-Learn</Link>
                    </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        <a
                          href="#home"
                          style={{ fontWeight: "bold", color: "#87CEFA" }}
                        >
                          <i className="bi bi-book"></i> Edu-Learn
                        </a>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content flex-grow-1 pe-3">
                        <Nav.Link href="#home" style={{ display: "flex" }}>
                          <Link to={"/homeViewer"} style={{ textDecoration: "none", color: "#000" }}>Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#course" style={{ display: "flex" }}>
                          <Link to={"/allCourseViewer"} style={{ textDecoration: "none", color: "#000" }}>Course</Link>
                        </Nav.Link>
                        <NavDropdown
                    title="Discovery"
                    id="basic-nav-dropdown"
                    style={{ display: "flex" }}
                  >
                    {listCate?.map((cate) => (
                <NavDropdown.Item 
                  key={cate.id} 
                  as={Link} 
                  to={`/viewCourseByCate/${cate.id}`}
                >
                  {cate.cateName}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                      </Nav>
                      <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                          style={{ borderRadius: "20px" }}
                        />
                      </Form>
                      <Nav>
                        <Nav.Link>
                          <Link to={'/login'} style={{color:'black'}}>
                            <i
                              className="bi bi-bell"
                            ></i>
                          </Link>
                        </Nav.Link>
                        <Nav.Link>
                          <Link to={'/login'} style={{color:'black'}}>
                            <i
                                className="bi bi-person-circle"
                              ></i>
                          </Link>
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </Row>

    <h1>FAQs</h1>
    <Row>
              <Container
                fluid
                style={{ backgroundColor: "#f8f9fa", marginTop: "100px" }}
              >
               <Row>
  <Col>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{}}>
        <Accordion.Header style={{ backgroundColor: 'grey' }}>Study Techniques</Accordion.Header>
        <Accordion.Body>
          Effective study techniques can significantly enhance learning. Active recall and spaced repetition are two methods that have proven to be particularly effective. Active recall involves testing yourself on the material you have learned, while spaced repetition involves reviewing the material at increasing intervals to improve retention.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="1" style={{}}>
        <Accordion.Header>Time Management</Accordion.Header>
        <Accordion.Body>
          Managing your time effectively is crucial for academic success. Prioritize your tasks, use tools like planners or digital calendars, and break down large projects into smaller, manageable tasks. Ensure to allocate time for breaks to maintain productivity and avoid burnout.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="2" style={{}}>
        <Accordion.Header>Online Learning Tips</Accordion.Header>
        <Accordion.Body>
          Online learning requires self-discipline and motivation. Create a dedicated study space, set regular study times, and minimize distractions. Participate actively in online discussions and seek help when needed to stay engaged and on track with your studies.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="3" style={{}}>
        <Accordion.Header>Mental Health and Wellbeing</Accordion.Header>
        <Accordion.Body>
          Taking care of your mental health is vital for academic performance. Practice mindfulness, engage in regular physical activity, and ensure you get adequate sleep. Don’t hesitate to seek support from counselors or mental health resources if you feel overwhelmed.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
    </Accordion>
  </Col>
  <Col>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{}}>
        <Accordion.Header>Effective Note-Taking</Accordion.Header>
        <Accordion.Body>
          Effective note-taking helps in better understanding and retention of information. Use methods such as the Cornell note-taking system or mind mapping. Summarize key points, use bullet points for clarity, and review your notes regularly to reinforce learning.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="1" style={{}}>
        <Accordion.Header>Group Study Benefits</Accordion.Header>
        <Accordion.Body>
          Studying in groups can enhance learning through collaborative efforts. It allows for the exchange of ideas, clarification of doubts, and exposure to different perspectives. Ensure that group study sessions are focused and that all members are equally contributing.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="2" style={{}}>
        <Accordion.Header>Utilizing Learning Resources</Accordion.Header>
        <Accordion.Body>
          Take advantage of the learning resources available to you. Libraries, online databases, and educational platforms offer a wealth of information. Don’t hesitate to seek help from teachers or tutors if you need additional support or clarification on certain topics.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
      <Accordion.Item eventKey="3" style={{}}>
        <Accordion.Header>Setting Academic Goals</Accordion.Header>
        <Accordion.Body>
          Setting clear, achievable academic goals can keep you motivated and focused. Break down your long-term goals into short-term objectives. Regularly review and adjust your goals as needed to stay on track and celebrate your progress.
        </Accordion.Body>
      </Accordion.Item>
      <div style={{ margin: '40px 0' }}></div>
    </Accordion>
  </Col>
</Row>

              </Container>
            </Row>

<Image src="image/FAQ/Vector.png"></Image>


    </Container>
    
  );
}