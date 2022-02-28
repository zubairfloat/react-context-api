import React, { useState, useContext } from "react";
import CustomersModal from "../components/CustomersModal";
import { GlobalContext } from "../Context/GlobalState";
import { Form, Modal, Button } from "react-bootstrap";

const Operations = (props) => {
  const [values, setValues] = useState({
    address: props.client.address,
    name: props.client.name,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { removeOrder, editOrder } = useContext(GlobalContext);
  const handleRemove = () => {
    removeOrder(props?.client?.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const data = {
      id: props?.client?.id,
      name: values.name,
      address: values.address,
      details: <CustomersModal />,
    };
    editOrder(data);
    setShow(false);
  };
  return (
    <div>
      <Button variant="danger" size="sm" onClick={handleRemove}>
        Delete
      </Button>
      <Button variant="warning" size="sm" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nazwa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa"
                value={values.name}
                name="name"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adres"
                value={values.address}
                name="address"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Operations;
