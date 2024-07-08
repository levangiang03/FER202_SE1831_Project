import { Row, Col, Container, InputGroup, Button, Form, DropdownButton, Card, Dropdown, Accordion, Image, Pagination } from "react-bootstrap";

export default function InstructorAccountList() {
    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2 className="text-muted">Instructor Accounts Overview</h2>
                    <p className="lead">
                        Welcome to the instructor accounts dashboard for our e-learning platform.
                    </p>
                    <p>
                        This dashboard provides insights into instructor activity and account management.
                    </p>
                    <p>
                        Total Instructors: <strong>50</strong><br />
                        New Instructors This Week: <strong>5</strong>
                    </p>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control type="text" placeholder="Search..." />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <DropdownButton id="dropdown-basic-button" title="Sort By" className="float-right">
                        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Date Joined</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Courses Created</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row className="mb-4">
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row className="mb-4">
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} style={{ margin: "10px 0px" }}>
                    <Card className="flex-row">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                            <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title><strong>Instructor Name: David</strong></Card.Title>
                            <Card.Text>
                                <strong>Age: </strong> 35 <br />
                                <strong>Birthdate: </strong> 01/01/1989 <br />
                                <strong>Major: </strong> Engineering, Software Development <br />
                                <strong>Works as: </strong> Teacher at Michigan University <br />
                                <strong>Created Courses: </strong> 3
                                <strong>  Students Enrolled in All Courses: </strong> 60 <br />
                            </Card.Text>
                            <Container style={{ margin: "20px 10px" }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See Courses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Engineering for Beginners</li>
                                                <li>Mathematics While Biking</li>
                                                <li>Coding in C# for Beginners</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>

                            <div className="mt-auto d-flex justify-content-end">
                                <Button variant="primary">Instructor Detail</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    );
}

export { InstructorAccount };
function InstructorAccount() {
    return (
        <Container>
            <Row className="my-4">
                <Col md={4} style={{ border: "1px solid gray", padding: "20px" }}>
                    <div className="mb-4">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3" style={{ width: "150px", height: "150px" }}>
                            <img src="/image/CourseList/Account.png" alt="Instructor" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <strong>Name:</strong> William David<br />
                        <small className="text-muted">Engineering Major at Michigan University</small>
                    </div>

                    <div className="mb-4">
                        <strong>Email:</strong> example@gmail.com<br /> <br />
                        <strong>Major:</strong> Engineering<br /> <br />
                        <strong>Work as:</strong> Teacher at Michigan University<br /> <br />
                        <strong>Phone Number:</strong> 0123456789<br /> <br />
                        <strong>Social Media: </strong>
                        <a href="#" className="footer-link">
                            <i className="bi bi-facebook" style={{ color: "black", margin: "0px 3px" }}></i>
                        </a>
                        <a href="#" className="footer-link">
                            <i className="bi bi-pinterest" style={{ color: "black", margin: "0px 3px" }}></i>
                        </a>
                        <a href="#" className="footer-link">
                            <i className="bi bi-twitter-x" style={{ color: "black", margin: "0px 3px" }}></i>
                        </a>
                        <a href="#" className="footer-link">
                            <i className="bi bi-instagram" style={{ color: "black", margin: "0px 3px" }}></i>
                        </a>
                        <a href="#" className="footer-link">
                            <i className="bi bi-youtube" style={{ color: "black", margin: "0px 3px" }}></i>
                        </a>
                        <br /> <br />
                        <strong>Course Created:</strong> 3<br /> <br />
                        <strong>Students Enrolled:</strong> 60
                    </div>
                </Col>

                <Col md={8}>
                    <Row className="mb-3">
                        <Col className="border-end pe-3" style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                            Total course created 8
                        </Col>
                        <Col className="border-end pe-3" style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                            Course Avarage Rating: 4.5 star
                        </Col>
                        <Col style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                            Average Enrollment: ~5 per month
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <Card className="border rounded border-lightgray p-3">
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control type="text" placeholder="Search by Course" />
                                    </Col>
                                    <Col>
                                        <div className="mb-3">
                                            <input type="date" className="form-control" />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src="/image/CourseList/286x180.png" alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            </Col>
                                            <Col md={10} className="d-flex flex-column">
                                                <Row className="mb-4">
                                                    <Col>
                                                        <strong>Engineering for Beginners</strong>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Student enrolled: 8, Rating: <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></span>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Created date: 5/5/2023</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex justify-content-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src="/image/CourseList/286x180.png" alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            </Col>
                                            <Col md={10} className="d-flex flex-column">
                                                <Row className="mb-4">
                                                    <Col>
                                                        <strong>Engineering for Beginners</strong>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Student enrolled: 8, Rating: <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></span>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Created date: 5/5/2023</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex justify-content-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src="/image/CourseList/286x180.png" alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            </Col>
                                            <Col md={10} className="d-flex flex-column">
                                                <Row className="mb-4">
                                                    <Col>
                                                        <strong>Networking and Social Engineering</strong>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Student enrolled: 8, Rating: <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></span>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Created date: 5/5/2023</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex justify-content-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src="/image/CourseList/286x180.png" alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            </Col>
                                            <Col md={10} className="d-flex flex-column">
                                                <Row className="mb-4">
                                                    <Col>
                                                        <strong>How to code in C#</strong>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Student enrolled: 8, Rating: <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></span>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col>
                                                        <span>Created date: 5/5/2023</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex justify-content-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="mt-4">
                                    <Col className="text-center">
                                        <Pagination>
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

