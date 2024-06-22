import React from 'react';
import { Container, Row, Col, Card, Table, DropdownButton, Dropdown, Button, Image } from 'react-bootstrap';

import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, ArcElement,CategoryScale,LinearScale,BarElement } from 'chart.js'
Chart.register(ArcElement,CategoryScale,LinearScale,BarElement);


function Revenue() {

  const totalRevenue = 50000;
  const revenueGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 8000, 6000, 7000, 9000, 11000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const topCoursesData = {
    labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'],
    datasets: [
      {
        label: 'Enrollments',
        data: [200, 150, 300, 250, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const userEngagementData = {
    labels: ['Active Users', 'Inactive Users', 'New Users'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  return (
    <Container>
      <h1 className="my-4">Admin Revenue Dashboard</h1>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>
                <strong>${totalRevenue.toLocaleString()}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Revenue Growth</Card.Title>
              <Bar data={revenueGrowthData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Top Performing Courses</Card.Title>
              <Pie data={topCoursesData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>User Engagement</Card.Title>
              <Pie data={userEngagementData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Course Performance</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Enrollments</th>
                    <th>Completion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coding C# for Beginners</td>
                    <td>200</td>
                    <td>85%</td>
                  </tr>
                  <tr>
                    <td>Networking and Social Engineering</td>
                    <td>150</td>
                    <td>78%</td>
                  </tr>
                  <tr>
                    <td>Mathematics and geometry</td>
                    <td>300</td>
                    <td>90%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Financial Metrics</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Average Revenue per User (ARPU)</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td>Monthly Recurring Revenue (MRR)</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>Customer Acquisition Cost (CAC)</td>
                    <td>$50</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Payment and Transactions</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TXN12345</td>
                    <td>01/06/2024</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>TXN12346</td>
                    <td>02/06/2024</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td>TXN12347</td>
                    <td>03/06/2024</td>
                    <td>$150</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Predictive Analytics</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Prediction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Next Month Revenue</td>
                    <td>$12,000</td>
                  </tr>
                  <tr>
                    <td>Churn Rate</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>Customer Lifetime Value (CLV)</td>
                    <td>$1,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Revenue;
