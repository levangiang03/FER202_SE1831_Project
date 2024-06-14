import React, { useState } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.css";

export default function Login() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaValue) {
      console.log("Form submitted");
    } else {
      console.log("Please verify CAPTCHA");
    }
  };

  return (
    <Container className="container">
      <Col>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email*"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Form.Check type="checkbox" label="Remember me" />
              </div>
              <div>
                <Form.Text>
                  <a href="#">Forgot Password</a>
                </Form.Text>
              </div>
            </div>
          </Form.Group>

          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LeZFPgpAAAAAAEHCaVGMaKVPU2t-IX8XGLpzL0h"
              onChange={handleCaptchaChange}
            />
          </div>

          <Button variant="primary" type="submit" disabled={!captchaValue}>
            Login
          </Button>

          <Form.Text>
            You don't have account? <a href="#">Reginster</a>
          </Form.Text>
        </Form>
      </Col>
    </Container>
  );
}
