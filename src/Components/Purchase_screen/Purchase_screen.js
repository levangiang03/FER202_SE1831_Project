import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../HomepageUser/Footer";
import HeaderUser from "../HomepageUser/HeaderUser";

function PurchaseScreen() {
  const { uId } = useParams();
  const [listCart, setListCart] = useState([]);
  const [listCourse, setListCourse] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [enrollmentData, setEnrollmentData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/user/${uId}`)
      .then((res) => res.json())
      .then((result) => console.log("User data fetched:", result))
      .catch((err) => console.error("Error fetching user data:", err));

    fetch("http://localhost:9999/addToCart")
      .then((res) => res.json())
      .then((result) => {
        console.log("Cart items fetched:", result);
        setListCart(result);
      })
      .catch((err) => console.error("Error fetching cart items:", err));

    fetch("http://localhost:9999/course")
      .then((res) => res.json())
      .then((listCourse) => {
        console.log("Course data fetched:", listCourse);
        setListCourse(listCourse);
      })
      .catch((err) => console.error("Error fetching course data:", err));
      fetch("http://localhost:9999/enroll")
      .then((res) => res.json())
      .then((result) => {
        console.log("Course data fetched:", listCourse);
        setEnrollmentData(result);
      })
      .catch((err) => console.error("Error fetching course data:", err));
  }, [uId]);

  function handleCheckboxChange(event, cartId) {
    if (event.target.checked) {
      setSelectedCourses((prevSelected) => [...prevSelected, cartId]);
    } else {
      setSelectedCourses((prevSelected) =>
        prevSelected.filter((id) => id !== cartId)
      );
    }
  }

  function handleEnroll() {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course to enroll.");
      return;
    }


    const nextId = Math.max(...enrollmentData.map(enrollment => parseInt(enrollment.id)), 0) + 1;

    const newEnrollment = {
      id: nextId.toString(),
      userId: uId,
      courseId: listCart?.find((cartItem) => cartItem.id === selectedCourses[0].toString())?.courseId,
      enRollDate: new Date().toLocaleDateString(),
      progress: listCourse.find(course => course.id === selectedCourses[0]).courseModule.map((module, index) => ({
        id: (index + 1).toString(),
        moduleName: module.name,
        moduleGrade: 0,
        moduleStatus: false,
      })),
      score: 0,
      status: false,
    };
    fetch("http://localhost:9999/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEnrollment),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Enrollment successful:", data);
        setEnrollmentData(prevEnrollments => [...prevEnrollments, newEnrollment]);

    
        fetch(`http://localhost:9999/addToCart/${selectedCourses[0]}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to remove cart item ${selectedCourses[0]} from addToCart`);
            }
            return response.json();
          })
          .then(data => {
            console.log(`Removed cart item ${selectedCourses[0]} from addToCart:`, data);
            setListCart(prevCart => prevCart.filter(item => item.id !== data.id));
          })
          .catch(error => {
            console.error(`Error removing cart item ${selectedCourses[0]} from addToCart:`, error);
          });

        setSelectedCourses([]);
        updatePaymentHistory(newEnrollment);
      })
      .catch(error => {
        console.error("Error enrolling:", error);
      });
  }
  
  function updatePaymentHistory(enrollment) {
    const newPaymentRecord = {
      id: (new Date()).getTime().toString(),
      userId: enrollment.userId,
      courseId: enrollment.courseId,
      date: new Date().toISOString().slice(0, 10),
    };
  
    fetch("http://localhost:9999/paymentHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPaymentRecord),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Payment history updated successfully:", data);
      })
      .catch(error => {
        console.error("Error updating payment history:", error);
      });
  }

  return (
    <Container fluid>
      <HeaderUser />
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <h1>List of Courses</h1>
            </Row>
            <Row>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Selected</th>
                  </tr>
                </thead>
                <tbody>
                  {listCart?.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{listCourse?.find((lc) => lc.id === c.courseId)?.cName}</td>
                      <td>{listCourse?.find((lc) => lc.id === c.courseId)?.cDescription}</td>
                      <td>{listCourse?.find((lc) => lc.id === c.courseId)?.cPrice}$</td>
                      <td>
                        <Form.Check
                          type="checkbox"
                          id={c.id}
                          checked={selectedCourses.includes(c.id)}
                          onChange={(e) => handleCheckboxChange(e, c.id)}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Button onClick={handleEnroll}>Enroll Selected Courses</Button>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default PurchaseScreen;
