import {
  Row,
  Col,
  Container,
  InputGroup,
  Button,
  Form,
  DropdownButton,
  Card,
  Dropdown,
  Image,
  Pagination,
  ProgressBar,
  Modal,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useParams, Link } from "react-router-dom";
import HeaderUser from "./HomepageUser/HeaderUser";
import Footer from "./HomepageUser/Footer";
Chart.register(ArcElement);

export default function StudentAccountList() {
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9999/enroll")
      .then((res) => res.json())
      .then((result) => {
        setEnrollments(result);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:9999/course")
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:9999/user")
      .then((res) => res.json())
      .then((result) => {
        const filteredStudents = result.filter((user) => user.rId === "3");
        setStudents(filteredStudents);
      })
      .catch((error) => console.log(error));
  }, []);

  const getCurrentCourseName = (userId) => {
    const currentEnrollment = enrollments.find(
      (enroll) => enroll.userId === userId && !enroll.status
    );
    if (currentEnrollment) {
      const currentCourse = courses.find(
        (course) => course.id === currentEnrollment.courseId
      );
      return currentCourse ? currentCourse.cName : "None";
    }
    return "None";
  };

  const calculateProgress = (progress) => {
    const totalModules = progress.length;
    const completedModules = progress.filter(
      (module) => module.moduleStatus
    ).length;
    return `${completedModules}/${totalModules}`;
  };

  const countPassedCourses = () => {
    let passedCount = 0;
    enrollments.forEach((enrollment) => {
      if (enrollment.status && enrollment.score >= 4) {
        passedCount++;
      }
    });
    return passedCount;
  };

  const countFailedCourses = () => {
    let failedCount = 0;
    enrollments.forEach((enrollment) => {
      if (enrollment.status && enrollment.score < 4) {
        failedCount++;
      }
    });
    return failedCount;
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-muted">Student Accounts Overview</h2>
          <p className="lead">
            Welcome to the student accounts dashboard for our e-learning
            platform.
          </p>
          <p>
            This dashboard provides insights into student activity and account
            management.
          </p>
          <p>
            Total Student Accounts: <strong>{students.length}</strong>
            <br />
            New Students This Week: <strong>25</strong> {/* Placeholder */}
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
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            className="float-right"
          >
            <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Date Created</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Courses Completed</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      {students.map((student) => {
        const currentEnrollment = enrollments.find(
          (enroll) => enroll.userId === student.id && !enroll.status
        );
        if (currentEnrollment) {
          return (
            <Row key={student.id} className="mb-4">
              <Col md={11} style={{ margin: "10px 0px" }}>
                <Card className="flex-row">
                  <div
                    className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
                    style={{ width: "190px", height: "190px" }}
                  >
                    <Card.Img
                      src="/image/CourseList/Account.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>
                      <strong>Student Name: {student.uFullName}</strong>
                    </Card.Title>
                    <Card.Text>
                      <strong>Course Information:</strong>
                      <br />
                      Course Done: <strong>{enrollments.length}</strong> <br />
                      Current Course:{" "}
                      <strong>{getCurrentCourseName(student.id)}</strong> <br />
                      Progress: {calculateProgress(currentEnrollment.progress)}
                      <br />
                      Passed courses: {countPassedCourses()}
                      <br />
                      Failed courses: {countFailedCourses()}
                      <br />
                      <strong>Contact Information:</strong>
                      <br />
                      <i className="bi bi-envelope"></i> {student.uMail}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-end">
                      <Link
                        to={`/student/${student.id}`}
                        className="btn btn-primary"
                      >
                        Student Detail
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        }
        return null;
      })}
    </Container>
  );
}
export { StudentInfo };

function StudentInfo() {
  const { uId } = useParams();
  const [student, setStudent] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9999/user/${uId}`)
      .then((res) => res.json())
      .then((result) => {
        setStudent(result);
        setEditedStudent(result); // Initialize editedStudent with fetched data
      })
      .catch((error) => console.error("Error fetching user:", error));

    fetch(`http://localhost:9999/enroll`)
      .then((res) => res.json())
      .then((result) => {
        const filteredEnrollments = result.filter(
          (enroll) => enroll.userId === uId
        );
        setEnrollments(filteredEnrollments);
      })
      .catch((error) => console.error("Error fetching enrollments:", error));

    fetch(`http://localhost:9999/course`)
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, [uId]);

  const getCurrentCourseName = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.cName : "None";
  };

  const calculateProgress = (progress) => {
    const totalModules = progress.length;
    const completedModules = progress.filter(
      (module) => module.moduleStatus
    ).length;
    return `${completedModules}/${totalModules}`;
  };

  const countPassedCourses = () => {
    return enrollments.filter(
      (enrollment) => enrollment.status && enrollment.score >= 4
    ).length;
  };

  const handleEditClick = () => {
    // Open the edit modal and initialize editedStudent with current student data
    setShowEditModal(true);
    setEditedStudent(student);
  };

  const handleCloseModal = () => {
    // Close the edit modal and reset editedStudent to current student data
    setShowEditModal(false);
    setEditedStudent(student);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleSaveChanges = () => {
    // Save changes to backend and update student state
    fetch(`http://localhost:9999/user/${uId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedStudent),
    })
      .then((res) => res.json())
      .then((updatedStudent) => {
        setStudent(updatedStudent);
        setShowEditModal(false);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  if (!student || !enrollments || !courses) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <HeaderUser />
      <Row>
        <Col md={4}>
          <div className="mb-4">
            <div
              className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3"
              style={{ width: "150px", height: "150px" }}
            >
              <Image
                src={student.uImage}
                alt="Student"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <strong>Name:</strong> {student.uFullName}
            <br />
            <small className="text-muted">{student.uMajor} Major</small>
          </div>

          <div className="mb-4">
            <strong>Full Name:</strong> {student.uFullName}
            <br /> <br />
            <strong>Gender:</strong> {student.uGender}
            <br /> <br />
            <strong>Date of Birth:</strong> {student.uDate}
            <br /> <br />
            <strong>Occupation:</strong> Student
            <br /> <br />
            <strong>Phone Number:</strong> {student.uPhone}
            <br /> <br />
            <strong>Email:</strong> {student.uMail}
            <br /> <br />
            <strong>Major:</strong> {student.uMajor}
          </div>

          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <Container>
                <Row className="mb-3" style={{ margin: "10px 10px" }}>
                  <Col
                    className="border-end pe-3"
                    style={{
                      border: "1px solid gray",
                      boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                    }}
                  >
                    Total Course Finished: {enrollments.length}
                  </Col>
                  <Col
                    className="border-end pe-3"
                    style={{
                      border: "1px solid gray",
                      boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                    }}
                  >
                    Course Pass: {countPassedCourses()}
                  </Col>
                  <Col
                    style={{
                      border: "1px solid gray",
                      boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                    }}
                  >
                    Course Failed:{" "}
                    {
                      enrollments.filter(
                        (enrollment) =>
                          enrollment.status && enrollment.score < 4
                      ).length
                    }
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

                {enrollments.map((enrollment) => (
                  <Row key={enrollment.id}>
                    <Col>
                      <Container className="border rounded border-lightgray p-3 mb-4">
                        <Row className="mb-4">
                          <Row>
                            <Col>
                              <strong>
                                {getCurrentCourseName(enrollment.courseId)}
                              </strong>
                            </Col>
                            <Col className="text-end">
                            <Button as={Link} to={`/homepageUser/${uId}/course/${enrollment.id}`} variant="outline-primary" size="sm">Course Detail</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>
                                Enrollment Date: {enrollment.enRollDate}
                              </span>
                              <br />
                              <span>Score: {enrollment.score}</span>
                              <br />
                              <span>
                                Status:{" "}
                                {enrollment.status
                                  ? enrollment.score >= 4
                                    ? "Passed"
                                    : "Failed"
                                  : "In Progress"}
                              </span>
                              <br />
                              <span>
                                Course Progress:{" "}
                                {calculateProgress(enrollment.progress)}
                              </span>
                            </Col>
                          </Row>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                ))}
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="uFullName"
                value={editedStudent.uFullName || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter gender"
                name="uGender"
                value={editedStudent.uGender || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                name="uDate"
                value={editedStudent.uDate || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="uPhone"
                value={editedStudent.uPhone || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="uMail"
                value={editedStudent.uMail || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </Container>
  );
}
