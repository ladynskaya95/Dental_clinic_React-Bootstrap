import React from 'react'

const Achievements = () => {
  const cardItems = [
    { header: "30 років досвіду", content: "Більше 30000 пацієнтів" },
    {
      header: "Команда професіоналів",
      content: "Лікарі з досвідом роботи від 7 до 25 років",
    },
    {
      header: "Власна лабораторія",
      content: "Створюємо ідеальні посмішки в найкоротші термін",
    },
    {
      header: "100% стерильність",
      content: "5 ступенів дезінфекції та багаторазовий контроль якості",
    },
    {
      header: "Сервіс та гарантії",
      content: "Турбота про пацієнтів і відповідальність за результат",
    },
  ];
  return (
    <>
      <section className="achievements">
        <div className="content">
          <h2 className="text-center">Стоматологія "IT-Dent" це</h2>
          <p className="text-center">
            Ідеальні умови для комфортного та якісного стоматологічного
            лікування, кращі технології, професійна команда та комплексний
            підхід. Ми впевнені в тому, що серйозна стоматологія не може
            існувати без застосування новітніх методик і результатів світових
            досягнень. Ми гарантуємо безпеку та безболісність лікування.
          </p>
          <ul className="achievements-list row">
            {cardItems.map((items, i) => (
              <li key={i} className="col-2 archievements-item">
                <div className="card text-bg-light">
                  <div className="achievements_text card-body">
                    <h4>{items.header}</h4>
                    <p>{items.content}</p>
                  </div>
                </div>
                <div className="achievements_img"></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Achievements