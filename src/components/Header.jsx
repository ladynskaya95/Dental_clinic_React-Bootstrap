import React from 'react'
import { Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

import logo from "../img/logo.png";

import AppContext from "../AppContext";

const Header = () => {
  const { show, setShow } = React.useContext(AppContext);
  const handleShow = () => setShow(true);

  const links = [
    { id: 1, path: "/", name: "Головна" },
    { id: 2, path: "/about", name: "Про нас" },
    { id: 3, path: "/services/first_appointment", name: "Послуги" },
    { id: 4, path: "/contacts", name: "Контакти" },
    { id: 5, path: "/store", name: "Магазин" },
  ];
  return (
    <>
      <header>
        <div>
          <div className="row header-body">
            <div className="col-9 header-logo menu">
              <nav className="row">
                <div className="menu-item-logo col-3 p-0">
                  <Image
                    fluid
                    src={logo}
                    alt="logo"
                    className="header-logo_img"
                  />
                  <span className="header-logo-txt">
                    <Link to="/">IT-DENT</Link>
                  </span>
                </div>
                <ul className="menu-list col-8 row">
                  {links.map((link) => (
                    <li key={link.id} className="menu-item col-3">
                      <Link to={link.path} className="menu-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-2 header-schedule">
              <div className="header-schedule_title">
                <div className="header-schedule_text">
                  <i className="icon-time header-schedule_icon"></i>
                  <span> Графік роботи</span>
                </div>
              </div>
              <ul className="header-schedule_body">
                <li className="header-schedule_item">
                  <div className="header-schedule_days">Пн.-Пт.:</div>
                  <div className="header-schedule_time">з 9:00 до 20:00</div>
                </li>
                <li className="header-schedule_item">
                  <div className="header-schedule_days">Сб.-Вс.:</div>
                  <div className="header-schedule_time">з 10:00 до 18:00</div>
                </li>
              </ul>
            </div>
            <div className="col-1 phone">
              <a href="tel:+380666455678" className="phone-link">
                +38(066)645-56-78
              </a>
              <div className="phone-callback">
                <button
                  onClick={handleShow}
                  className="btn btn-outline-primary phone-callback_link"
                >
                  Записатися на консультацію
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
