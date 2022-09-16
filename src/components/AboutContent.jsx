import React from 'react'

const AboutContent = () => {
  return (
    <>
      <section className="about">
        <div className="content">
          <h2 className="about-title">Декілька слів про нас</h2>
          <div className="row about-body">
            <div className="col-6 about_imgs">
              <div className="about-img1">
                <img src="" alt="" className="about_img" />
              </div>
              <div className="about-img2">
                <img src="" alt="" className="about_img" />
              </div>
              <div className="about-img3">
                <img src="" alt="" className="about_img" />
              </div>
            </div>
            <div className="col-6 about_text">
              <p>
                Ласкаво просимо на сторінку клініки "IT-Dent" - Мережа
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