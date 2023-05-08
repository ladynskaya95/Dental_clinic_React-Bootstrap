import React from 'react'
import {  MDBContainer, MDBBtn } from "mdb-react-ui-kit";



import Map from "../components/Map"




const Footer = () => {
    

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
            
            type="button"
            className="phone-callback_link btn btn-primary"
          >
            Запис на прийом
          </button>
        </div>
        <div className="footer_icons">
          <MDBContainer className="p-4 d-flex icons">
            <section className="mb-4">
              {/* {links.map((link) => (
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
              ))} */}
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