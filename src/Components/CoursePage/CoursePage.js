import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Tab,
  Accordion,
  Offcanvas,
  Button,
  Form,
  Card,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import './CoursePage.css';
import YouTube from "react-youtube";
import Header from "../HomepageUser/HeaderUser";
import Footer from "../HomepageUser/Footer";

export default function CoursePage() {
  const [activeItem, setActiveItem] = useState("module1");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { cId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState({});
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState({}); // State để lưu câu trả lời được chọn

  useEffect(() => {
    fetch(`http://localhost:9999/course/${cId}`)
      .then((res) => res.json())
      .then((result) => setSelectedCourse(result))
      .catch((err) => console.error("Error fetching course: ", err));
  }, [cId]);

  // Xử lý khi người dùng chọn một module trong danh sách
  const handleClick = (moduleName) => {
    setActiveItem(moduleName);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Xử lý khi người dùng chọn xem một video
  const handleClickVideo = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  // Đóng Offcanvas khi người dùng click vào nút đóng
  const handleClose = () => setShowOffcanvas(false);

  // Mở Offcanvas khi người dùng click vào nút menu
  const handleShow = () => setShowOffcanvas(true);

  // Xử lý khi người dùng chọn một câu trả lời trong quiz
  const handleSelectAnswer = (quizId, choiceId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [quizId]: choiceId,
    });
  };

  // Xử lý khi người dùng submit bài quiz
  const handleSubmitQuiz = () => {
    let moduleScore = 0;

    // Tìm module hiện tại dựa trên activeItem
    const currentModule = selectedCourse.courseModule.find(
      (module) => module.name === activeItem
    );

    // Duyệt qua câu hỏi của module hiện tại để tính điểm
    currentModule.cQuiz.forEach((quiz) => {
      const selectedChoiceId = selectedAnswers[quiz.id];

      // Nếu người dùng đã chọn đúng
      if (selectedChoiceId !== undefined) {
        const selectedChoice = quiz.choice.find(
          (choice) => choice.choiceId === selectedChoiceId
        );

        // Kiểm tra câu trả lời
        if (selectedChoice && selectedChoice.choiceName === quiz.answer) {
          moduleScore++; // Tăng điểm cho câu hỏi đúng
        }
      }
    });

    // Hiển thị kết quả điểm số của module hiện tại
    alert(`Your score for ${activeItem} is: ${moduleScore}`);
  };

  return (
    <Container fluid>
      <Header />

      {/* Tab navigation */}
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#module1">
        <Row>
          {/* Button to show offcanvas on small screens */}
          <Button
            onClick={handleShow}
            className="d-lg-none mb-3"
            style={{
              position: "fixed",
              top: "60px",
              right: "10px",
              width: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "grey",
              zIndex: "9999",
            }}
          >
            <i className="bi bi-list"></i>
          </Button>

          {/* Offcanvas for course navigation */}
          <Col lg={2}>
            <Card
              style={{
                width: "auto",
                border: "none",
                padding: "20px",
                textAlign: "center",
              }}
              className="d-none d-lg-block"
            >
              <Card.Img
                variant="top"
                src="/image/CoursePage/logo192.png"
                style={{ borderRadius: "20px" }}
              />
              <Card.Body>
                <Card.Title>{selectedCourse.cName}</Card.Title>
              </Card.Body>
            </Card>

            <Offcanvas show={showOffcanvas} onHide={handleClose} responsive="lg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Course Navigation</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-center">
                <ListGroup>
                  <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0" style={{ border: "none" }}>
                      <Accordion.Header className="centered-header">
                        <div
                          className="w-100 text-center"
                          style={{ textAlign: "center", padding: "10px 0px" }}
                        >
                          <b style={{ paddingRight: "10px" }}>Course Material</b>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ textAlign: "center", padding: "10px 0px" }}>
                        {selectedCourse.courseModule?.map((module) => (
                          <ListGroup.Item
                            key={module.id}
                            action
                            href={`#${module.name}`}
                            className={`list-item ${activeItem === module.name ? "list-item-active" : ""}`}
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              border: "none",
                            }}
                            onClick={() => handleClick(module.name)}
                          >
                            {module.name}
                          </ListGroup.Item>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <ListGroup.Item
                    action
                    href="#grades"
                    className={`list-item ${activeItem === "grades" ? "list-item-active" : ""}`}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick("grades")}
                  >
                    <b>Grades</b>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#courseInfo"
                    className={`list-item ${activeItem === "courseInfo" ? "list-item-active" : ""}`}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick("courseInfo")}
                  >
                    <b>Course Info</b>
                  </ListGroup.Item>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          {/* Main content area */}
          <Col style={{ borderLeft: "2px solid black" }}>
            <Tab.Content>
              {/* Render each module's content */}
              {selectedCourse.courseModule?.map((module) => (
                <Tab.Pane eventKey={`#${module.name}`} key={module.id}>
                  <Row style={{ padding: "50px 50px" }}>
                    {/* Accordion for module details */}
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0" style={{ border: "1px solid black" }}>
                        <Accordion.Header>
                          <b>{module.name}</b>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* Accordion for video section */}
                          <Accordion defaultActiveKey="0" style={{ padding: "20px 0px" }}>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <b>Video</b>
                              </Accordion.Header>
                              <Accordion.Body>
                                {/* Render video buttons */}
                                {module.cVideo?.map((video) => (
                                  <Row key={video.id}>
                                    <Button
                                      href="#"
                                      id={video.id}
                                      className="customButton"
                                      onClick={() =>
                                        handleClickVideo(video.videoUrl)
                                      }
                                    >
                                      <i
                                        className="bi bi-play-circle"
                                        style={{ fontStyle: "normal" }}
                                      >
                                        {video.videoTitle}
                                      </i>
                                    </Button>
                                  </Row>
                                ))}
                                {/* Render selected video */}
                                {selectedVideoUrl && (
                                  <Row style={{ marginTop: "20px" }}>
                                    <YouTube
                                      videoId={selectedVideoUrl}
                                      opts={{ width: "100%", height: "500" }}
                                    />
                                  </Row>
                                )}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>

                          {/* Accordion for quiz section */}
                          <Accordion defaultActiveKey="0" style={{ padding: "20px 0px" }}>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <b>Quiz</b>
                              </Accordion.Header>
                              <Accordion.Body>
                                {/* Render each quiz question */}
                                {module.cQuiz?.map((quiz) => (
                                  <Form key={quiz.id} style={{ margin: '10px 0px' }}>
                                    <Form.Group>
                                      <Form.Label><b>Question {quiz.id}: {quiz.question}</b></Form.Label>
                                      {/* Render each choice for the quiz question */}
                                      {quiz.choice?.map((choice) => (
                                        <Form.Check
                                          key={choice.choiceId}
                                          name={quiz.id}
                                          type="radio"
                                          id={choice.choiceId}
                                          label={choice.choiceName}
                                          onChange={() => handleSelectAnswer(quiz.id, choice.choiceId)}
                                        />
                                      ))}
                                    </Form.Group>
                                  </Form>
                                ))}
                                {/* Button to submit quiz */}
                                <Button style={{ margin: '20px 0px' }} onClick={handleSubmitQuiz}>Submit</Button>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Row>
                </Tab.Pane>
              ))}

              {/* Grades tab */}
              <Tab.Pane eventKey="#grades">
                <Row style={{ padding: "50px 50px" }}>
                  <Card style={{ width: "100%", border: "1px solid black" }}>
                    <Card.Body>
                      <Card.Title style={{ marginBottom: "20px", fontWeight: "bold" }}>Grades</Card.Title>
                      <Card.Text>
                        {/* Placeholder for grades information */}
                        <Row style={{ border: "1px solid lightgrey", padding: "20px 10px", marginBottom: "20px" }}>
                          <i className="bi bi-check-lg" style={{ fontStyle: "normal" }}> You have completed all of the assessments that are currently due.</i>
                        </Row>
                        <Row style={{ border: "1px solid lightgrey", padding: "20px 10px" }}>
                          <Table>
                            <thead>
                              <tr>
                                <th>Module</th>
                                <th>Progress</th>
                                <th>Score</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Course Complete</td>
                                <td>Microsoft is...</td>
                                <td><i className="bi bi-clipboard-check" style={{ fontStyle: "normal" }}></i></td>
                                <td>2022/04/06</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Tab.Pane>

              {/* Course information tab */}
              <Tab.Pane eventKey="#courseInfo">
                <Row style={{ padding: "50px 50px" }}>
                  <Card style={{ width: "100%", border: "1px solid black" }}>
                    <Card.Body>
                      <Card.Title style={{ marginBottom: "20px", fontWeight: "bold" }}>Course Information</Card.Title>
                      <Card.Text>
                        <Row style={{ border: "1px solid lightgrey", padding: "20px 10px", marginBottom: "20px" }}>
                          <i className="bi bi-clipboard-check" style={{ fontStyle: "normal" }}> To get an overall, look at the course’s pages to get a... here.</i>
                        </Row>
                        <Row style={{ border: "1px solid lightgrey", padding: "20px 10px", marginBottom: "20px" }}>
                          <i className="bi bi-clipboard-check" style={{ fontStyle: "normal" }}> it might not be how to find the info the course has.</i>
                        </Row>
                        <Row style={{ border: "1px solid lightgrey", padding: "20px 10px" }}>
                          <Table>
                            <thead>
                              <tr>
                                <th>Module</th>
                                <th>Progress</th>
                                <th>Score</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Course Complete</td>
                                <td>Microsoft is...</td>
                                <td><i className="bi bi-clipboard-check" style={{ fontStyle: "normal" }}></i></td>
                                <td>2022/04/06</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </Container>
  );
}
