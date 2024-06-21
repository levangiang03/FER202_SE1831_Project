import { Container, Breadcrumb, Col, Row, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CreateCourse.css";


export default function CreateCourse() {
    return (
        <Container fluid>
            <Container style={{ width: "90%" }}>
                <Navigation />
                <StepProgress />
                <CourseInformation />
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
            <Breadcrumb.Item active>Add New Course</Breadcrumb.Item>
        </Breadcrumb>
    );
}

function StepProgress() {
    return (
        <Breadcrumb className="nav-menu">
            <Breadcrumb.Item className="nav-name" active>Course Information </Breadcrumb.Item>
            <Breadcrumb.Item className="nav-name" active>
                Upload Course Materials
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Pricing</Breadcrumb.Item>
            <Breadcrumb.Item active>Publish</Breadcrumb.Item>
        </Breadcrumb>
    );
}

function CourseInformation() {
    return (
        <Row>
            <Col md={6}>
                <RightCourseInfo />
            </Col>
        </Row>
    );
}

function RightCourseInfo() {
    return (
        <>
            <h3>Course Information</h3>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label><b>Title</b></Form.Label>
                    <Form.Control type="email" placeholder="e.g Introduction to Data Analysis" />
                </Form.Group>
            </Form>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label><b>Category</b></Form.Label>
                        <Form.Select defaultValue="Data Management">
                            <option>Data Management</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label><b>Level</b></Form.Label>
                        <Form.Select defaultValue="">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" >
                    <Form.Label><b>Description</b></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group  className="mb-3">
                    <Form.Label><b>Cover Image</b></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form>
            <Button>Save & Continue</Button>
        </>
    );
}