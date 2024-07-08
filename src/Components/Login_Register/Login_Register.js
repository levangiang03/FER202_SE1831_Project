import React, { useEffect, useState } from "react";
import { Col, Container, Form, Button, Row, Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useNavigate } from "react-router-dom"; // Import useHistory
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login_Register() {
  const [loginCaptchaValue, setLoginCaptchaValue] = useState(null);
  const [registerCaptchaValue, setRegisterCaptchaValue] = useState(null);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [listAccount, setListAccount] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginCaptchaChange = (value) => {
    setLoginCaptchaValue(value);
  };

  const handleRegisterCaptchaChange = (value) => {
    setRegisterCaptchaValue(value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginCaptchaValue) {
      // Kiểm tra tài khoản trong danh sách
      const account = listAccount.find(
        (acc) => acc.username === username && acc.password === password
      );

      if (account) {
        console.log("Login successful");
        if(account.rId == 1){
          navigate(`/admin`);
        }
        else if(account.rId == 2){
          navigate(`/instructor/${account.id}`)
        }
        else{
          navigate(`/homepageUser/${account.id}`);
        }
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("Please verify CAPTCHA for login");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (registerCaptchaValue) {
      console.log("Register form submitted");
    } else {
      console.log("Please verify CAPTCHA for registration");
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  useEffect(() => {
    fetch("http://localhost:9999/account")
      .then((res) => res.json())
      .then((result) => setListAccount(result))
      .catch((err) => console.error("error: ", err));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f7f8",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "400px" }}>
        <Card className="p-3 mb-3" style={{ borderRadius: "20px" }}>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                {isLoginForm ? "Login" : "Register"}
              </h1>
              <Form
                onSubmit={isLoginForm ? handleLoginSubmit : handleRegisterSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    User Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                {!isLoginForm && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {!isLoginForm && (
                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </Form.Group>
                )}

                {isLoginForm && (
                  <Form.Group controlId="formBasicCheckbox">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Check type="checkbox" label="Remember me" />
                      <a href="#">Forgot Password</a>
                    </div>
                  </Form.Group>
                )}

                <div className="recaptcha-container" style={{ padding: "20px" }}>
                  <ReCAPTCHA
                    sitekey="6LeZFPgpAAAAAAEHCaVGMaKVPU2t-IX8XGLpzL0h"
                    onChange={
                      isLoginForm
                        ? handleLoginCaptchaChange
                        : handleRegisterCaptchaChange
                    }
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%", borderRadius: "20px" }}
                >
                  {isLoginForm ? "Login" : "Register"}
                </Button>

                <hr />
                <p style={{ fontWeight: "bold", textAlign: "center" }}>or</p>

                <div className="d-flex justify-content-around mb-3">
                  <a href="#" style={{ color: "red" }}>
                    <i className="bi bi-google"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    <i className="bi bi-apple"></i>
                  </a>
                </div>

                <p style={{ marginTop: "10px", textAlign: "center" }}>
                  {isLoginForm
                    ? "You don't have an account? "
                    : "You have an account? "}
                  <a href="#" onClick={toggleForm}>
                    {isLoginForm ? "Register" : "Login"}
                  </a>
                </p>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
