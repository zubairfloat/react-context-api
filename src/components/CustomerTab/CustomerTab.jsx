import React, { useEffect, useState, useContext } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Form, Modal, Button } from "react-bootstrap";
import CustomersModal from "../CustomersModal";
import { GlobalContext } from "../../Context/GlobalState";
import OperationTable from "./OperationTable";

const Customer = () => {
  const [show, setShow] = useState(false);
  const { customers, addcustomer } = useContext(GlobalContext);
  const [values, setValues] = useState({
    address: "",
    name: "",
  });
  const handleClose = () => setShow(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const number = customers?.length;
    const data = {
      id: number + 1,
      name: values.name,
      address: values.address,
      details: <CustomersModal />,
    };
    addcustomer(data);
    setShow(false);
    setValues({
      address: "",
      name: "",
    });
  };

  const newCustomers = customers.map((client) => {
    return {
      ...client,
      action: <OperationTable client={client} />,
    };
  });

  // eslint-disable-next-line no-unused-vars
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Nazwa",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Nazwa",
        },
      },
      {
        label: "Adres",
        field: "address",
        width: 200,
      },
      {
        label: "Szczegóły",
        field: "details",
        sort: "disabled",
        width: 50,
      },
      {
        label: "Actions",
        field: "action",
        sort: "action",
        width: 150,
      },
      {
        label: (
          <Button variant="primary" size="sm" onClick={() => setShow(true)}>
            Add new
          </Button>
        ),
        sort: "disabled",
        width: 150,
      },
    ],
    rows: newCustomers,
  });

  useEffect(() => {
    const newCustomers = customers.map((client) => {
      return {
        ...client,
        action: <OperationTable client={client} />,
      };
    });
    setDatatable({
      ...datatable,
      rows: newCustomers,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customers]);

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Customers</Modal.Title>
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
    </>
  );
};

export default Customer;
