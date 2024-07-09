import { Row, Col, Container, InputGroup, Button, Form, DropdownButton, Card, Dropdown, ProgressBar, Carousel, Image, Badge, FormControl, Pagination } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


export default function StudentAccountList() {
    const [enrollments, setEnrollments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("http://localhost:9999/enroll")
            .then(res => res.json())
            .then(result => {
                const filteredEnrollments = result.filter(enroll => enroll.userId === "3");
                setEnrollments(filteredEnrollments);
            })
            .catch(error => console.log(error));

        fetch("http://localhost:9999/course")
            .then(res => res.json())
            .then(result => {
                setCourses(result);
            })
            .catch(error => console.log(error));

        fetch("http://localhost:9999/user")
            .then(res => res.json())
            .then(result => {
                const filteredStudents = result.filter(user => user.rId === "3");
                setStudents(filteredStudents);
            })
            .catch(error => console.log(error));
    }, []);

    const getCurrentCourseName = (courseId) => {
        const course = courses.find(course => course.id === courseId);
        return course ? course.cName : 'None';
    };

    const calculateProgress = (progress) => {
        const totalModules = progress.length;
        const completedModules = progress.filter(module => module.moduleStatus).length;
        return `${completedModules}/${totalModules}`;
    };

    const countPassedCourses = () => {
        let passedCount = 0;
        enrollments.forEach(enrollment => {
            const allModulesCompleted = enrollment.progress.every(module => module.moduleStatus);
            if (allModulesCompleted) {
                passedCount++;
            }
        });
        return passedCount;
    };

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2 className="text-muted">Student Accounts Overview</h2>
                    <p className="lead">
                        Welcome to the student accounts dashboard for our e-learning platform.
                    </p>
                    <p>
                        This dashboard provides insights into student activity and account management.
                    </p>
                    <p>
                        Total Student Accounts: <strong>{students.length}</strong><br />
                        New Students This Week: <strong>25</strong> {/* Assuming this is a placeholder */}
                    </p>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control 
                            type="text" 
                            placeholder="Search..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <DropdownButton id="dropdown-basic-button" title="Sort By" className="float-right">
                        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Date Created</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Courses Completed</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            {enrollments.map(enrollment => (
                <Row key={enrollment.id} className="mb-4">
                    <Col md={11} style={{ margin: "10px 0px" }}>
                        <Card className="flex-row">
                            <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                                <Card.Img src="/image/CourseList/Account.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title><strong>Student Name: {students.map(student => student.uFullName)}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Course Information:</strong><br />
                                    Course done: {enrollments.length}<br />
                                    Current Course: <strong>{getCurrentCourseName(enrollment.courseId)}</strong> <br />
                                    Progress: {calculateProgress(enrollment.progress)}<br />
                                    Passed courses: {countPassedCourses()}<br />
                                    Failed courses: None<br />
                                    <strong>Contact Information:</strong><br />
                                    <i className="bi bi-envelope"></i> {students.map(student => student.uMail)}
                                </Card.Text>
                                <div className="mt-auto d-flex justify-content-end">
                                    <Button variant="primary">Detail</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export { StudentAccount };

function StudentAccount() {

    const data = {
        labels: ['Finished', 'Passed', 'Failed', 'In Progress'],
        datasets: [
            {
                data: [8, 6, 1, 1],
                backgroundColor: ['#28a745', '#007bff', '#dc3545', '#ffc107'],
                hoverBackgroundColor: ['#218838', '#0069d9', '#c82333', '#ff9800'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };




    return (
        <Container>
            <Row>
                <Col md={4} style={{ border: "1px solid gray" }}>
                    <div className="mb-4">
                        <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3" style={{ width: "150px", height: "150px" }}>
                            <Image src="/image/CourseList/Account.png" alt="Student" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <strong>Name:</strong> William David<br />
                        <small className="text-muted">Engineering Major at Michigan University</small>
                    </div>

                    <div className="mb-4">
                        <strong>Full Name:</strong> John Doe<br /> <br />
                        <strong>Gender:</strong> Male<br /> <br />
                        <strong>Date of Birth:</strong> 01/01/1990<br /> <br />
                        <strong>Occupation:</strong> Student<br /> <br />
                        <strong>Account Created Date:</strong> 22/06/2024<br /> <br />
                        <strong>Phone Number:</strong> +123456789<br /> <br />
                        <strong>Email:</strong> example@gmail.com<br /> <br />
                        <strong>Major:</strong> Engineering
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={12}>
                            <Container>
                                <Row className="mb-3" style={{ margin: "10px 10px" }}>
                                    <Col className="border-end pe-3" style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                                        Total Course Finished: 8
                                    </Col>
                                    <Col className="border-end pe-3" style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                                        Course Pass: 6
                                    </Col>
                                    <Col style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                                        Course Failed: 1
                                    </Col>
                                </Row>
                                <Row className="border rounded border-lightgray p-3 mb-4">
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
                                    <Col>
                                        <Container className="border rounded border-lightgray p-3">
                                            <Row className="mb-4">
                                                <Row>
                                                    <Col>
                                                        <strong>Engineering for Beginners</strong>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <span>Course Progress: Finish 10/10, Grade: A+, Finish Date: 10/5/2024</span>
                                                    </Col>
                                                </Row>
                                            </Row>

                                            <Row className="mb-4">
                                                <Row>
                                                    <Col>
                                                        <strong>Coding in C#</strong>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <span>Course Progress: Finish 8/10, Grade: B, Finish Date: 8/15/2024</span>
                                                    </Col>
                                                </Row>
                                            </Row>

                                            <Row className="mb-4">
                                                <Row>
                                                    <Col>
                                                        <strong>How to Tie a Rope</strong>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <span>Course Progress: Finish 5/5, Grade: A, Finish Date: 6/30/2024</span>
                                                    </Col>
                                                </Row>
                                            </Row>
                                            <Row className="mb-4">
                                                <Row>
                                                    <Col>
                                                        <strong>Engineering for Beginners</strong>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <span>Course Progress: Finish 10/10, Grade: A+, Finish Date: 10/5/2024</span>
                                                    </Col>
                                                </Row>
                                            </Row>
                                            <Row className="mb-4">
                                                <Row>
                                                    <Col>
                                                        <strong>Engineering for Beginners</strong>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <span>Course Progress: Finish 10/10, Grade: A+, Finish Date: 10/5/2024</span>
                                                    </Col>
                                                </Row>
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
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row>
                <Col md={4} className="text-center mb-4">
                    <Row className="mt-3" style={{ border: "1px solid grey" }}>
                        <Col md={12}>
                            <h5>Course Status</h5>
                        </Col>
                        <Col md={12} style={{ maxHeight: "200px" }}>
                            <Doughnut data={data} options={options} />
                        </Col>
                        <Col md={12}>
                            <p>Course Done: <strong>{data.datasets[0].data[0]}</strong></p>
                            <p><span className="badge bg-danger me-2"></span> Course Failed: <strong>{data.datasets[0].data[2]}</strong></p>
                            <p><span className="badge bg-primary me-2"></span> Course Passed: <strong>{data.datasets[0].data[1]}</strong></p>
                            <p><span className="badge bg-warning me-2"></span> Course In Progress: <strong>{data.datasets[0].data[3]}</strong></p>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ margin: "10px 10px" }}>
                    <Container className="border rounded border-lightgray p-3 mb-4">
                        <Row className="mb-4">
                            <Col>
                                <strong>Current Course:</strong> <span className="fw-bold">Networking and Tackling data congestion in Pipeline</span>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <span>Course Progress: <strong>6/10</strong></span>
                            </Col>
                            <Col className="text-end">
                                <Button variant="outline-primary" size="sm">Course Detail</Button>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <ProgressBar now={60} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}