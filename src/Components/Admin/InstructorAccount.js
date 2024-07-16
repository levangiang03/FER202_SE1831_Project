import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Accordion, Button, Image, Pagination, Form, Dropdown, DropdownButton, InputGroup, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


export default function InstructorAccountList() {
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDeactivateModal, setShowDeactivateModal] = useState(false);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [filterActive, setFilterActive] = useState(true);

    useEffect(() => {

        fetch("http://localhost:9999/user")
            .then(res => res.json())
            .then(result => {
         
                fetch("http://localhost:9999/account")
                    .then(res => res.json())
                    .then(accounts => {

                        const updatedInstructors = result.map(user => {
                            const account = accounts.find(acc => acc.id === user.aId);
                            return {
                                ...user,
                                status: account ? account.status : false 
                            };
                        });
                        setInstructors(updatedInstructors);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

      
        fetch("http://localhost:9999/course")
            .then(res => res.json())
            .then(result => {
                setCourses(result);
            })
            .catch(error => console.log(error));
    }, []);

    const handleToggleAccountStatus = async () => {
        if (selectedInstructor) {
            try {
      
                const accountResponse = await fetch(`http://localhost:9999/account/${selectedInstructor.aId}`);
                const accountData = await accountResponse.json();
                accountData.status = !selectedInstructor.status;
                const updatedAccountResponse = await fetch(`http://localhost:9999/account/${selectedInstructor.aId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(accountData)
                });

                if (updatedAccountResponse.ok) {
                    setInstructors(prevInstructors =>
                        prevInstructors.map(inst =>
                            inst.id === selectedInstructor.id ? { ...inst, status: accountData.status } : inst
                        )
                    );
                    setShowDeactivateModal(false);
                } else {
                    console.error('Failed to update account status');
                }
            } catch (error) {
                console.error('Error toggling account status:', error);
            }
        }
    };

    const handleCloseDeactivateModal = () => {
        setShowDeactivateModal(false);
        setSelectedInstructor(null);
    };

    const handleShowDeactivateModal = (instructor) => {
        setSelectedInstructor(instructor);
        setShowDeactivateModal(true);
    };

    const getInstructorName = (id) => {
        const instructor = instructors.find(inst => inst.id === id);
        return instructor ? instructor.uFullName : 'Unknown';
    };

    const filteredInstructors = instructors.filter(instructor =>
        instructor.uFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredAndActiveInstructors = filteredInstructors.filter(instructor =>
        filterActive ? instructor.status === true : instructor.status === false
    );

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
                        Total Instructors: <strong>{instructors.length}</strong><br />
                    </p>
                    <Link to="/create-account" className="btn btn-primary">
                        Create New Account
                    </Link>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search by Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <DropdownButton id="dropdown-basic-button" title="Filter" className="float-right">
                        <Dropdown.Item onClick={() => setFilterActive(true)}>Active</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterActive(false)}>Deactivated</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>

            {filteredAndActiveInstructors.map(instructor => (
                <Row key={instructor.id} className="mb-4">
                    <Col md={9} style={{ margin: "10px 0px" }}>
                        <Card className="flex-row">
                            <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "190px", height: "190px" }}>
                                <Image src={instructor.uImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title><strong>Instructor Name: {instructor.uFullName}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Email: </strong> {instructor.uMail} <br />
                                    <strong>Phone: </strong> {instructor.uPhone} <br />
                                    <strong>Major: </strong> {instructor.uMajor} <br />
                                    <strong>Date of Birth: </strong> {instructor.uDate} <br />
                                    <strong>Gender: </strong> {instructor.uGender} <br />
                                </Card.Text>
                                <Container style={{ margin: "20px 10px" }}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>See Courses</Accordion.Header>
                                            <Accordion.Body>
                                                {courses?.filter(course => course.instructorId === instructor.id).length > 0 ? (
                                                    <ul>
                                                        {courses.filter(course => course.instructorId === instructor.aId).map(course => (
                                                            <li key={course.id}>{course.cName}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>None</p>
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>

                                <div className="mt-auto d-flex justify-content-between">
                                    <Link to={`/instructor/${instructor.id}`} className="btn btn-primary">Instructor Detail</Link>
                                    <Button
                                        variant={instructor.status ? "danger" : "success"}
                                        onClick={() => handleShowDeactivateModal(instructor)}
                                    >
                                        {instructor.status ? "Deactivate Account" : "Reactivate Account"}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
            <Modal show={showDeactivateModal} onHide={handleCloseDeactivateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedInstructor?.status ? "Deactivate Account" : "Reactivate Account"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {selectedInstructor?.status
                            ? "Are you sure you want to deactivate this instructor's account?"
                            : "Are you sure you want to reactivate this instructor's account?"}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeactivateModal}>
                        Cancel
                    </Button>
                    <Button variant={selectedInstructor?.status ? "danger" : "success"} onClick={handleToggleAccountStatus}>
                        {selectedInstructor?.status ? "Deactivate" : "Reactivate"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export { InstructorAccount };
function InstructorAccount() {
    const { uId } = useParams();
    const [instructor, setInstructor] = useState(null);
    const [courses, setCourses] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [monthlyRevenueAfterInstructor, setMonthlyRevenueAfterInstructor] = useState(0);

    useEffect(() => {

        fetch(`http://localhost:9999/user/${uId}`)
            .then(res => res.json())
            .then(instructorData => {
                setInstructor(instructorData);
            })
            .catch(error => console.log(error));


        fetch(`http://localhost:9999/course?instructorId=${uId}`)
            .then(res => res.json())
            .then(courseData => {
                setCourses(courseData);
                calculateTotalRevenue(courseData);
                calculateMonthlyRevenueAfterInstructor(courseData);
            })
            .catch(error => console.log(error));
    }, [uId]);


    const calculateTotalRevenue = (courses) => {
        const total = courses.reduce((acc, course) => acc + (course.cEnrolledStudent * course.cPrice), 0);
        setTotalRevenue(total);
    };

    const calculateMonthlyRevenueAfterInstructor = (courses) => {
        const currentMonth = new Date().getMonth();
        const monthlyRevenue = courses.reduce((acc, course) => {
            const courseRevenue = course.cEnrolledStudent * course.cPrice;
            acc += courseRevenue;
            return acc;
        }, 0);

        const instructorRevenueShare = monthlyRevenue * 0.05;
        const revenueAfterInstructor = monthlyRevenue - instructorRevenueShare;
        setMonthlyRevenueAfterInstructor(revenueAfterInstructor);
    };

    return (
        <Container>
            <Row className="my-4">
                <Col md={4} style={{ border: "1px solid gray", padding: "20px" }}>
                    <Link to="/admin" className="btn btn-secondary mt-3">
                        Back to Admin
                    </Link>
                    {instructor && (
                        <div className="mb-4">
                            <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3" style={{ width: "150px", height: "150px" }}>
                                <img src={`/image/CourseList/Account.png`} alt="Instructor" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <strong>Name:</strong> {instructor.uFullName}<br />
                            <small className="text-muted">{instructor.uMajor} Major</small>
                            <br /><br />
                            <strong>Email:</strong> {instructor.uMail}<br />
                            <strong>Phone:</strong> {instructor.uPhone}<br />
                        </div>
                    )}
                    <div className="mb-4">
                        <strong>Course Created:</strong> {courses.length}<br />
                        <strong>Students Enrolled:</strong> {courses.reduce((total, course) => total + course.cEnrolledStudent, 0)}
                    </div>
                    <div>
                        <strong>Total Revenue generated from courses:</strong> ${totalRevenue}
                    </div>
                    <div>
                        <strong>Revenue this month after instructor pay:</strong> ${monthlyRevenueAfterInstructor}
                    </div>
                </Col>

                <Col md={8}>
                    <Row className="mb-3">
                        <Col className="border-end pe-3" style={{ border: "1px solid gray", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                            Total course created {courses.length}
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        {courses.map(course => (
                            <Col md={12} key={course.id}>
                                <Card className="border rounded border-lightgray p-3 mb-3">
                                    <Row>
                                        <Col md={2}>
                                            <Image src={course.cImage} alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                        </Col>
                                        <Col md={10} className="d-flex flex-column">
                                            <Row className="mb-4">
                                                <Col>
                                                    <strong>{course.cName}</strong>
                                                </Col>
                                            </Row>
                                            <Row className="mb-2">
                                                <Col>
                                                    <span>Student enrolled: {course.cEnrolledStudent}, Rating: {Array.from({ length: Math.floor(course.cRate) }, (_, index) => <i key={index} className="bi bi-star-fill"></i>)}{course.cRate % 1 !== 0 && <i className="bi bi-star-half"></i>}</span>
                                                </Col>
                                            </Row>
                                            <Row className="mb-2">
                                                <Col>
                                                    <span>Created date: {course.uCreateDate}</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="d-flex justify-content-end">
                                                    <Button variant="outline-primary" size="sm">Course Detail</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
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
                </Col>
            </Row>
        </Container>
    );
}


