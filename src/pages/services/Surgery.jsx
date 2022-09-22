import React from 'react'

const Surgery = () => {
  return (
    <div>
      <h2>Хірургія</h2>
      <div className="services_surgery row">
        <div className="col-4 services_surgery_item">Пластика ясен</div>
        <div className="col-4 services_surgery_item">
          Видалення зубів
        </div>
        <div className="col-4 services_surgery_item">Плазмоліфтинг ясен після видалення зубів</div>
        <div className="col-4 services_surgery_item">Кісткова пластика при імплантації</div>
        <div className="col-4 services_surgery_item">Резекція верхівки кореня зуба</div>
      </div>
    </div>
  );
}

export default Surgery