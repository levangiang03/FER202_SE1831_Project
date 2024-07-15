import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import HeaderUser from "../HomepageUser/HeaderUser";
import Footer from "../HomepageUser/Footer";

export default function Purchases() {
  const { uId } = useParams();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/paymentHistory")
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data.filter((payment) => payment.userId === uId)))
      .catch((err) => console.error("Error fetching payment history:", err));

    fetch("http://localhost:9999/course")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, [uId]);

  return (
    <div style={{ backgroundColor: "#F5F7F8" }}>
      <HeaderUser/>
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 style={{ fontSize: "28px" }}>Payment History</h1>
            <p>
              Need more help? Check out our <a href="#">help center</a> and{" "}
              <a href="#">refund policies</a>.
            </p>
          </Col>
        </Row>
        {paymentHistory.length === 0 ? (
          <Row style={{ height: "400px" }}>
            <Col>
              <p>
                No purchases found in your history.{" "}
                <a href="#">Browse courses offering</a> and{" "}
                <a href="#">Certificates now.</a>
              </p>
            </Col>
          </Row>
        ) : (
          <>
            {paymentHistory.map((payment, index) => (
              <Row key={index} className="mb-3">
                <Col>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={8}>
                          <h5>{`Payment ID: ${payment.id}`}</h5>
                          <Link
                              to={`/homepageUser/${payment.userId}/course/${payment.courseId}`}
                            >
                              {courses.find((c) => c.id == payment.courseId)?.cName}
                            </Link>
                          <p>{`Date: ${payment.date}`}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Container>
      <Footer/>
    </div>
  );
}
