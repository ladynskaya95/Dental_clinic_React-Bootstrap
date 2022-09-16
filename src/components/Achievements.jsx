import React from 'react'

const Achievements = () => {
  return (
    <>
      <section className="achievements">
        <div className="content">
          <h2>Стоматологія "IT-Dent це"</h2>
          <p>
            Ідеальні умови для комфортного та якісного стоматологічного
            лікування, кращі технології, професійна команда та комплексний
            підхід. Ми впевнені в тому, що серйозна стоматологія не може
            існувати без застосування новітніх методик і результатів світових
            досягнень. Ми гарантуємо безпеку та безболісність лікування.
          </p>
          <ul className="achievements-list row">
            <li className="col-2 archievements-item">
              <div className="achievements_text">
                <h3>30 років досвіду</h3>
                <p>Більше 30000 пацієнтів</p>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="achievements_text">
                <h3>Команда професіоналів</h3>
                <p>Лікарі з досвідом роботи від 7 до 25 років</p>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="achievements_text">
                <h3>Власна лабораторія</h3>
                <p>Створюємо ідеальні посмішки в найкоротші термін</p>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="achievements_text">
                <h3>100% стерильність</h3>
                <p>5 ступенів дезінфекції та багаторазовий контроль якості</p>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="achievements_text">
                <h3>Сервіс та гарантії</h3>
                <p>Турбота про пацієнтів і відповідальність за результат</p>
              </div>
              <div className="achievements_img"></div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Achievements