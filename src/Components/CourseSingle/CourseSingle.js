import { Container, Row, Breadcrumb, Button, Col, Card, Tab, Tabs, Form, FloatingLabel, Accordion, Image, ProgressBar, ListGroup, Pagination } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CourseSingle.css";
export default function CourseSingle() {
    return (
        <Container fluid>
            <Row className="nav-container">
                <Container style={{ width: "80%" }} className="nav-content">
                    <Navigation />
                </Container>
            </Row>
            <Row>
                <Headline />
            </Row>
            <Container className="course-detail-container">
                <Row >
                    <Col md={8} style={{ padding: "0px" }}>
                        <CourseDetail />
                    </Col>
                </Row>
            </Container>
            <Container style={{ width: "82%" }}>
                <Row >
                    <Col md={8} style={{ padding: "0px" }}>
                        <Comment />
                    </Col>
                </Row>
            </Container>
        </Container>
    );

}

function Navigation() {
    return (
        <Breadcrumb className="nav-menu">
            <Breadcrumb.Item href="#" className="nav-name">Homepage</Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="nav-name">
                Course
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Course Name</Breadcrumb.Item>
        </Breadcrumb>
    );
}

function Headline() {
    return (
        <Container fluid className="headline-container">
            <Container className="headline-content">
                <Row>
                    <HeadlineContentLeft />
                    <HeadlineContentRight />
                </Row>
            </Container>
        </Container>
    );
}

function HeadlineContentLeft() {
    return (
        <Col className="headline-content-left" sm={12} lg={8} sx={12} md={12}>
            <Row>
                <Col className="headline-button-container">
                    <Button variant="secondary" className="headline-button">Photography</Button>
                    <span style={{ color: "gray" }}>by<span style={{ color: "white", marginLeft: "5px" }}>Determined-Poitras</span></span>
                </Col>
            </Row>
            <Row>
                <Col className="headline-title">
                    <h2>The Ultimate Guide To The Best WordPress LMS Plugin</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul style={{ display: "flex", listStyle: "none", padding: "0px" }} className="headline-list-container">
                        <li className="headline-list"><i class="bi bi-clock-fill headline-icon"></i>2 Weeks</li>
                        <li className="headline-list"><i class="bi bi-person-fill headline-icon"></i>156 Students</li>
                        <li className="headline-list"><i class="bi bi-bar-chart-fill headline-icon"></i>All levels</li>
                        <li className="headline-list"><i class="bi bi-file-earmark-text-fill headline-icon"></i>20 Lessons</li>
                        <li className="headline-list"><i class="bi bi-question-square-fill headline-icon"></i>3 Quizzes</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    );
}

function HeadlineContentRight() {
    return (
        <Col className="headline-content-right d-none d-lg-block" md={4} sx={12} >
            <Card style={{ width: "100%" }} >
                <Card.Img variant="top" src="./image/CourseSingle/header-logo.png" width={"100%"} />
                <Card.Body style={{ width: "90%", margin: "auto" }}>
                    <Card.Text>
                        <Row>
                            <Col md={6} xs={12} style={{ paddingTop: "6px", textAlign: "center" }}>
                                <span className="card-text1 col-md-6">$59.0</span>
                                <span className="card-text2 col-md-6">$49.0</span>
                            </Col>
                            <Col md={6} xs={12} style={{ textAlign: "center" }}>
                                <Button className="card-button">Start Now</Button>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

function CourseDetail() {
    return (
        <Container>
            <Row>
                <Col className="course-detail-content">
                    <CourseTab />
                </Col>
            </Row>
        </Container>
    );
}

function CourseTab() {
    return (
        <Tabs
            defaultActiveKey="overview"
            id="uncontrolled-tab-example"
            className="course-tab-nav"
            justify
        >
            <Tab.Content eventKey="overview" title="Overview" className="course-tab-content">
                <Tab.Content style={{ paddingTop: "15px" }} >
                    <OverviewContent />
                </Tab.Content>
            </Tab.Content>
            <Tab.Content eventKey="curriculum" title="Curriculum" className="course-tab-content">
                <Tab.Content style={{ paddingTop: "15px" }} >
                    <CurriculumContent />
                </Tab.Content>
            </Tab.Content>
            <Tab.Content eventKey="instructor" title="Instructor" className="course-tab-content">
                <Tab.Content style={{ paddingTop: "15px" }} >
                    <InstructorContent />
                </Tab.Content>
            </Tab.Content>
            <Tab.Content eventKey="faqs" title="FAQs" className="course-tab-content">
                <Tab.Content style={{ paddingTop: "15px" }} >
                    <FAQsContent />
                </Tab.Content>
            </Tab.Content>
            <Tab.Content eventKey="contact" title="Review" className="course-tab-content">
                <Tab.Content style={{ paddingTop: "15px" }} >
                    <ReviewContent />
                </Tab.Content>
            </Tab.Content>
        </Tabs>

    );
}

function OverviewContent() {
    return (
        <Row style={{ width: "95%", margin: "auto" }}>
            <p>
                A product roadmap visually represents how a digital product, usually software, will develop and evolve over time. Simply put, it’s the strategic plan that maps out what future functionalities should be implemented, who is responsible
                for delivering them, and when they should be completed. Importantly, in the roadmap, the product team can also identify core long-term goals and anticipated outcomes.
            </p>
            <p>
                A product roadmap visually represents how a digital product, usually software, will develop and evolve over time. Simply put, it’s the strategic plan that maps out what future functionalities should be implemented, who is responsible
                for delivering them, and when they should be completed. Importantly, in the roadmap, the product team can also identify core long-term goals and anticipated outcomes.
            </p>
        </Row>
    );
}

function CurriculumContent() {
    return (
        <Row style={{ width: "95%", margin: "auto" }}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>

            <Accordion style={{ marginBottom: "10px" }}>
                <Accordion.Item eventKey="0" style={{ marginBottom: "10px" }}>
                    <Accordion.Header >
                        <Col md={7}>
                            <h6 style={{ marginBottom: "0px" }}>Lessons With Video Content</h6>
                        </Col>

                        <Col md={4}>
                            <Row>
                                <Col md={6}><span className="lesson-header-right">3111 Lessons</span></Col>
                                <Col md={6}><span className="lesson-header-right">45 Mins</span></Col>
                            </Row>
                        </Col>
                    </Accordion.Header>
                    <Accordion.Body >
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>2:25</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-lock-fill"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{ marginBottom: "10px" }}>
                <Accordion.Item eventKey="0" style={{ marginBottom: "10px" }}>
                    <Accordion.Header >
                        <Col md={7}>
                            <h6 style={{ marginBottom: "0px" }}>Lessons With Video Content</h6>
                        </Col>

                        <Col md={4}>
                            <Row>
                                <Col md={6}><span className="lesson-header-right">3111 Lessons</span></Col>
                                <Col md={6}><span className="lesson-header-right">45 Mins</span></Col>
                            </Row>
                        </Col>
                    </Accordion.Header>
                    <Accordion.Body >
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>2:25</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-lock-fill"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion style={{ marginBottom: "10px" }}>
                <Accordion.Item eventKey="0" style={{ marginBottom: "10px" }}>
                    <Accordion.Header >
                        <Col md={7}>
                            <h6 style={{ marginBottom: "0px" }}>Lessons With Video Content</h6>
                        </Col>

                        <Col md={4}>
                            <Row>
                                <Col md={6}><span className="lesson-header-right">3111 Lessons</span></Col>
                                <Col md={6}><span className="lesson-header-right">45 Mins</span></Col>
                            </Row>
                        </Col>
                    </Accordion.Header>
                    <Accordion.Body >
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>2:25</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-lock-fill"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion style={{ marginBottom: "10px" }}>
                <Accordion.Item eventKey="0" style={{ marginBottom: "10px" }}>
                    <Accordion.Header >
                        <Col md={7}>
                            <h6 style={{ marginBottom: "0px" }}>Lessons With Video Content</h6>
                        </Col>

                        <Col md={4}>
                            <Row>
                                <Col md={6}><span className="lesson-header-right">3111 Lessons</span></Col>
                                <Col md={6}><span className="lesson-header-right">45 Mins</span></Col>
                            </Row>
                        </Col>
                    </Accordion.Header>
                    <Accordion.Body >
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>12:20</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-check2"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="lesson-items-container">
                            <Col md={7}>
                                <a href="#" className="lesson-items-left" ><h6 style={{ marginBottom: "0px" }}>Lesson with video content</h6></a>
                            </Col>
                            <Col md={5} style={{ padding: "0px", alignItems: "center" }}>
                                <Row>
                                    <Col md={6} style={{ textAlign: "center" }}><Button variant="primary" style={{ padding: "2px 8px" }}>Preview</Button></Col>
                                    <Col md={3}><span>2:25</span></Col>
                                    <Col md={3} style={{ textAlign: "center" }}><span><i class="bi bi-lock-fill"></i></span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row >
    );
}

function InstructorContent() {
    return (
        <Row style={{ width: "95%", margin: "auto" }}>
            <Row style={{ padding: "0px", margin: "0px" }}>
                <Col md={2} style={{ paddingLeft: "0px" }}>
                    <Image src="./image/CourseSingle/logo192.png" width={"100%"} style={{ border: "1px solid", borderRadius: "5px" }}></Image>
                </Col>
                <Col md={10} style={{ padding: "0px" }}>
                    <h5>Thin Press</h5>
                    <p style={{ marginBottom: "4px" }}>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best aaaaaaa asd</p>
                    <p style={{ marginBottom: "4px" }}><i class="bi bi-people-fill"></i>156 Students</p>
                    <p><i class="bi bi-file-earmark-text"></i>20 Lessons</p>
                </Col>
            </Row>
            <Row style={{ padding: "0px", margin: "0px" }}>
                <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best</p>
                <span>
                    <ul style={{ listStyle: 'none', display: "flex", paddingLeft: "0px" }} >
                        <li style={{ paddingRight: "20px" }}>Follow:</li>
                        <li style={{ paddingRight: "10px" }}><i class="bi bi-facebook"></i></li>
                        <li style={{ paddingRight: "10px" }}><i class="bi bi-instagram"></i></li>
                        <li style={{ paddingRight: "10px" }}><i class="bi bi-whatsapp"></i></li>
                        <li style={{ paddingRight: "10px" }}><i class="bi bi-youtube"></i></li>
                    </ul>
                </span>

            </Row>
        </Row>
    );
}

function FAQsContent() {
    return (
        <Row style={{ width: "95%", margin: "auto" }}>
            <Accordion style={{ marginBottom: "15px" }}>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What Does Royalty Free Mean ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{ marginBottom: "15px" }}>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What Does Royalty Free Mean ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{ marginBottom: "15px" }}>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What Does Royalty Free Mean ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{ marginBottom: "15px" }}>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>What Does Royalty Free Mean ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
    );
}

function ReviewContent() {
    return (
        <Row style={{ width: "95%", margin: "auto", padding: "0px" }}>
            <h5>Comments</h5>
            <Container fluid style={{ paddingRight: "0px" }}>
                <Col md={2} style={{ paddingRight: "0px" }}><h2>4.0</h2></Col>
                <Col md={10} style={{ padding: "0px" }}>
                    <span>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </span>
                    <p style={{ fontSize: "12px" }}>based on 164,951 ratings</p>
                </Col>
            </Container>
            <Container fluid style={{ paddingRight: "0px" }}>
                <Row style={{ marginRight: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                    <Col md={3}>
                        <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i style={{ paddingRight: "10px" }} class="bi bi-star-fill"></i>
                            90%
                        </span>
                    </Col>
                    <Col md={9} style={{ padding: "0px", paddingTop: "5px" }}>
                        <ProgressBar now={90} style={{backgroundColor:"white"}}/>
                    </Col>
                </Row>

                <Row style={{ marginRight: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                    <Col md={3}>
                        <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i style={{ paddingRight: "10px" }} class="bi bi-star"></i>
                            5%
                        </span>
                    </Col>
                    <Col md={9} style={{ padding: "0px", paddingTop: "5px" }}>
                        <ProgressBar now={5} style={{backgroundColor:"white"}}/>
                    </Col>
                </Row>

                <Row style={{ marginRight: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                    <Col md={3}>
                        <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i style={{ paddingRight: "10px" }} class="bi bi-star"></i>
                            2%
                        </span>
                    </Col>
                    <Col md={9} style={{ padding: "0px", paddingTop: "5px" }}>
                        <ProgressBar now={2} style={{backgroundColor:"white"}}/>
                    </Col>
                </Row>

                <Row style={{ marginRight: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                    <Col md={3}>
                        <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i style={{ paddingRight: "10px" }} class="bi bi-star"></i>
                            1%
                        </span>
                    </Col>
                    <Col md={9} style={{ padding: "0px", paddingTop: "5px" }}>
                        <ProgressBar now={1} style={{backgroundColor:"white"}}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ paddingRight: "0px" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row >
                            <Col md={2}>
                                <Image src="./image/CourseSingle/logo192.png" width={"100%"} roundedCircle style={{ border: "1px solid" }} />
                            </Col>
                            <Col md={10} style={{ padding: "0px" }}>
                                <Row style={{ display: "flex" }}>
                                    <h6 style={{ flex: "2" }}>Laura Hipster</h6>
                                    <span style={{ flex: "1", fontSize: "14px" }}>October 03, 2022</span>
                                </Row>
                                <p style={{ marginBottom: "0px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                </p>
                                <span><i class="bi bi-reply"></i><a href="#" style={{textDecoration:"none", color:"black"}}>Reply</a></span>
                            </Col>
                        </Row>

                    </ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Container>
            <Row>
                <Container fluid style={{ paddingRight: "0px" }}>
                    <Row >
                        <Col style={{display:"flex", justifyContent:"center"}}>
                            <Pagination style={{ margin: "10px 0px 10px 0px" }}>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Row>
    );
}

function Comment() {
    return (
        <Container>
            <Row>
                <h6>Leave A Comment</h6>
                <p>Your email address will not be public. Required fill are marked *.</p>
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="formGridCity" className="col-sx-12 col-md-6" style={{ marginBottom: "10px" }}>
                            <Form.Control placeholder='Name*' />
                        </Form.Group>

                        <Form.Group controlId="formGridState" className="col-sx-12 col-md-6" style={{ marginBottom: "10px" }}>
                            <Form.Control placeholder='Email*' />
                        </Form.Group>
                    </Row>

                    <FloatingLabel controlId="floatingTextarea2" label="Comment" className="col-sx-12 col-md-12" style={{ marginBottom: "15px" }}>
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Form style={{ marginBottom: '10px' }}>
                        <Form.Check
                            type="checkbox"
                            id="custom-switch"
                            label="Save my name, email in this browser for the next time I comment"
                        />
                    </Form>
                    <Row>
                        <Col >
                            <Button type="submit" className="comment-button">
                                Posts Comment
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>

    );

}