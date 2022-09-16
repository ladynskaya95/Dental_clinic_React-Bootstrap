import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className="content">
          <div className="row header-body">
            <div className="col-8 header-logo menu">
              <button className="menu-button">
                <img src="" alt="" className="menu-icon" />
                Меню
              </button>
              <nav>
                <ul className="menu-list row">
                  <li className="menu-item col-2">
                    <a href="#" className="menu-link">
                      Головна
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="#" className="menu-link">
                      Про нас
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="#" className="menu-link">
                      Послуги
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="#" className="menu-link">
                      Контакти
                    </a>
                  </li>
                  <li className="menu-item col-2">
                    <a href="#" className="menu-link">
                      Магазин
                    </a>
                  </li>
                </ul>
              </nav>
              <a href="#">
                <img src="" alt="" className="header-logo_img" />
              </a>
            </div>
            <div className="col-2 header-schedule">
              <div className="header-schedule_title">
                <div className="header-schedule_image">
                  <img src="" alt="" className="header-schedule_icon" />
                </div>
                <div className="header-schedule_text">Графік роботи</div>
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
            <div className="col-2 phone">
              <a href="tel:+380666455678" className="phone-link">
                (044) 333-64-72 (044) 333-64-73
              </a>
              <div className="phone-callback">
                <a href="#" className="phone-callback_link">
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
