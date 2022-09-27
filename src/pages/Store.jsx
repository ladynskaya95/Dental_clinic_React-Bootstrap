import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Store = () => {
  return (
    <div>
      <div className="content row">
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