import React from "react";

const OralHygiene = () => {
  return (
    <div className="services_oral_hygiene">
      <h2>Гігієна порожнини рота</h2>
      <div className="services_oral_hygiene_row row">
        <div className="col-5 services_oral_hygiene_item">
          <div className="card">
            <div className="card-body">
              <h3>Професійна чистка зубів</h3>
            </div>
          </div>
        </div>
        <div className="col-5 services_oral_hygiene_item">
          <div className="card">
            <div className="card-body">
              <h3>Фторування зубів</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralHygiene;
