import React from 'react'
import Image from "react-bootstrap/Image";

import img2 from "../img/1.jpg"

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="content">
          <h2 className="about-title text-center">ЧОМУ МИ?</h2>
          <div className="row about-body">
            <div className="col-5 about_text">
              <p>
                Світові стандарти та протоколи лікування, персональний менеджер,
                додаткові послуги для висококласного сервісу – так виглядає
                прийом у нашій клініці.
              </p>
              <p>
                Наші київські клієнти отримують такий самий рівень сервісу та
                якість лікування, як і в найкращих клініках США та Європи.
                Лояльні пацієнти з 1995 року, сертифікація Carl Zeiss, SOS
                International, довіра понад 18 посольств і топових осіб
                міжнародних компаній – доказ того, що ми на правильному шляху.
              </p>
              <p>
                Стоматологія є частиною Медичної групи Порцелян, до якої також
                входить офтольмологічна клініка Світ Зору та клініка естетичної
                медицини Порцелян Естетікс. Скористатися послугами медичного
                центру ви можете за адресою м.Київ, вул. Отто Шмідта 26Б.
              </p>
            
            </div>
            <div className="col-7">
              <div className="about">
                <Image fluid src={img2} alt="logo2" className="about_image " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About