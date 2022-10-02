import React from "react";

const Aesthetics = () => {
  return (
    <div className="services_aesthetics">
      <h2>Естетика</h2>
      <div className="services_aesthetics_row row">
        <div className="col-3 services_aesthetics_item">
          <div className="card">
            <div className="card-body">
              <h3>Керамічні вініри</h3>
            </div>
          </div>
        </div>
        <div className="col-3 services_aesthetics_item">
          <div className="card">
            <div className="card-body">
              <h3> Відбілювання зубів Magic Smile</h3>
            </div>
          </div>
        </div>
        <div className="col-3 services_aesthetics_item">
          <div className="card">
            <div className="card-body">
              <h3>Домашнє відбілювання зубів</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aesthetics;
