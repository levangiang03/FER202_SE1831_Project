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
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordSent, setForgotPasswordSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
            if (!account.status) {
                alert("This account is currently deactivated. Please contact our admin or wait for it to be reactivated.");
                return;
            }

            console.log("Login successful");
            if (account.rId === "1") {
                navigate(`/admin/${account.id}`);
            } else if (account.rId === "2") {
                navigate(`/homepageUser/instructor/${account.id}`);
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

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (registerCaptchaValue) {
      console.log("Register form submitted");

      try {
        const response = await fetch("http://localhost:9999/account");
        const accounts = await response.json();
        setListAccount(accounts);

        const highestId = accounts.reduce(
          (maxId, account) => Math.max(account.id, maxId),
          0
        );
        const nextId = highestId + 1;

        const newUser = {
          id: nextId,
          username: username,
          email: forgotPasswordEmail,
          password: password,
          rId: 3,
          status: true
        };

        const registerResponse = await fetch("http://localhost:9999/account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (!registerResponse.ok) {
          throw new Error("Registration failed");
        }

        const data = await registerResponse.json();
        console.log("Registration successful:", data);

        setIsLoginForm(true);
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      }
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

  const handleSendPasswordResetEmail = async (event) => {
    event.preventDefault();
    console.log("Send password reset email");

    try {
      const response = await fetch("http://localhost:9999/account");
      const accounts = await response.json();

      const account = accounts.find((acc) => acc.email === forgotPasswordEmail);

      if (account) {
        // Simulate email sent (replace with actual email sending logic)
        console.log("Password reset email sent to:", forgotPasswordEmail);
        alert("Password reset email sent successfully");
        setForgotPasswordSent(true);
      } else {
        alert("No account found with this email.");
      }
    } catch (error) {
      console.error("Sending password reset email failed:", error);
      alert("Sending password reset email failed. Please try again.");
    }
  };

  const handleCreateNewPassword = async (event) => {
    event.preventDefault();
    if (newPassword === confirmNewPassword) {
      try {
        const response = await fetch("http://localhost:9999/account");
        const accounts = await response.json();

        const account = accounts.find(
          (acc) => acc.email === forgotPasswordEmail
        );

        if (account) {
          const updatedAccount = { ...account, password: newPassword };

          const updatePasswordResponse = await fetch(
            `http://localhost:9999/account/${account.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedAccount),
            }
          );

          if (!updatePasswordResponse.ok) {
            throw new Error("Failed to update password");
          }

          console.log("New password set successfully:", newPassword);
          // Redirect or show success message as needed
        } else {
          alert("No account found with this email.");
        }
      } catch (error) {
        console.error("Setting new password failed:", error);
        alert("Setting new password failed. Please try again.");
      }
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  useEffect(() => {
    fetch("http://localhost:9999/account")
      .then((res) => res.json())
      .then((result) => setListAccount(result))
      .catch((err) => console.error("error: ", err));
  }, []);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>

                    {!isLoginForm && (
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={forgotPasswordEmail}
                          onChange={(e) =>
                            setForgotPasswordEmail(e.target.value)
                          }
                        />
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
                          value={confirmNewPassword}
                          onChange={(e) =>
                            setConfirmNewPassword(e.target.value)
                          }
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

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        {isLoginForm ? "Login" : "Register"}
                      </Button>
                    </div>
                  </Form>
                </div>
              ) : (
                <div>
                  {!forgotPasswordSent ? (
                    <Form onSubmit={handleSendPasswordResetEmail}>
                      <h2 className="text-center mb-4">Forgot Password</h2>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          value={forgotPasswordEmail}
                          onChange={(e) =>
                            setForgotPasswordEmail(e.target.value)
                          }
                        />
                      </Form.Group>
                      <Button
                        className="w-100 mt-3"
                        type="submit"
                        variant="primary"
                      >
                        Send Password Reset Email
                      </Button>
                    </Form>
                  ) : (
                    <Form onSubmit={handleCreateNewPassword}>
                      <h2 className="text-center mb-4">Set New Password</h2>
                      <Form.Group id="newPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group id="confirmNewPassword">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          value={confirmNewPassword}
                          onChange={(e) =>
                            setConfirmNewPassword(e.target.value)
                          }
                        />
                      </Form.Group>
                      <Button
                        className="w-100 mt-3"
                        type="submit"
                        variant="primary"
                      >
                        Set New Password
                      </Button>
                    </Form>
                  )}
                </div>
              )}
              <div className="mt-2">
                <div style={{ textAlign: "center" }}>
                  {isLoginForm ? (
                    <p>
                      New User?{" "}
                      <a href="#" onClick={toggleForm}>
                        Register
                      </a>
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
