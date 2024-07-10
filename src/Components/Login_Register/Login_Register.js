import React, { useEffect, useState } from "react";
import { Col, Container, Form, Button, Row, Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "react-google-login";

const clientId =
  "383635479452-pq6ht8nq6dai3r1siss0r40t31tt5ngj.apps.googleusercontent.com";

export default function Login_Register() {
  const [loginCaptchaValue, setLoginCaptchaValue] = useState(null);
  const [registerCaptchaValue, setRegisterCaptchaValue] = useState(null);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [listAccount, setListAccount] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordUsername, setForgotPasswordUsername] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  // States for Forgot Password
  const [sendOTPForgotPassword, setSendOTPForgotPassword] = useState(false);
  const [verifyOTPForgotPassword, setVerifyOTPForgotPassword] = useState(false);

  // States for Register
  const [sendOTPRegister, setSendOTPRegister] = useState(false);
  const [verifyOTPRegister, setVerifyOTPRegister] = useState(false);

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
      const account = listAccount.find(
        (acc) => acc.username === username && acc.password === password
      );

      if (account) {
        console.log("Login successful");
        if (account.rId == 1) {
          navigate(`/admin`);
        } else if (account.rId == 2) {
          navigate(`/instructor/${account.id}`);
        } else {
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
      // Handle registration logic here
    } else {
      alert("Please verify CAPTCHA for registration");
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setShowForgotPassword(true);
  };

  const handleResetPasswordSubmit = (event) => {
    event.preventDefault();
    // Implement logic for resetting password here
    console.log("Password reset form submitted");
  };

  const handleSendOTPForgotPassword = () => {
    // Implement OTP sending logic here
    setSendOTPForgotPassword(true);
  };

  const handleVerifyOTPForgotPassword = () => {
    // Implement OTP verification logic here
    setVerifyOTPForgotPassword(true);
    console.log("OTP verified for Forgot Password");
    // Reset state after OTP verification
    setOTP("");
    setForgotPasswordUsername("");
    setForgotPasswordEmail("");
  };

  const handleSendOTPRegister = () => {
    // Implement OTP sending logic here
    setSendOTPRegister(true);
  };

  const handleVerifyOTPRegister = () => {
    // Implement OTP verification logic here
    setVerifyOTPRegister(true);
    console.log("OTP verified for Register");
    // Reset state after OTP verification
    setOTP("");
  };

  useEffect(() => {
    fetch("http://localhost:9999/account")
      .then((res) => res.json())
      .then((result) => setListAccount(result))
      .catch((err) => console.error("error: ", err));
  }, []);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED!", res);
  };

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
              {!showForgotPassword ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    {isLoginForm ? "Login" : "Register"}
                  </h1>
                  <Form
                    onSubmit={
                      isLoginForm ? handleLoginSubmit : handleRegisterSubmit
                    }
                  >
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        User Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={isLoginForm ? username : forgotPasswordUsername}
                        onChange={(e) =>
                          isLoginForm
                            ? setUsername(e.target.value)
                            : setForgotPasswordUsername(e.target.value)
                        }
                      />
                    </Form.Group>

                    {!isLoginForm && (
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Email
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              value={forgotPasswordEmail}
                              onChange={(e) =>
                                setForgotPasswordEmail(e.target.value)
                              }
                            />
                          </Col>
                          <Col xs="auto">
                            <Button
                              variant="secondary"
                              style={{ borderRadius: "20px" }}
                              onClick={handleSendOTPRegister}
                            >
                              Send OTP
                            </Button>
                          </Col>
                        </Row>
                        {sendOTPRegister && (
                          <>
                            <Form.Label style={{ fontWeight: "bold" }}>
                              OTP
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter OTP"
                              value={otp}
                              onChange={(e) => setOTP(e.target.value)}
                            />
                            {!verifyOTPRegister && (
                              <Button
                                variant="primary"
                                style={{
                                  width: "100%",
                                  borderRadius: "20px",
                                  marginTop: "10px",
                                }}
                                onClick={handleVerifyOTPRegister}
                              >
                                Verify OTP
                              </Button>
                            )}
                          </>
                        )}
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    {!isLoginForm && (
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>
                    )}

                    {isLoginForm && (
                      <Form.Group controlId="formBasicCheckbox">
                        <div className="d-flex justify-content-between align-items-center">
                          <Form.Check type="checkbox" label="Remember me" />
                          <a href="#" onClick={handleForgotPassword}>
                            Forgot Password
                          </a>
                        </div>
                      </Form.Group>
                    )}

                    <div
                      className="recaptcha-container"
                      style={{ padding: "20px" }}
                    >
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
                    <p style={{ fontWeight: "bold", textAlign: "center" }}>
                      or
                    </p>

                    <div className="d-flex justify-content-around mb-3">
                      <GoogleLogin
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
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
                </div>
              ) : (
                <div>
                  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Forgot Password
                  </h2>
                  <Form onSubmit={handleResetPasswordSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicForgottenPasswordUsername"
                    >
                      <Form.Label style={{ fontWeight: "bold" }}>
                        User Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={forgotPasswordUsername}
                        onChange={(e) =>
                          setForgotPasswordUsername(e.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicForgottenPasswordEmail">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Email
                      </Form.Label>
                      <Row>
                        <Col>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={forgotPasswordEmail}
                            onChange={(e) =>
                              setForgotPasswordEmail(e.target.value)
                            }
                          />
                        </Col>
                        <Col xs="auto">
                          <Button
                            variant="secondary"
                            style={{ borderRadius: "20px" }}
                            onClick={handleSendOTPForgotPassword}
                          >
                            Send OTP
                          </Button>
                        </Col>
                      </Row>
                      {sendOTPForgotPassword && (
                        <>
                          <Form.Label style={{ fontWeight: "bold" }}>
                            OTP
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOTP(e.target.value)}
                          />
                          {!verifyOTPForgotPassword && (
                            <Button
                              variant="primary"
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                marginTop: "10px",
                              }}
                              onClick={handleVerifyOTPForgotPassword}
                            >
                              Verify OTP
                            </Button>
                          )}
                        </>
                      )}
                    </Form.Group>

                    <div
                      className="recaptcha-container"
                      style={{ padding: "20px" }}
                    >
                      <ReCAPTCHA
                        sitekey="6LeZFPgpAAAAAAEHCaVGMaKVPU2t-IX8XGLpzL0h"
                        onChange={handleRegisterCaptchaChange}
                      />
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "100%", borderRadius: "20px" }}
                    >
                      Reset Password
                    </Button>

                    <p style={{ marginTop: "10px", textAlign: "center" }}>
                      Remember your password?{" "}
                      <a href="#" onClick={() => setShowForgotPassword(false)}>
                        Login
                      </a>
                    </p>
                  </Form>
                </div>
              )}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
