import React, { useContext, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { GlobalContext } from "../../Context/GlobalState";
import { Modal, Button } from "react-bootstrap";
export default function Basic() {
  const { customers, orders } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const newCustomers = customers.map((client) => {
    return {
      ...client,
      action: <Button onClick={() => setShow(true)}>Orders</Button>,
    };
  });

  const [dataOrderTable] = useState({
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
        width: 270,
      },
      {
        label: "Szczegóły",
        field: "details",
        sort: "disabled",
        width: 50,
      },
    ],
    rows: orders,
  });
  // eslint-disable-next-line no-unused-vars
  const [datatable, setDatatable] = React.useState({
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
        width: 270,
      },
      {
        label: "Szczegóły",
        field: "details",
        sort: "disabled",
        width: 50,
      },
      {
        label: "Orders",
        sort: "disabled",
        field: "action",
        width: 50,
      },
    ],
    rows: newCustomers,
  });

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
      />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Orders of Related Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={dataOrderTable}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
