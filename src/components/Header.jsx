import React from 'react'
import Image from "react-bootstrap/Image";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div className="row header-body">
            <div className="col-9 header-logo menu">
              <nav>
                <ul className="menu-list row">
                  <li className="menu-item col-2 p-0">
                    <Image
                      fluid
                      src={logo}
                      alt="logo"
                      className="header-logo_img"
                    />
                    <span className="header-logo-txt">IT-DENT</span>
                  </li>
                  <li className="menu-item col-2">
                    <a href="/" className="menu-link">
                      Головна
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="/about" className="menu-link">
                      Про нас
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="/services" className="menu-link">
                      Послуги
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="/contacts" className="menu-link">
                      Контакти
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="/store" className="menu-link">
                      Магазин
                    </a>
                  </li>
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
                <a href="/callback" className="phone-callback_link">
                  Записатися на консультацію
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
