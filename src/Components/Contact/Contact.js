
import {  Button, Col, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderUser from "../HomepageUser/HeaderUser";
import Footer from "../HomepageUser/Footer";
import { useEffect, useState } from "react";


export default function Contact() {

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
    
    <Container fluid>

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
      
      <Row >
        <Col md={6}>
          <h2>Need A Direct Line?</h2>
          <p>Cras massa et odio donec faucibus in vitae pretium massa dolor ullamcorper lectus aliquam.</p>
          <p><Image src="image/Contact/iconP.png"></Image><strong>Phone:</strong> (123) 456 7890</p>
          <p><Image src="image/Contact/iconM.png"></Image><strong>Email:</strong> contact@thimpress.com</p>
        </Col>
      
        <Col md={6}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.025368237528!2d105.51662731763389!3d21.012416675952743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2sFPT%20University!5e0!3m2!1sen!2s!4v1718077345610!5m2!1sen!2s" width="800" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h3>Contact Us</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{backgroundColor:"#FF782D", borderRadius: '20px' }} >
              Post Comment
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
              <Container
                fluid
                style={{ backgroundColor: "#f8f9fa", marginTop: "100px" }}
              >
                <Row style={{ padding: "20px 100px" }}>
                  <Col sm={12} md={6} lg={3}>
                    <h4 style={{ fontWeight: "Bold" }}>Edu-learn</h4>
                    <p style={{ textAlign: "justify" }}>
                      Edu-Learn is your go-to platform for online learning. Explore
                      a variety of courses to expand your knowledge and skills in
                      diverse fields. Join us and start your learning journey today!
                    </p>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <h4>About Us</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={"/Contact"} className="footer-link">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"/FAQ"} className="footer-link">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <h4 style={{ fontWeight: "Bold" }}>PROGRAMS</h4>
                    <Nav
                    title="Discovery"
                    id="basic-nav-dropdown"
                    style={{ display: "flex" }}
                  >
                    {listCate?.map((cate) => (
                <Nav.Item 
                  key={cate.id} 
                  as={Link} 
                  to={`/viewCourseByCate/${cate.id}`}
                >
                  {cate.cateName}
                      </Nav.Item>
                    ))}
                  </Nav>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <h4 style={{ fontWeight: "Bold" }}>CONTACT US</h4>
                    <ul className="list-unstyled footer-icons">
                      <li>Adress: Street, Place, Place, Country, Nation</li>
                      <li>Tel: 12345678910</li>
                      <li>Mail: Example1223@gmail.com</li>
                      <li>
                        <a href="#" className="footer-link">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="footer-link">
                          <i className="bi bi-pinterest"></i>
                        </a>
                        <a href="#" className="footer-link">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="#" className="footer-link">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="footer-link">
                          <i className="bi bi-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Button onClick={scrollToTop} className="scroll-button">
                    <i class="bi bi-arrow-up"></i>
                  </Button>
                </Row>
              </Container>
            </Row>

    </Container>
    
  );
}