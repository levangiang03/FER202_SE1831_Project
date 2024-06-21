import { Col, Container, Row, Card, Button, ListGroup, Image } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import './ProfileInstructor.css';

export default function ProfileInstructor() {
    return (
        <Container fluid style={{backgroundColor:"#f5f5f5"}}>
            <Container style={{ width: "90%" }}>
                <Row style={{ paddingTop: "50px" }}>
                    <Col lg={3} style={{ marginRight: "20px" }}>
                        <LeftProfileContent />
                    </Col>
                    <Col style={{ padding: "0px" }}>
                        <RightProfileContent />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

function LeftProfileContent() {
    return (
        <Col style={{ padding: "0px", margin: "0px" }}>

            {/* Personal details Card */}
            <Card style={{ textAlign: "center", marginBottom: "20px" }}>
                <Button variant="outline" style={{ border: "none", textAlign: "right" }}><i class="bi bi-pencil profile-icons"></i></Button>
                <Card.Title style={{marginBottom:"20px"}}>
                    Personal details
                </Card.Title>
                <Card.Img src="./image/ProfileInstructor/logo192.png" style={{ borderRadius: "50%", border: "1px solid", width: "40%", margin: "auto" }} />
                <Card.Body>
                    <Card.Title><h3>Card Title</h3></Card.Title>
                    <Card.Text>
                        <Button className="profile-button-share-link"><i class="bi bi-link-45deg profile-icons"></i>Share profile link</Button>
                    </Card.Text>
                    <Button href="#" className="profile-button-update" style={{ border: "none" }}>Update profile</Button>
                </Card.Body>
            </Card>

            {/* Highlights Card */}
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                    <Card.Title style={{marginBottom:"20px"}}>Highlights</Card.Title>
                    <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col md={2}>
                            <Card.Img src="./image/ProfileInstructor/logo192.png" style={{ border: "1px solid", borderRadius: "0px", marginTop: "5px" }} />
                        </Col>
                        <Col md={9}>
                            <p style={{ marginBottom: "5px" }}>Software Development Lifecycle Specialization (University of Minnesota)</p>
                            <a href="#">View Certificate</a>
                        </Col>
                    </Card.Text>
                    <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col md={2}>
                            <Card.Img src="./image/ProfileInstructor/logo192.png" style={{ border: "1px solid", borderRadius: "0px", marginTop: "5px" }} />
                        </Col>
                        <Col md={9}>
                            <p style={{ marginBottom: "5px" }}>Software Development Lifecycle Specialization (University of Minnesota)</p>
                            <a href="#">View Certificate</a>
                        </Col>
                    </Card.Text>
                    <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col md={2}>
                            <Card.Img src="./image/ProfileInstructor/logo192.png" style={{ border: "1px solid", borderRadius: "0px", marginTop: "5px" }} />
                        </Col>
                        <Col md={9}>
                            <p style={{ marginBottom: "5px" }}>Software Development Lifecycle Specialization (University of Minnesota)</p>
                            <a href="#">View Certificate</a>
                        </Col>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Addition info */}
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                    <Card.Title style={{marginBottom:"20px"}}>Addition info</Card.Title>
                    <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                        Help recruiters get to know you better by describing what makes you a great candidate and sharing other links.
                    </Card.Text>
                    <Button className="right-content-button" ><i class="bi bi-plus profile-icons"></i>Add addition info</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

function RightProfileContent() {
    return (
        <Container fluid style={{ padding: "0px" }}>
            <h3 style={{marginBottom:"20px"}}>Experience</h3>
            {/* Project */}
            <ProjectsInfo />
            <WorkHistory />
            <h3 style={{marginBottom:"20px"}}>Education</h3>
            <CredentialInfor />
        </Container>

    );
}

function ProjectsInfo() {
    return (
        <Card style={{ marginBottom: "20px", width: "100%" }}>
            <Card.Body>
                <Card.Title style={{marginBottom:"20px"}}>
                    Projects
                    <a href='#' className="infor-icons"><i class="bi bi-info-circle"></i></a>
                </Card.Title>
                <ListGroup style={{ marginBottom: "30px" }}>
                    <ListGroup.Item className="list-items" >
                        <Col md={9}>
                            It looks like you have 1 project that hasn't been added yet.
                        </Col>
                        <Col style={{ display: "flex", justifyContent:"end"}}>
                            <Button className="right-content-button" ><i class="bi bi-plus profile-icons"></i>Add project</Button>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item className="list-items" >
                        <Col md={9}>
                            <p style={{ marginBottom: "0px" }}><b>Showcase your skills to recruiters with job-relevant projects</b></p>
                            Add projects here to demonstrate your technical expertise and ability to solve real-world problems.
                        </Col>
                        <Col style={{ textAlign: "right" }}>
                            <a href="#" >Browse Projects</a>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

function WorkHistory() {
    return (
        <Card style={{ marginBottom: "30px", width: "100%" }}>
            <Card.Body>
                <Card.Title style={{marginBottom:"20px"}}>
                    Work History
                    <a href='#' className="infor-icons"><i class="bi bi-info-circle profile-icons"></i></a>
                </Card.Title>
                <ListGroup>
                    <ListGroup.Item className="list-items" >
                        <Col md={9}>
                            Add your past work experience here. If you’re just starting out, you can add internships or volunteer experience instead.
                        </Col>
                        <Col style={{ display: "flex", justifyContent:"end"}}>
                            <Button className="right-content-button" ><i class="bi bi-plus profile-icons"></i>Add work experience</Button>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

function CredentialInfor() {
    return (
        <Card style={{ marginBottom: "20px", width: "100%" }}>
            <Card.Body>
                <Card.Title style={{marginBottom:"20px", paddingRight:"10px"}}>
                    Credentials
                    <a href='#' className="infor-icons"><i class="bi bi-info-circle profile-icons"></i></a>
                </Card.Title>
                <ListGroup>
                    <ListGroup.Item className="list-items" >
                        <Col md={9}>
                            Add your educational background here to let employers know where you studied or are currently studying.
                        </Col>
                        <Col style={{ display: "flex", justifyContent:"end"}}>
                            <Button className="right-content-button" ><i class="bi bi-plus profile-icons"></i>Add education</Button>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup style={{border:"none"}} variant="flush">
                    <ListGroup.Item style={{ display: "flex", paddingLeft:"0px" }}>
                        <Col md={1}>
                        <Image src="./image/ProfileInstructor/logo192.png" width={"90%"} style={{border:"1px solid"}}/>
                        </Col>
                        <Col style={{paddingLeft:"15px"}}>
                            <h6>Software Development Lifecycle Specialization (University of Minnesota)</h6>
                            <a href="#">View Certificate</a>
                        </Col>
                    </ListGroup.Item>

                    <ListGroup.Item style={{ display: "flex", paddingLeft:"0px"}}>
                        <Col md={1}>
                        <Image src="./image/ProfileInstructor/logo192.png" width={"90%"} style={{border:"1px solid"}}/>
                        </Col>
                        <Col style={{paddingLeft:"15px"}}>
                            <h6>Web Design for Everybody: Basics of Web Development & Coding Specialization (University of Michigan)</h6>
                            <a href="#">View Certificate</a>
                        </Col>
                    </ListGroup.Item>

                    <ListGroup.Item style={{ display: "flex", paddingLeft:"0px"}}>
                        <Col md={1}>
                        <Image src="./image/ProfileInstructor/logo192.png" width={"90%"} style={{border:"1px solid"}}/>
                        </Col>
                        <Col style={{paddingLeft:"15px"}}>
                            <h6>Computer Communications Specialization (University of Colorado System)</h6>
                            <a href="#">View Certificate</a>
                        </Col>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}