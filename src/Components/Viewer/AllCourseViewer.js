import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
    Card,
    Badge,
    Pagination,
} from "react-bootstrap";
import "./style.css";

export default function AllCourseViewer() {
    const [listCate, setListCate] = useState([]);
    const [listCourse, setListCourse] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedInstructors, setSelectedInstructors] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState("all");

    useEffect(() => {
        fetch(`http://localhost:9999/category`)
            .then((res) => res.json())
            .then((categories) => setListCate(categories))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/user")
            .then((res) => res.json())
            .then((users) => setListUser(users))
            .catch((err) => console.error("error: ", err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/course")
            .then((res) => res.json())
            .then((courses) => {
                let filteredCourses = courses;
                if (selectedCategory.length > 0) {
                    filteredCourses = filteredCourses.filter((course) =>
                        selectedCategory.includes(course.cateId)
                    );
                }
                if (selectedInstructors.length > 0) {
                    filteredCourses = filteredCourses.filter((course) =>
                        selectedInstructors.includes(course.instructorId)
                    );
                }
                if (selectedPrice === "free") {
                    filteredCourses = filteredCourses.filter((course) => course.cPrice === 0);
                } else if (selectedPrice === "paid") {
                    filteredCourses = filteredCourses.filter((course) => course.cPrice > 0);
                }
                setListCourse(filteredCourses);
            })
            .catch((err) => console.error("error: ", err));
    }, [selectedInstructors, selectedCategory, selectedPrice]);

    const handleCategoryChange = (id) => {
        setSelectedCategory((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((categoryId) => categoryId !== id)
                : [...prevSelected, id]
        );
    };

    const handleInstructorChange = (id) => {
        setSelectedInstructors((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((instructorId) => instructorId !== id)
                : [...prevSelected, id]
        );
    };

    const handlePriceChange = (price) => {
        setSelectedPrice(price);
    };

    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col xs={8}>
                    <Row style={{ marginTop: "20px" }}>
                        <Col xs={6}>
                            <h5>All Courses</h5>
                        </Col>
                        <Col xs={6} className="d-flex justify-content-end align-items-center">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                                <div className="btn-group mr-2" role="group" style={{ margin: "0px 5px" }}>
                                    <Button variant="light" className="border" title="List View">
                                        <i className="bi bi-list-task"></i>
                                    </Button>
                                    <Button variant="light" className="border" title="Grid View">
                                        <i className="bi bi-grid"></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                        {listCourse?.map((l) => (
                            <Col sm={6} key={l.id}>
                                <Link to={`/viewCourseSingle/${l.id}`} className="no-underline">
                                    <Card className="course-card">
                                        <Card.Img variant="top" src={l.cImage} style={{ width: "100%", maxHeight: "220px" }} />
                                        <Card.Body>
                                            <Badge pill className="badge-category">
                                                {listCate?.find((cate) => cate.id === l.cateId)?.cateName}
                                            </Badge>
                                            <p>
                                                <span className="text-by">by: </span>
                                                <span style={{ fontWeight: "bold" }}>
                                                    {listUser?.find((user) => user.id === l.instructorId)?.uName}
                                                </span>
                                            </p>
                                            <h5 className="course-name">{l.cName}</h5>
                                            <div className="course-info">
                                                <span>
                                                    <i className="bi bi-clock-fill"></i> 4 weeks
                                                </span>
                                                <span>
                                                    <i className="bi bi-mortarboard"></i> {l.cEnrolledStudent} enrolled
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="course-price">
                                                    <span>{l.cPrice}$</span>
                                                </div>
                                                <div className="view-more">
                                                    <a href="#" style={{ fontWeight: "bold" }} className="no-style">
                                                        View more
                                                    </a>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="justify-content-center">
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
                <Col xs={4}>
                    <Form>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    <strong>Categories</strong>
                                </Form.Label>
                                {listCate?.map((category) => (
                                    <Form.Check
                                        key={category.id}
                                        type="checkbox"
                                        label={category.cateName}
                                        id={category.id}
                                        onChange={() => handleCategoryChange(category.id)}
                                    />
                                ))}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <strong>Instructor</strong>
                                </Form.Label>
                                {listUser
                                    ?.filter((user) => user.rId == 2)
                                    ?.map((u) => (
                                        <Form.Check
                                            key={u.id}
                                            type="checkbox"
                                            label={u.uName}
                                            id={u.id}
                                            onChange={() => handleInstructorChange(u.id)}
                                        />
                                    ))}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <strong>Price</strong>
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="All"
                                    id="all"
                                    name="price"
                                    checked={selectedPrice === "all"}
                                    onChange={() => handlePriceChange("all")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Free"
                                    id="free"
                                    name="price"
                                    checked={selectedPrice === "free"}
                                    onChange={() => handlePriceChange("free")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Paid"
                                    id="paid"
                                    name="price"
                                    checked={selectedPrice === "paid"}
                                    onChange={() => handlePriceChange("paid")}
                                />
                            </Form.Group>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
