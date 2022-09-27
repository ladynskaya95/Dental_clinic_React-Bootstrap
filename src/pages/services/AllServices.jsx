import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const AllServices = () => {

  return (
    <div className="all_services">
      <Nav fill variant="tabs" className="all_services_menu">
        <Nav.Item>
          <Nav.Link active href="/services">
            Послуги клініки
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Технології і методики</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Ціни</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="content row">
        <Nav className="all_services_nav flex-column col-3">
          <Nav.Link as={NavLink} to="/services/first_appointment">
            Перший прийом
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/aesthetics">
            Естетика
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/oralHygiene">
            Гігієна порожнини рота
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/children">
            Дитячий прийом
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/toothDecay">
            Лікування карієсу
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/occlusion">
            Виправлення прикусу
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/implantation">
            Імплантація зубів
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/surgery">
            Хірургія
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/endodontics">
            Лікування каналів
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services/perio">
            Лікування ясен
          </Nav.Link>
        </Nav>
        <div className="all_services_content col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AllServices