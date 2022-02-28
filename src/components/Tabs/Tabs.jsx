import React from "react";

import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";

import SummTab from "../SummTab/SummTab";
import OrderTab from "../OrderTab/OrderTab";
import CustomerTab from "../CustomerTab/CustomerTab";
import CustomersModal from "../CustomersModal";

export const Tab = () => {
  return (
    <div>
      <Container fluid="md">
        <Tabs
          defaultActiveKey="summary"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="summary" title="Podsumowanie">
            <SummTab />
          </Tab>
          <Tab eventKey="orders" title="Zamówienia">
            <OrderTab />
          </Tab>
          <Tab eventKey="clients" title="Klienci">
            <CustomerTab />
          </Tab>
          <Tab eventKey="drop" title="Przypisz zamówienie">
            <CustomersModal />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Tab;
