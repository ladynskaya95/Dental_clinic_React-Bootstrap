import React from 'react'
import Map from "../components/Map"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Callback from "./Callback";
import Links from '../components/Links';
import { useDispatch } from "react-redux";
import { toggleModal } from "../redux/slices/modalSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  // const { show, setShow } = React.useContext(AppContext);
  // const handleShow = () => setShow(true);
  const handleClick = () => {
    dispatch(toggleModal(true));
  };

  return (
    <div className="contacts">
      <div className="contacts_item contacts_item_info row">
        <div className="col-5">
          <h3>Контакти</h3>
          <p>
            Наш медичний центр знаходиться в Шевченківському районі за адресою:
            вул Глибочицька, 10-А. Найближча станція метро - Лукя'нівська. Режим
            роботии з 9 - 20, у вихідні - з 10 - 18. Записатися на прийом ви
            можете на нашому сайті за допомогою форми нижче або позвонити по
            телефону.
          </p>
        </div>
        <div className="col-7">
          <Map />
        </div>
      </div>
      <div>
        <div className="row contacts_item contacts_item_form">
          <div className="card col-5 left_form">
            <div className="card-body">
              <div>
                <h4>Запишіться до нас на прийом</h4>
                <p>Є питання до спеціаліста? </p>
                <p>Задавайте і дізнаєтесь які результати ви можете отримати </p>

                <Button onClick={handleClick} variant="primary" type="submit">
                  Записатися на консультацію
                </Button>
                <Callback />
              </div>
            </div>
          </div>
          <div className="card col-6 right_form">
            <div className="card-body">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Ваше імя(Обовязково)</Form.Label>
                    <Form.Control type="email" placeholder="Імя" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Ваш email(обовязково)</Form.Label>
                    <Form.Control type="password" placeholder="email" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Тема</Form.Label>
                  <Form.Control placeholder="Тема" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Повідомлення</Form.Label>
                  <Form.Control placeholder="Повідомлення" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Відправити
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footer_icons">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Contacts