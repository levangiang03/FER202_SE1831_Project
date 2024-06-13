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

export default function Featured() {
    return (
        <Row>
            <Container style={{ marginTop: "50px", width: "60%" }}>
                <Row>
                    <Col>
                        <h4 style={{ fontWeight: "bold" }}>Featured Categories</h4>
                        <p>Discovery popular courses</p>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <Button variant="outline-dark" style={{ borderRadius: "20px" }}>
                            All Categories
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i className="bi bi-palette" style={{ fontSize: "2rem" }}></i>
                                    <h6 className="mt-3">Art & Design</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-code-square"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Development</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-broadcast"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Communication</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-camera-reels"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Photography</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-cash-stack"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Finance</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-bar-chart-line"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Marketing</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i className="bi bi-pen" style={{ fontSize: "2rem" }}></i>
                                    <h6 className="mt-3">Content writing</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i className="bi bi-bezier2" style={{ fontSize: "2rem" }}></i>
                                    <h6 className="mt-3">Science</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-broadcast-pin"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Network</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                        <a href="#" className="no-underline">
                            <Card className="category-box">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <i
                                        className="bi bi-chat-dots"
                                        style={{ fontSize: "2rem" }}
                                    ></i>
                                    <h6 className="mt-3">Soft skills</h6>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

                {/* Featured Courses */}
                <Row style={{ marginTop: "50px" }}>
                    <Row>
                        <Col>
                            <h4 style={{ fontWeight: "bold" }}>Featured Courses</h4>
                            <p>Expore our finest courses</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <Button variant="outline-dark" style={{ borderRadius: "20px" }}>
                                All Courses
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <a href="#" className="no-underline">
                                <Card className="course-card">
                                    <Card.Img
                                        variant="top"
                                        src="/image/logo192.png"
                                        style={{ maxWidth: "286px", maxHeight: "180px" }}
                                    />
                                    <Card.Body>
                                        <Badge pill className="badge-category">
                                            Category
                                        </Badge>
                                        <p>
                                            <span className="text-by">by: </span>
                                            <span style={{ fontWeight: "bold" }}>Maker</span>
                                        </p>
                                        <h5 className="course-name">Course Name</h5>
                                        <div className="course-info">
                                            <span>
                                                <i className="bi bi-clock-fill"></i> # weeks
                                            </span>
                                            <span>
                                                <i className="bi bi-mortarboard"></i> ### enrolled
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="course-price">
                                                <span>$50</span>
                                            </div>
                                            <div className="view-more">
                                                <a
                                                    href="#"
                                                    style={{ fontWeight: "bold" }}
                                                    className="no-style"
                                                >
                                                    View more
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <a href="#" className="no-underline">
                                <Card className="course-card">
                                    <Card.Img
                                        variant="top"
                                        src="/image/logo192.png"
                                        style={{ maxWidth: "286px", maxHeight: "180px" }}
                                    />
                                    <Card.Body>
                                        <Badge pill className="badge-category">
                                            Category
                                        </Badge>
                                        <p>
                                            <span className="text-by">by: </span>
                                            <span style={{ fontWeight: "bold" }}>Maker</span>
                                        </p>
                                        <h5 className="course-name">Course Name</h5>
                                        <div className="course-info">
                                            <span>
                                                <i className="bi bi-clock-fill"></i> # weeks
                                            </span>
                                            <span>
                                                <i className="bi bi-mortarboard"></i> ### enrolled
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="course-price">
                                                <span>$50</span>
                                            </div>
                                            <div className="view-more">
                                                <a
                                                    href="#"
                                                    style={{ fontWeight: "bold" }}
                                                    className="no-style"
                                                >
                                                    View more
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <a href="#" className="no-underline">
                                <Card className="course-card">
                                    <Card.Img
                                        variant="top"
                                        src="/image/logo192.png"
                                        style={{ maxWidth: "286px", maxHeight: "180px" }}
                                    />
                                    <Card.Body>
                                        <Badge pill className="badge-category">
                                            Category
                                        </Badge>
                                        <p>
                                            <span className="text-by">by: </span>
                                            <span style={{ fontWeight: "bold" }}>Maker</span>
                                        </p>
                                        <h5 className="course-name">Course Name</h5>
                                        <div className="course-info">
                                            <span>
                                                <i className="bi bi-clock-fill"></i> # weeks
                                            </span>
                                            <span>
                                                <i className="bi bi-mortarboard"></i> ### enrolled
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="course-price">
                                                <span>$50</span>
                                            </div>
                                            <div className="view-more">
                                                <a
                                                    href="#"
                                                    style={{ fontWeight: "bold" }}
                                                    className="no-style"
                                                >
                                                    View more
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Row>

    );
}