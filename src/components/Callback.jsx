import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import AppContext from "../AppContext";
import { toggleModal, updateName, updatePhoneNumber, selectModalStatus, selectName, selectPhoneNumber } from '../redux/slices/modalSlice';

function Callback() {
  // const { show, setShow } = React.useContext(AppContext);
const dispatch = useDispatch();
const isModalOpen = useSelector(selectModalStatus);
  const name = useSelector(selectName);
  const phoneNumber = useSelector(selectPhoneNumber);

  // const handleClose = () => setShow(false);
   const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const handleNameChange = (event) => {
    dispatch(updateName(event.target.value));
  };

  const handlePhoneNumberChange = (event) => {
    dispatch(updatePhoneNumber(event.target.value));
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваше ім'я</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ім'я"
                autoFocus
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Номер телефону</Form.Label>
              <Form.Control
                type="text"
                placeholder="Номер телефону"
                alue={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Callback;
