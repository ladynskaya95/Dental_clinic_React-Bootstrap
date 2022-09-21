import React from 'react'
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "../img/poster.jpg";

const PrevContent = () => {
  return (
    <>
      <section className="prev">
        <div className="prev-content">
          <Image fluid src={img} alt="logo" className="prev-content" />
          <div className="content">
            <div className="prev-title">
              <h1>СУЧАСНІ ТЕХНОЛОГІЇ</h1>
              <h2>Гарантований результат</h2>
            </div>
            <div className="prev-more">
              <a href="/details" className="btn btn-primary prev-more_link">
                Дізнатися більше
              </a>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </div>
            <div className="prev-proposal">
              <a href="/proposal" className="prev-proposal_link">
                Ще пропозиція
                <img src="" alt="" className="prev-proposal_icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrevContent;