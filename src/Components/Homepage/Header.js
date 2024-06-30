import {
    Container,
    Row,
    Navbar,
    Nav,
    Button,
    NavDropdown,
    Form,
    Dropdown,
    SplitButton,
    DropdownButton,
    ButtonGroup,
    Col,
    Offcanvas,
    Carousel,
    Image,
    Card,
    FormControl,
    Badge,
    ListGroup,
    Tab
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

export default function Header() {
    return (
        // Header
        <Row style={{ padding: "0px 50px", backgroundColor: "#f8f9fa"}}>
            <Navbar key="lg" expand="lg" style={{ alignContent: "center" }}>
                <Container fluid>
                    <Navbar.Brand
                        href="#home"
                        style={{ fontWeight: "bold", color: "#87CEFA" }}
                    >
                        <i className="bi bi-book"></i> Edu-Learn
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
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#course" style={{ display: "flex" }}>
                                    Course
                                </Nav.Link>
                                <NavDropdown
                                    title="Discovery"
                                    id="basic-nav-dropdown"
                                    style={{ display: "flex" }}
                                >
                                    <NavDropdown.Header>Categories</NavDropdown.Header>
                                    <NavDropdown.Item href="#">Art & Design</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Development</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Communication</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Finance</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Science</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Network</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#more">More</NavDropdown.Item>
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
                                <Nav.Link href="#">
                                    <i
                                        className="bi bi-bell"
                                    //   style={{ fontSize: "1.5rem" }}
                                    ></i>
                                </Nav.Link>
                                <NavDropdown
                                    title={
                                        <i
                                            className="bi bi-person-circle"
                                        // style={{ fontSize: "1.5rem" }}
                                        ></i>
                                    }
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#">My Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#">My Purchases</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Row>
    );
}