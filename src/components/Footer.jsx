import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="question">
          <h2>Залишилися питання? Отримати відповідь:</h2>
          <p>(044) 333-64-72 </p>
          <p>(044) 333-64-73</p>
          <button type="button" className="phone-callback_link"></button>
        </div>
        <div className="footer_icons"></div>
        <div className="content row">
          <div className="col-4 footer_address"></div>
          <div className="col-4 footer_stomat">
            <ul className="stomat">
              Стоматологія
              <li className="stomat-item">Статті</li>
              <li className="stomat-item">Відгуки</li>
              <li className="stomat-item">Гарантії</li>
              <li className="stomat-item">Вакансії клініки</li>
              <li className="stomat-item">Написати директору</li>
              <li className="stomat-item">Питання та відповіді</li>
            </ul>
          </div>
          <div className="col-4 footer">
            <ul className="footer_info">
              Корисна інформація
              <li className="info-item">Подарунковий сертифікат</li>
              <li className="info-item">Корпоративне обслуговування</li>
              <li className="info-item">Політика конфіденційності</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer