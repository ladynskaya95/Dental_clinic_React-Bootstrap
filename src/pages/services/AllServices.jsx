import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import FirstAppointment from "./FirstAppointment";
import Aesthetics from "./Aesthetics";
import OralHygiene from "./OralHygiene";
import Children from "./Children";
import ToothDecay from "./ToothDecay";
import Occlusion from "./Occlusion";
import Implantation from "./Implantation";
import Surgery from "./Surgery";
import Endodontics from "./Endodontics";
import Perio from "./Perio";

const AllServices = () => {
const categories = [
  { component: <FirstAppointment /> },
  { component: <Aesthetics /> },
  { component: <OralHygiene /> },
  { component: <Children /> },
  { component: <ToothDecay /> },
  { component: <Occlusion /> },
  { component: <Implantation /> },
  { component: <Surgery /> },
  { component: <Endodontics /> },
  { component: <Perio /> },
];

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
        <Nav
          defaultActiveKey="/services/first_appointment"
          className="all_services_nav flex-column col-3"
        >
          <Nav.Link as={NavLink} to="/services/first_appointment">
            Перший прийом
          </Nav.Link>
          <Nav.Link eventKey="link-1">Естетика</Nav.Link>
          <Nav.Link eventKey="link-2">Гігієна порожнини рота</Nav.Link>
          <Nav.Link eventKey="link-3">Дитячий прийом</Nav.Link>
          <Nav.Link eventKey="link-4">Лікування карієсу</Nav.Link>
          <Nav.Link eventKey="link-5">Виправлення прикусу</Nav.Link>
          <Nav.Link eventKey="link-6">Імплантація зубів</Nav.Link>
          <Nav.Link eventKey="link-7">Хірургія</Nav.Link>
          <Nav.Link eventKey="link-8">Лікування каналів</Nav.Link>
          <Nav.Link eventKey="link-9">Лікування ясен</Nav.Link>
        </Nav>
        <div className="all_services_content col-9">
        
          {/* <FirstAppointment />
          <Aesthetics />
          <OralHygiene />
          <Children />
          <ToothDecay />
          <Occlusion />
          <Implantation />
          <Surgery />
          <Endodontics />
          <Perio /> */}
        </div>
      </div>
    </div>
  );
}

export default AllServices