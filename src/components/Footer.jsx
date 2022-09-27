import React from 'react'
import {  MDBContainer, MDBBtn } from "mdb-react-ui-kit";

import AppContext from "../AppContext";

import Map from "../components/Map"
import { ReactComponent as Twitter } from "../../src/svg/twitter.svg";
import { ReactComponent as Whatsapp } from "../../src/svg/whatsapp.svg";
import { ReactComponent as Facebook } from "../../src/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../src/svg/instagram.svg";

const links = [
  { id: 1, page: <Twitter />, href: "https://twitter.com/" },
  { id: 2, page: <Whatsapp />, href: "https://web.whatsapp.com/" },
  { id: 3, page: <Facebook />, href: "https://www.facebook.com/" },
  { id: 4, page: <Instagram />, href: "https://www.instagram.com/" },
];

const Footer = () => {
    const { show, setShow } = React.useContext(AppContext);
    const handleShow = () => setShow(true);

  const dentistry = [
    "Статті" ,
    "Відгуки" ,
    "Гарантії" ,
    "Вакансії клініки" ,
    "Написати директору" ,
    "Питання та відповіді" ,
  ];

  const info = [
    "Подарунковий сертифікат" ,
    "Корпоративне обслуговування" ,
    "Політика конфіденційності" ,
  ];
  return (
    <>
      <footer>
        <div className="question text-center">
          <h2>Залишилися питання? Отримати відповідь:</h2>
          <p>(044) 333-64-72 </p>
          <p>(044) 333-64-73</p>
          <button
            onClick={handleShow}
            type="button"
            className="phone-callback_link btn btn-primary"
          >
            Запис на прийом
          </button>
        </div>
        <div className="footer_icons">
          <MDBContainer className="p-4 d-flex icons">
            <section className="mb-4">
              {links.map((link) => (
                <MDBBtn
                  key={link.id}
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href={link.href}
                  target="_blank"
                  role="button"
                >
                  {link.page}
                </MDBBtn>
              ))}
            </section>
          </MDBContainer>
        </div>
        <div className="footer row">
          <div className="col-4 footer_address">
            <Map />
          </div>
          <div className="col-4 footer_stomat">
            <ul className="stomat">
              <h4>Стоматологія</h4>
              {dentistry.map((item, i) => (
                <li key={i} className="stomat-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <ul className="footer_info">
              <h4>Корисна інформація</h4>
              {info.map((inf, i) => (
                <li key={i} className="info-item">
                  {inf}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer