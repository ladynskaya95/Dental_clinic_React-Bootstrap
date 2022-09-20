import React from 'react'

const Achievements = () => {
  return (
    <>
      <section className="achievements">
        <div className="content">
          <h2 className="text-center">Стоматологія "IT-Dent це"</h2>
          <p className="text-center">
            Ідеальні умови для комфортного та якісного стоматологічного
            лікування, кращі технології, професійна команда та комплексний
            підхід. Ми впевнені в тому, що серйозна стоматологія не може
            існувати без застосування новітніх методик і результатів світових
            досягнень. Ми гарантуємо безпеку та безболісність лікування.
          </p>
          <ul className="achievements-list row">
            <li className="col-2 archievements-item">
              <div className="card text-bg-light">
                <div className="achievements_text card-body">
                  <h4>30 років досвіду</h4>
                  <p>Більше 30000 пацієнтів</p>
                </div>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="card text-bg-light">
                <div className="achievements_text card-body">
                  <h4>Команда професіоналів</h4>
                  <p>Лікарі з досвідом роботи від 7 до 25 років</p>
                </div>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="card text-bg-light">
                <div className="achievements_text card-body">
                  <h4>Власна лабораторія</h4>
                  <p>Створюємо ідеальні посмішки в найкоротші термін</p>
                </div>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="card text-bg-light">
                <div className="achievements_text card-body">
                  <h4>100% стерильність</h4>
                  <p>5 ступенів дезінфекції та багаторазовий контроль якості</p>
                </div>
              </div>
              <div className="achievements_img"></div>
            </li>
            <li className="col-2 archievements-item">
              <div className="card text-bg-light">
                <div className="achievements_text card-body">
                  <h4>Сервіс та гарантії</h4>
                  <p>Турбота про пацієнтів і відповідальність за результат</p>
                </div>
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