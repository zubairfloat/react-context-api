import React from "react";

import CustomersModal from "../components/CustomersModal";
import Operations from "../components/Operations";

const customersData = [
  {
    id: 1,
    name: "Tiger Nixon",
    address: "Edinburgh",
    details: <CustomersModal />,
    action: <Operations />,
  },
  {
    id: 2,
    name: "Garrett Winters",
    address: "Tokyo",
    details: <CustomersModal />,
  },
  {
    id: 3,
    name: "Ashton Cox",
    address: "San Francisco",
    details: <CustomersModal />,
  },
  {
    id: 4,
    name: "Cedric Kelly",
    address: "Edinburgh",
    details: <CustomersModal />,
  },
  {
    id: 5,
    name: "Airi Satou",
    address: "Tokyo",
    details: <CustomersModal />,
  },
  {
    id: 6,
    name: "Brielle Williamson",
    address: "New York",
    details: <CustomersModal />,
  },
];

export default customersData;
