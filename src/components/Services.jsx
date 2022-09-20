import React from 'react'

const Services = () => {
const services = [
  {
    name: "Діагностика",
    list: [
      "Прицільний знімок зуба",
      "Панорамний знімок зубів",
      "Телерентгенографія",
      "Комп’ютерна томографія",
    ],
  },
  {
    name: "Відбілювання зубів",
    list: ["Відбілювання зубів Magic Smile", "Домашнє відбілювання зубів"],
  },
  {
    name: "Дитяча стоматологія",
    list: [
      "Профілактика карієсу",
      "Фторування зубів",
      "Озонування зубів",
      "Герметизація фісур",
      "Пломбування зубів у дітей",
      "Видалення молочних зубів",
      "Рання ортодонтія",
      "Лікування зубів без бормашини",
    ],
  },
  {
    name: "Гігієна та пародонтологія",
    list: [
      "Професійна чистка зубів",
      "Вектор-терапія",
      "Фотодинамотерапія",
      "Плазмотерапія ясен",
    ],
  },
  {
    name: "Ортодонтія",
    list: [
      "Ортодонтичні апарати та пластинки",
      "Брекети",
      "Капи Інвізілайн",
      "Спортивні капи",
    ],
  },
  {
    name: "Терапія",
    list: [
      "Озонотерапія зубів",
      "Пломбування зубів",
      "Художня реставрація зубів",
      "Лікування каналів зуба",
    ],
  },
  {
    name: "Хірургія та імплантація",
    list: [
      "Видалення зубів",
      "Імплантація зубів",
      "Синус-ліфтинг",
      "Лазерна пластика вуздечок",
    ],
  },
  {
    name: "Естетичне протезування",
    list: [
      "Anti-age протезування",
      "Вініри",
      "Дентальні керамічні коронки",
      "Протезування на імплантатах",
      "Знімні та частково знімні протези",
    ],
  },
];

  return (
    <>
      <section className="services">
        <div className="content">
          <h2 className="services_title text-center">Стоматологічні послуги</h2>
          <p className="text-center services_p">
            Ми турбуємося про здоров’я та гарну усмішку наших пацієнтів,
            застосовуючи найкращі досягнення сучасної стоматології для
            ефективного та безпечного лікування зубів.
          </p>
          <ul className="services-list row">
            {services.map((service, i) => (
              <li key={i} className=" services-item col-2">
                <div className="services_picture">
                  <i className="fa-solid fa-tooth services-icon"></i>
                </div>
                <div className="services-text">
                  <h3 className="services-diagnostics">{service.name}</h3>
                  <ul className="services-item-list">
                    {service.list && service.list.length ? service.list.map((item, i ) => (
                      <li key={i} className="services-item-list-li">
                      {item}
                    </li>
                    )) : null}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Services