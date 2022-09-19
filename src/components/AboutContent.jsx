import React from 'react'
import Image from "react-bootstrap/Image"

import img1 from "../img/3.jpg"
import img2 from "../img/1.jpg"
import img3 from "../img/2.jpg"

const AboutContent = () => {
  return (
    <>
      <section className="about">
        <div className="content">
          <h2 className="about-title text-center">Декілька слів про нас</h2>
          <div className="row about-body">
            <div className="col-8 about_img">
              <div className="about_image about_image-1 ">
                <Image fluid src={img1} alt="logo1" className="about_img " />
              </div>
              <div className="about_image about_image-2 ">
                <Image fluid src={img2} alt="logo2" className="about_img " />
              </div>
              <div className="about_image about_image-3 ">
                <Image fluid src={img3} alt="logo3" className="about_img" />
              </div>
            </div>
            <div className="col-4 about_text">
              <p>
                Ласкаво просимо на сайт клініки "IT-Dent" - Мережа
                стоматологічних клінік у Києві з 30-річною репутацією.
              </p>
              <p>НАША КЛІНІКА ВПРОВАДЖУЄ НОВІ СТАНДАРТИ ЛІКУВАННЯ ЗУБІВ.</p>
              <p>
                У нас представлені всі напрямки стоматології: терапія,
                ортопедія, ортодонтія, хірургія, імплантологія, пародонтологія,
                естетична стоматологія, дитяча стоматологія та гігієна порожнини
                рота.
              </p>
              <p>
                Ми впевнені в тому, що серйозна стоматологія не може існувати
                без застосування новітніх методик і результатів світових
                досягнень. Ми гарантуємо безпеку та безболісність лікування.
              </p>
              <p className="about_thanks">ДЯКУЄМО ЗА ДОВІРУ!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutContent;