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

export default function ViewCourseByCate() {
    const { cateId } = useParams();

    const [listCate, setListCate] = useState([]);
    const [listCourse, setListCourse] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedInstructors, setSelectedInstructors] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState("all");

    useEffect(() => {
        fetch(`http://localhost:9999/category/${cateId}`)
            .then((res) => res.json())
            .then((category) => setSelectedCategory(category))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/category")
            .then((res) => res.json())
            .then((listCate) => setListCate(listCate))
            .catch((err) => console.error("error: ", err));

        fetch("http://localhost:9999/user")
            .then((res) => res.json())
            .then((listUser) => setListUser(listUser))
            .catch((err) => console.error("error: ", err));
    }, [cateId]);

    useEffect(() => {
        fetch("http://localhost:9999/course")
            .then((res) => res.json())
            .then((listCourse) => {
                let filteredCourses = listCourse;
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
    }, [selectedInstructors, selectedPrice]);

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
                <Col sm={8}>
                    <Row>
                        <Col>
                            <h5>All Courses</h5>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </Col>
                    </Row>
                    {listCourse
                        ?.filter((course) => course.cateId == cateId)
                        .map((course) => (
                            <Link key={course.id} to={`/viewCourseSingle/${course.id}`} className="no-underline">
                                <Row style={{ marginTop: "10px" }}>
                                    <Col>
                                        <Card className="d-flex flex-row">
                                            <div>
                                                <Card.Img
                                                    variant="top"
                                                    src={course.cImage}
                                                    style={{ maxWidth: "286px", maxHeight: "180px" }}
                                                />
                                            </div>
                                            <Card.Body className="flex-grow-1">
                                                <Badge pill className="badge-category">
                                                    {listCate?.find((cate) => cate.id == course.cateId)?.cateName}
                                                </Badge>
                                                <Card.Title className="mt-2 mb-3">
                                                    {course.cName}
                                                </Card.Title>
                                                <Card.Text>
                                                    <p>
                                                        <span className="text-by">by: </span>
                                                        <span style={{ fontWeight: "bold" }}>
                                                            {listUser?.find((user) => user.id == course.instructorId)?.uName}
                                                        </span>
                                                    </p>
                                                    <div className="course-info">
                                                        <span>
                                                            <i className="bi bi-clock-fill"></i> 4 weeks
                                                        </span>
                                                        <span>
                                                            <i className="bi bi-mortarboard"></i> {course.cEnrolledStudent} enrolled
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-3">
                                                        <div className="course-price">
                                                            <span>{course.cPrice} $</span>
                                                        </div>
                                                        <div className="view-more">
                                                            <Link
                                                                to={`/viewCourseSingle/${course.id}`}
                                                                style={{ fontWeight: "bold" }}
                                                                className="no-style"
                                                            >
                                                                View more
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Link>
                        ))}
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
                                        checked={selectedCategory?.id == category.id}
                                    />
                                ))}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    <strong>Instructor</strong>
                                </Form.Label>
                                {listUser
                                    ?.filter((user) => user.rId == 2)
                                    ?.map((user) => (
                                        <Form.Check
                                            key={user.id}
                                            type="checkbox"
                                            label={user.uName}
                                            id={user.id}
                                            onChange={() => handleInstructorChange(user.id)}
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
