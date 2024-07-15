import {
    Container,
    Row,
    Navbar,
    Nav,
    Button,
    NavDropdown,
    Form,
    Dropdown,
    SplitButton,
    DropdownButton,
    ButtonGroup,
    Col,
    Offcanvas,
    FormControl,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function HeaderUser() {

    const [listCate, setListCate] = useState([]);
    const [listCourse, setListCourse] = useState([]);
    const [listUser, setListUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    const { uId } = useParams();

    let linkPath;

  if (uId === 2) {
    linkPath = `/homepageUser/instructor/${uId}`;
  } else if (uId === 3) {
    linkPath = `/homepageUser/student/${uId}`;
  }else if (uId === 1) {
    linkPath = `/admin`;
  } else {
    linkPath = `/homepageUser/instructor/${uId}`; // Default case or other user types
  }

    useEffect(() => {
        fetch(`http://localhost:9999/user/${uId}`)
            .then((res) => res.json())
            .then((user) => setSelectedUser(user))
            .catch((err) => console.error("error: ", err))

        fetch("http://localhost:9999/category")
            .then((res) => res.json())
            .then((listCate) => setListCate(listCate))
            .catch((err) => console.error("error: ", err))

        fetch("http://localhost:9999/course")
            .then((res) => res.json())
            .then((listCoure) => setListCourse(listCoure))
            .catch((err) => console.error("error: ", err))

        fetch("http://localhost:9999/user")
            .then((res) => res.json())
            .then((listUser) => setListUser(listUser))
            .catch((err) => console.error("error: ", err))
    }, [uId, listCate, selectedUser, listCourse, listUser]);

    return (
        // Header
        <Row style={{ padding: "0px 50px", backgroundColor: "#f8f9fa" }}>
            <Navbar key="lg" expand="lg" style={{ alignContent: "center" }}>
                <Container fluid>
                    <Navbar.Brand
                        href="/"
                        style={{ fontWeight: "bold", color: "#87CEFA" }}
                    >
                        <Link to={`/homepageUser/${uId}`} style={{ textDecoration: "none" }}><i className="bi bi-book"></i> Edu-Learn</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                <a
                                    href="#home"
                                    style={{ fontWeight: "bold", color: "#87CEFA" }}
                                >
                                    <i className="bi bi-book"></i> Edu-Learn
                                </a>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content flex-grow-1 pe-3">
                                <Nav.Link
                                    href="#"
                                    style={{ display: "flex", textDecoration: "none" }}
                                >
                                    <Link to={`/homepageUser/${uId}`} style={{ textDecoration: "none", color: "#000" }}>Home</Link>
                                </Nav.Link>
                                <Nav.Link
                                    href="#course"
                                    style={{ display: "flex", textDecoration: "none" }}
                                >
                                    <Link to={`/homepageUser/${uId}/allCourse`} style={{ textDecoration: "none", color: "#000" }}>Course</Link>
                                </Nav.Link>
                                <NavDropdown
                    title="Discovery"
                    id="basic-nav-dropdown"
                    style={{ display: "flex" }}
                  >
                    {listCate?.map((cate) => (
                <NavDropdown.Item 
                  key={cate.id} 
                  as={Link} 
                  to={`/homepageUser/${uId}/category/${cate.id}`}
                >
                  {cate.cateName}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    style={{ borderRadius: "20px" }}
                                />
                            </Form>
                            <Nav>
                                <Nav.Link>
                                    <Link to={`/homepageUser/purchaseScreen/${uId}`} style={{ textDecoration: "none", color: "#000" }}>
                                        <i className="bi bi-bag"></i>
                                    </Link>
                                </Nav.Link>
                                <NavDropdown
                                    title={<i className="bi bi-person-circle"></i>}
                                    id="basic-nav-dropdown"
                                >
                                    
                                    <NavDropdown.Item as={Link}  to= {linkPath} >My Account</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/homepageUser/purchase/${uId}`}>My Purchases</NavDropdown.Item>
                                    
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/homeViewer" className="no-underline">Logout</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Row>
    );
}
