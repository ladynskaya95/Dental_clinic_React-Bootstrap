import React from 'react'

const Surgery = () => {
  return (
    <div className="services_surgery">
      <h2>Хірургія</h2>
      <div className="services_surgery_row row">
        <div className="col-4 services_surgery_item">
          <div className="card">
            <div className="card-body">
              <h3>Пластика ясен</h3>
            </div>
          </div>
        </div>
        <div className="col-4 services_surgery_item">
          <div className="card">
            <div className="card-body">
              <h3>Видалення зубів</h3>
            </div>
          </div>
        </div>
        <div className="col-4 services_surgery_item">
          <div className="card">
            <div className="card-body">
              <h3>Плазмоліфтинг ясен після видалення зубів</h3>
            </div>
          </div>
        </div>
        <div className="col-4 services_surgery_item">
          <div className="card">
            <div className="card-body">
              <h3>Кісткова пластика при імплантації</h3>
            </div>
          </div>
        </div>
        <div className="col-4 services_surgery_item">
          <div className="card">
            <div className="card-body">
              <h3>Резекція верхівки кореня зуба</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surgery