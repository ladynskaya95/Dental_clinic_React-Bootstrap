import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const Store = () => {
  return (
    <div>
      <div className="content row">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Dental shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Nav className="all_services_nav flex-column col-3">
          <Nav.Link as={NavLink} to="/services/first_appointment">
            Зубна щітка
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/aesthetics">
            Зубна паста
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/oralHygiene">
            Зубна нитка, флос
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/children">
            Йоршики для зубів
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/toothDecay">
            Ополіскувач
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/occlusion">
            Іригатор
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/implantation">
            Набори для догляду
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/surgery">
            Спеціалізовані засоби гігієни
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/endodontics">
            Акції/Знижки
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/perio">
            Подарунковий сертифікат
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/perio">
            Поради стоматологів
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/endodontics">
            Доставка та оплата
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/perio">
            Мої замовлення
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/perio">
            Контакти
          </Nav.Link>
        </Nav>
        <div className="all_services_content col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Store