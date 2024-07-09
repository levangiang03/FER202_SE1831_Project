import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Form,
  Image,
  Button,
} from "react-bootstrap";

export default function PurchaseScreen() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML",
      description: "This course introduces HTML...",
      price: 99.9,
    },
    {
      id: 2,
      name: "Java",
      description: "This course helps you understand Java...",
      price: 200.0,
    },
    {
      id: 3,
      name: "C#",
      description: "This course introduces C#...",
      price: 88.9,
    },
    {
      id: 4,
      name: "Python",
      description: "This course helps you learn Python...",
      price: 85.9,
    },
    {
      id: 5,
      name: "C",
      description: "This course introduces C...",
      price: 50.9,
    },
  ]);

  const [billItems, setBillItems] = useState([]);
  const [nextBillId, setNextBillId] = useState(1);

  useEffect(() => {
    // Reset nextBillId when billItems changes
    setNextBillId(billItems.length + 1);
  }, [billItems]);

  const handleCheckboxChange = (event, courseId, courseName, coursePrice) => {
    if (event.target.checked) {
      const newBillItem = {
        id: nextBillId,
        name: courseName,
        price: coursePrice,
      };
      setBillItems([...billItems, newBillItem]);
      setNextBillId(nextBillId + 1);
    } else {
      removeFromBill(courseId);
    }
  };

  const removeFromBill = (courseId) => {
    setBillItems(billItems.filter((item) => item.id !== courseId));
  };

  const handleRemoveFromBill = (billItemId) => {
    setBillItems(billItems.filter((item) => item.id !== billItemId));
  };

  const handleRemoveCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>List of Courses</h1>
          <hr />
          <Card>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        id={`checkbox-${course.id}`}
                        onChange={(e) =>
                          handleCheckboxChange(
                            e,
                            course.id,
                            course.name,
                            course.price
                          )
                        }
                      />
                    </td>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>${course.price.toFixed(2)}</td>
                    <td>
                      <i
                        className="bi bi-trash"
                        style={{
                          color: "red",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                        onClick={() => handleRemoveCourse(course.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center mb-3">
              <Button variant="outline-primary" className="me-2">
                <i className="bi bi-caret-left"></i>
              </Button>
              <Button variant="outline-primary">
                <i className="bi bi-caret-right"></i>
              </Button>
            </div>
          </Card>
          <Row
            className="align-items-center p-5 mt-5"
            style={{ backgroundColor: "rgb(220, 237, 245)" }}
          >
            <Col md={8}>
              <Image
                src="./image/purchases/edu.png"
                alt="Coursera Plus"
                className="mb-3"
                style={{ width: "240px" }}
              />
              <h3>
                Try out different courses to see which one fits your needs
              </h3>
              <p>
                Get a 7-day free trial that includes courses, Specializations,
                Projects, and Professional Certificates.
              </p>
            </Col>
            <Col md={4}>
              <div className="promo-image">
                <img
                  src="https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/header-image.png"
                  alt="Promo"
                  className="rounded-circle img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <h1>Bill</h1>
          <hr />
          <Card>
            <Image src="./image/Purchases_screen/edu.png" rounded />
            <hr />
            <p style={{ fontWeight: "bold" }}>Billing Information</p>
            <p>Provider: Edu Learn</p>
            <p>Name: Your name</p>
            <p>Email: Your Email</p>
            <p>List of bill: </p>
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {billItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <i
                        className="bi bi-trash"
                        style={{
                          color: "red",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                        onClick={() => handleRemoveFromBill(item.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr />
            <p style={{ fontWeight: "bold" }}>
              Total: $
              {billItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </p>
            <div className="d-flex justify-content-center">
              <Button variant="primary" style={{ padding: "5px 10px" }}>
                Payment orders
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
