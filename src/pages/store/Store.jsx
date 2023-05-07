import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";


import {
  MDBIcon
} from "mdb-react-ui-kit";
const Store = () => {
  return (
    <div>
      <div className="store row">
        <Navbar bg="light" expand="lg" className="store_header">
          <Container fluid>
            <Navbar.Brand href="#" className="store_header_brand">
              Dental shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="store_header_phone">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#action2"
                  className="d-flex justify-content-end"
                >
                  +38 (044) 344 12 75
                </Nav.Link>
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
              <Nav.Item className="btn">
                <MDBIcon fas icon="bars" size="2x" />
              </Nav.Item>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content row">
          <Nav className="all_services_nav flex-column col-3">
            <Nav.Link as={NavLink} to="/store/toothbrash">
              Зубна щітка
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/toothpaste">
              Зубна паста
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/dental_floss">
              Зубна нитка, флос
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/toothbrushes">
              Йоршики для зубів
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/rinse">
              Ополіскувач
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/irrigator">
              Іригатор
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/kits">
              Набори для догляду
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/spec_oral_hygiene">
              Спеціалізовані засоби гігієни
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/discounts">
              Акції/Знижки
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/gift">
              Подарунковий сертифікат
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store/dental_advice">
              Поради стоматологів
            </Nav.Link>
            <div className="store_nav_info all_services_nav flex-column ">
              <Nav.Link as={NavLink} to="/store/delivery_and_payment">
                Доставка та оплата
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store/my_orders">
                Мої замовлення
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacts">
                Контакти
              </Nav.Link>
            </div>
          </Nav>

          <div className="all_services_content col-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store