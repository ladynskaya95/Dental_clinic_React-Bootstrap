import React from 'react'
import { Outlet } from "react-router-dom";

const FirstAppointment = () => {
  return (
    <>
    <Outlet/>
      <div className="services_first_appointment">
        <h2>Перший прийом</h2>
        <p>
          Мета нашої першої зустрічі – зрозуміти, чого ви хочете, який вид
          лікування є необхідним і скільки це буде коштувати. Усі етапи першого
          прийому – частина європейських стандартів, яких ми чітко дотримуємося.
          За такою ж схемою вас би лікували у клініках за кордоном. За нагальної
          потреби або якщо у вас мало часу, ми адаптуємо перший прийом так, щоб
          вирішити проблему за один візит. Якщо лікування потребує хірургічного
          втручання, лікар проведе віртуальну операцію та покаже вам усі деталі.
          Ви будете чітко знати, що відбуватиметься під час лікування.
        </p>
      </div>
    </>
  );
}

export default FirstAppointment