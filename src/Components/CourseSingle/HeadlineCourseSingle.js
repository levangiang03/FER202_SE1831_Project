import { Container, Row, Breadcrumb, Button, Col, Card, Tab, Tabs, Form, FloatingLabel, Accordion, Image, ProgressBar, ListGroup, Pagination } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CourseSingle.css";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function HeadlineCourseSingle() {
    const { cId } = useParams();
    const { uId } = useParams();
    const navigate = useNavigate();
    const [listEnroll, setListEnroll] = useState([]);
    const [listCate, setListCate] = useState([]);
    const [listCourse, setListCourse] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [selectedCourse, setSelectedCourse] = useState({});
    const [enrollStatus, setEnrollStatus] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9999/enroll")
            .then((res) => res.json())
            .then((listEnroll) => {
                setListEnroll(listEnroll);
            })
            .catch((err) => console.error("error: ", err));

        fetch(`http://localhost:9999/user/${uId}`)
            .then((res) => res.json())
            .then((result) => setSelectedUser(result))
            .catch((err) => console.error("error: ", err));

        fetch(`http://localhost:9999/course/${cId}`)
            .then((res) => res.json())
            .then((course) => setSelectedCourse(course))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/category")
            .then((res) => res.json())
            .then((listCate) => setListCate(listCate))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/course")
            .then((res) => res.json())
            .then((listCourse) => setListCourse(listCourse))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/user")
            .then((res) => res.json())
            .then((listUser) => setListUser(listUser))
            .catch((err) => console.error("error: ", err));
        fetch("http://localhost:9999/addToCart")
            .then(res => res.json())
            .then((result) => {
                setCartItems(result)
            })
            .catch((err) => console.error("error: ", err));
    }, [cId, uId]);

    useEffect(() => {
        const accountId = uId;
        const enrolled = listEnroll.some(enroll => enroll.userId === accountId.toString() && enroll.courseId === cId);
        if(!enrolled) {
        const isInCart = cartItems.some(item => item.userId === accountId.toString() && item.courseId === cId);
        setIsInCart(isInCart);
        }
        setEnrollStatus(enrolled);
    }, [listEnroll, cId]);

    const handleButtonClick = () => {
        if (enrollStatus) {
            navigate(`/homepageUser/${uId}/course/coursepage/${cId}`);
        } else {
            if (isInCart) {
                navigate(`/homepageUser/purchaseScreen/${uId}`); 
            } else {
                navigate(`/homepageUser/${uId}/addToCart/${cId}`);
            }
        }
    };

    return (
        <Container fluid className="headline-container">
            <Container className="headline-content">
                <Row>
                    <Col className="headline-content-left" sm={12} lg={8} sx={12} md={12}>
                        <Row>
                            <Col className="headline-button-container">
                                <Link to={`/homepageUser/${uId}/category/${selectedCourse.cateId}`} className="no-underline">
                                    <Button variant="secondary" className="headline-button">
                                        {
                                            listCate?.find(l => l.id === selectedCourse.cateId)?.cateName
                                        }
                                    </Button>
                                </Link>
                                <span style={{ color: "gray" }}>by<span style={{ color: "white", marginLeft: "5px" }}>
                                    {
                                        listUser?.find(l => l.id === selectedCourse.instructorId)?.uFullName
                                    }
                                </span></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="headline-title">
                                <h2>{selectedCourse.cName}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul style={{ display: "flex", listStyle: "none", padding: "0px" }} className="headline-list-container">
                                    <li className="headline-list"><i className="bi bi-clock-fill headline-icon"></i>2 Weeks</li>
                                    <li className="headline-list"><i className="bi bi-person-fill headline-icon"></i>{selectedCourse.cEnrolledStudent} Enrolled Students</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="headline-content-right d-none d-lg-block" md={4} sx={12} >
                        <Card style={{ width: "100%" }} >
                            <Card.Img variant="top" src={selectedCourse.cImage} width={"100%"} />
                            <Card.Body style={{ width: "90%", margin: "auto" }}>
                                <Card.Text>
                                    <Row>
                                        <Col md={6} xs={12} style={{ paddingTop: "6px", textAlign: "center" }}>
                                            <span className="card-text2 col-md-6">{selectedCourse.cPrice} $</span>
                                        </Col>
                                        <Col md={6} xs={12} style={{ textAlign: "center" }}>
                                        <Button className="card-button" onClick={handleButtonClick}>
                                                {enrollStatus ? "Continue" : (isInCart ? "Check Cart" : "Add to Cart")}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
