import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Accordion, Button, Image, Pagination, Form, Dropdown,DropdownButton,InputGroup } from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom'; 
import HeaderUser from './HomepageUser/HeaderUser';
import Footer from './HomepageUser/Footer';


export default function InstructorAccountList() {
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("http://localhost:9999/user")
            .then(res => res.json())
            .then(result => {
                const filteredInstructors = result.filter(user => user.rId == 2);
                setInstructors(filteredInstructors);
            })
            .catch(error => console.log(error));

        fetch("http://localhost:9999/course")
            .then(res => res.json())
            .then(result => {
                setCourses(result);
            })
            .catch(error => console.log(error));
    }, []);

    const getInstructorName = (id) => {
        const instructor = instructors.find(inst => inst.id === id);
        return instructor ? instructor.uFullName : 'Unknown';
    };

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
                    <DropdownButton id="dropdown-basic-button" title="Sort By" className="float-right">
                        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Date Joined</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Courses Created</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>

            {instructors.map(instructor => (
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

                                <div className="mt-auto d-flex justify-content-end">
                                    <Link to={`/instructor/${instructor.id}`} className="btn btn-primary">Instructor Detail</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
        
    );
}

function EditCourseForm({ course, onUpdate, onCancel }) {
    const [editedCourse, setEditedCourse] = useState(course);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCourse({ ...editedCourse, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedCourse({ ...editedCourse, cImage: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(editedCourse);
    };

    const handleAddModule = () => {
        if (editedCourse.courseModule.length < 4) {
            const newModuleId = editedCourse.courseModule.length > 0 ? 
                Math.max(...editedCourse.courseModule.map(m => parseInt(m.id))) + 1 : 1;
            setEditedCourse({
                ...editedCourse,
                courseModule: [
                    ...editedCourse.courseModule,
                    { id: newModuleId.toString(), name: `Module ${newModuleId}`, cVideo: [], cQuiz: [] }
                ]
            });
        }
    };

    const handleDeleteModule = (moduleId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.filter(module => module.id !== moduleId)
        });
    };

    const handleModuleChange = (moduleId, field, value) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module =>
                module.id === moduleId ? { ...module, [field]: value } : module
            )
        });
    };

    const handleAddVideo = (moduleId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    const newVideoId = module.cVideo.length > 0 ? 
                        Math.max(...module.cVideo.map(v => parseInt(v.videoId))) + 1 : 1;
                    return {
                        ...module,
                        cVideo: [...module.cVideo, { videoId: newVideoId.toString(), videoTitle: '', videoUrl: '' }]
                    };
                }
                return module;
            })
        });
    };

    const handleDeleteVideo = (moduleId, videoId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cVideo: module.cVideo.filter(video => video.videoId !== videoId)
                    };
                }
                return module;
            })
        });
    };

    const handleVideoChange = (moduleId, videoId, field, value) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cVideo: module.cVideo.map(video => 
                            video.videoId === videoId ? { ...video, [field]: value } : video
                        )
                    };
                }
                return module;
            })
        });
    };

    const handleAddQuiz = (moduleId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    const newQuizId = module.cQuiz.length > 0 ? 
                        Math.max(...module.cQuiz.map(q => parseInt(q.id))) + 1 : 1;
                    return {
                        ...module,
                        cQuiz: [...module.cQuiz, { id: newQuizId.toString(), question: '', choice: [], answer: '' }]
                    };
                }
                return module;
            })
        });
    };

    const handleDeleteQuiz = (moduleId, quizId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cQuiz: module.cQuiz.filter(quiz => quiz.id !== quizId)
                    };
                }
                return module;
            })
        });
    };

    const handleQuizChange = (moduleId, quizId, field, value) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cQuiz: module.cQuiz.map(quiz => 
                            quiz.id === quizId ? { ...quiz, [field]: value } : quiz
                        )
                    };
                }
                return module;
            })
        });
    };

    const handleAddChoice = (moduleId, quizId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cQuiz: module.cQuiz.map(quiz => {
                            if (quiz.id === quizId) {
                                const newChoiceId = quiz.choice.length > 0 ? 
                                    Math.max(...quiz.choice.map(c => parseInt(c.choiceId))) + 1 : 1;
                                return {
                                    ...quiz,
                                    choice: [...quiz.choice, { choiceId: newChoiceId.toString(), choiceName: '' }]
                                };
                            }
                            return quiz;
                        })
                    };
                }
                return module;
            })
        });
    };

    const handleDeleteChoice = (moduleId, quizId, choiceId) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cQuiz: module.cQuiz.map(quiz => {
                            if (quiz.id === quizId) {
                                return {
                                    ...quiz,
                                    choice: quiz.choice.filter(choice => choice.choiceId !== choiceId)
                                };
                            }
                            return quiz;
                        })
                    };
                }
                return module;
            })
        });
    };

    const handleChoiceChange = (moduleId, quizId, choiceId, value) => {
        setEditedCourse({
            ...editedCourse,
            courseModule: editedCourse.courseModule.map(module => {
                if (module.id === moduleId) {
                    return {
                        ...module,
                        cQuiz: module.cQuiz.map(quiz => {
                            if (quiz.id === quizId) {
                                return {
                                    ...quiz,
                                    choice: quiz.choice.map(choice => 
                                        choice.choiceId === choiceId ? { ...choice, choiceName: value } : choice
                                    )
                                };
                            }
                            return quiz;
                        })
                    };
                }
                return module;
            })
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="cName" 
                                value={editedCourse.cName} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="cDescription" 
                                value={editedCourse.cDescription} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number" 
                                name="cPrice" 
                                value={editedCourse.cPrice} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="cateId" 
                                value={editedCourse.cateId} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Overview</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="cOverview" 
                                value={editedCourse.cOverview} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Course Image</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={handleImageChange} 
                            />
                            {editedCourse.cImage && (
                                <Image src={editedCourse.cImage} alt="Course" style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px" }} />
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Course Modules</h3>
                        <Accordion>
                            {editedCourse.courseModule.map((module, moduleIndex) => (
                                <Accordion.Item key={module.id} eventKey={moduleIndex.toString()}>
                                    <Accordion.Header>{module.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Module Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={module.name} 
                                                onChange={(e) => handleModuleChange(module.id, 'name', e.target.value)} 
                                            />
                                        </Form.Group>
                                        
                                        <h5>Videos</h5>
                                        {module.cVideo.map((video, videoIndex) => (
                                            <div key={video.videoId} className="mb-2">
                                                <Form.Group>
                                                    <Form.Label>Video Title</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={video.videoTitle} 
                                                        onChange={(e) => handleVideoChange(module.id, video.videoId, 'videoTitle', e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Video URL</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={video.videoUrl} 
                                                        onChange={(e) => handleVideoChange(module.id, video.videoId, 'videoUrl', e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <Button variant="danger" size="sm" onClick={() => handleDeleteVideo(module.id, video.videoId)}>Delete Video</Button>
                                            </div>
                                        ))}
                                        <Button variant="secondary" size="sm" onClick={() => handleAddVideo(module.id)}>Add Video</Button>

                                        <h5 className="mt-3">Quizzes</h5>
                                        {module.cQuiz.map((quiz, quizIndex) => (
                                            <div key={quiz.id} className="mb-2">
                                                <Form.Group>
                                                    <Form.Label>Question</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={quiz.question} 
                                                        onChange={(e) => handleQuizChange(module.id, quiz.id, 'question', e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <h6>Choices</h6>
                                                {quiz.choice.map((choice, choiceIndex) => (
                                                    <div key={choice.choiceId} className="mb-2">
                                                        <Form.Group>
                                                            <Form.Control 
                                                                type="text" 
                                                                value={choice.choiceName} 
                                                                onChange={(e) => handleChoiceChange(module.id, quiz.id, choice.choiceId, e.target.value)} 
                                                            />
                                                        </Form.Group>
                                                        <Button variant="danger" size="sm" onClick={() => handleDeleteChoice(module.id, quiz.id, choice.choiceId)}>Delete Choice</Button>
                                                    </div>
                                                ))}
                                                <Button variant="secondary" size="sm" onClick={() => handleAddChoice(module.id, quiz.id)}>Add Choice</Button>
                                                <Form.Group className="mt-2">
                                                    <Form.Label>Correct Answer</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={quiz.answer} 
                                                        onChange={(e) => handleQuizChange(module.id, quiz.id, 'answer', e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <Button variant="danger" size="sm" onClick={() => handleDeleteQuiz(module.id, quiz.id)}>Delete Quiz</Button>
                                            </div>
                                        ))}
                                        <Button variant="secondary" size="sm" onClick={() => handleAddQuiz(module.id)}>Add Quiz</Button>

                                        <div className="mt-2">
                                            <Button variant="danger" size="sm" onClick={() => handleDeleteModule(module.id)}>Delete Module</Button>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                        <Button variant="secondary" onClick={handleAddModule} className="mt-2">Add Module</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button variant="primary" type="submit">Update Course</Button>
                        <Button variant="secondary" onClick={onCancel} className="ms-2">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

 
export {InstructorInfo};
function InstructorInfo() {
    const { uId } = useParams();
    const [instructor, setInstructor] = useState(null);
    const [courses, setCourses] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [monthlyRevenueAfterInstructor, setMonthlyRevenueAfterInstructor] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchInstructor();
        fetchCourses();
    }, [uId]);

    const fetchInstructor = () => {
        fetch(`http://localhost:9999/user/${uId}`)
            .then(res => res.json())
            .then(instructorData => {
                setInstructor(instructorData);
            })
            .catch(error => console.log(error));
    };

    const fetchCourses = () => {
        fetch(`http://localhost:9999/course?instructorId=${uId}`)
            .then(res => res.json())
            .then(courseData => {
                setCourses(courseData);
                calculateTotalRevenue(courseData);
                calculateMonthlyRevenueAfterInstructor(courseData);
            })
            .catch(error => console.log(error));
    };

    const calculateTotalRevenue = (courses) => {
        const total = courses.reduce((acc, course) => acc + (course.cEnrolledStudent * course.cPrice), 0);
        setTotalRevenue(total);
    };

    const calculateMonthlyRevenueAfterInstructor = (courses) => {
        const monthlyRevenue = courses.reduce((acc, course) => {
            const courseRevenue = course.cEnrolledStudent * course.cPrice;
            acc += courseRevenue;
            return acc;
        }, 0);

        const instructorRevenueShare = monthlyRevenue * 0.05;
        const revenueAfterInstructor = monthlyRevenue - instructorRevenueShare;
        setMonthlyRevenueAfterInstructor(revenueAfterInstructor);
    };

    const handleEditCourse = (course) => {
        setIsEditing(true);
        setEditingCourse(course);
    };

    const handleUpdateCourse = (updatedCourse) => {
        fetch(`http://localhost:9999/course/${updatedCourse.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCourse),
        })
        .then(response => response.json())
        .then(data => {
            setCourses(courses.map(course => course.id === data.id ? data : course));
            setIsEditing(false);
            setEditingCourse(null);
            alert('Course updated successfully');
        })
        .catch(error => console.error('Error:', error));
    };

    const handleDeleteCourse = (courseId) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            fetch(`http://localhost:9999/course/${courseId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(() => {
                setCourses(courses.filter(course => course.id !== courseId));
                alert('Course deleted successfully');
            })
            .catch(error => console.error('Error:', error));
        }
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        const updatedInstructor = {
            ...instructor,
            uFullName: document.getElementById("editName").value,
            uMajor: document.getElementById("editMajor").value,
            uMail: document.getElementById("editEmail").value,
            uPhone: document.getElementById("editPhone").value,
        };

        fetch(`http://localhost:9999/user/${uId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInstructor),
        })
        .then((res) => res.json())
        .then((updatedInstructorData) => {
            setInstructor(updatedInstructorData);
            setEditMode(false);
        })
        .catch((error) => console.log(error));
    };

    return (
        <Container fluid>
            <HeaderUser/>
            <Container>
                <Row className="my-4">
                    <Col md={4} style={{ border: "1px solid gray", padding: "20px" }}>
                        {instructor && !editMode && (
                            <div className="mb-4">
                                <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3" style={{ width: "150px", height: "150px" }}>
                                    <img src={`/image/CourseList/Account.png`} alt="Instructor" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <strong>Name:</strong> {instructor.uFullName}<br />
                                <small className="text-muted">{instructor.uMajor} Major</small>
                                <br /><br />
                                <strong>Email:</strong> {instructor.uMail}<br />
                                <strong>Phone:</strong> {instructor.uPhone}<br />
                                <Button variant="outline-primary" size="sm" onClick={toggleEditMode}>Edit</Button>
                            </div>
                        )}

                        {instructor && editMode && (
                            <div className="mb-4">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control id="editName" type="text" defaultValue={instructor.uFullName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Major</Form.Label>
                                        <Form.Control id="editMajor" type="text" defaultValue={instructor.uMajor} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control id="editEmail" type="email" defaultValue={instructor.uMail} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control id="editPhone" type="text" defaultValue={instructor.uPhone} />
                                    </Form.Group>
                                </Form>
                                <Button variant="outline-primary" size="sm" className="me-2" onClick={handleSave}>Save</Button>
                                <Button variant="outline-secondary" size="sm" onClick={toggleEditMode}>Cancel</Button>
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
                        <Row>
                            <Col>
                                <Button as={Link} to={`/homepageUser/${uId}/CreateCourse`}>CreateCourse</Button>
                            </Col>
                        </Row>
                        {isEditing ? (
                            <EditCourseForm 
                                course={editingCourse} 
                                onUpdate={handleUpdateCourse} 
                                onCancel={() => {
                                    setIsEditing(false);
                                    setEditingCourse(null);
                                }} 
                            />
                        ) : (
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
                                                            <Button as={Link} to={`/homepageUser/${uId}/course/${course.id}`} variant="outline-primary" size="sm">Course Detail</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="d-flex justify-content-end">
                                                    <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleEditCourse(course)}>Edit</Button>
                                                    <Button variant="outline-danger" size="sm" onClick={() => handleDeleteCourse(course.id)}>Delete</Button>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )}
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
            <Footer/>
        </Container>
    );
}