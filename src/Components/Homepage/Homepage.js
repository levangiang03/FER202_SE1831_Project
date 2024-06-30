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
  Carousel,
  Image,
  Card,
  FormControl,
  Badge,
  ListGroup,
  Tab
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import './Homepage.css';
import Header from "./Header";
import CarouselPage from "./CarouselPage";
import Featured from "./Featured";
import Footer from "./Footer";

export default function Homepage() {
  const [show, setShow] = useState(false);
  const [showSubList, setShowSubList] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubList = () => setShowSubList(!showSubList);

  return (
    <Container fluid>
      <Header/>
      <CarouselPage/>
      <Featured/>
      <Footer/>
    </Container>
  );
}
