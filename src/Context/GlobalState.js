import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import customersData from "../Data/Customers";
import ordersData from "../Data/Orders";

// Initial State
const initialState = {
  orders: ordersData,
  customers: customersData,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removecustomer = (id) => {
    dispatch({
      type: "REMOVE_CUSTOMER",
      payload: id,
    });
  };

  const addcustomer = (customer) => {
    dispatch({
      type: "ADD_CUSTOMER",
      payload: customer,
    });
  };

  const editcustomer = (customer) => {
    dispatch({
      type: "EDIT_CUSTOMER",
      payload: customer,
    });
  };

  // Actions
  const removeOrder = (id) => {
    dispatch({
      type: "REMOVE_ORDER",
      payload: id,
    });
  };

  const addOrder = (customer) => {
    dispatch({
      type: "ADD_ORDER",
      payload: customer,
    });
  };

  const editOrder = (customer) => {
    dispatch({
      type: "EDIT_ORDER",
      payload: customer,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        customers: state.customers,
        orders: state.orders,
        removecustomer,
        addcustomer,
        editcustomer,
        removeOrder,
        addOrder,
        editOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
