// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter((customer) => {
          return customer.id !== action.payload;
        }),
      };
    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };
    case "EDIT_CUSTOMER":
      const updatecustomer = action.payload;

      const updatecustomers = state.customers.map((customer) => {
        if (customer.id === updatecustomer.id) {
          return updatecustomer;
        }
        return customer;
      });
      return {
        ...state,
        customers: updatecustomers,
      };

    case "REMOVE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => {
          return order.id !== action.payload;
        }),
      };
    case "ADD_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    case "EDIT_ORDER":
      const updateorder = action.payload;

      const updateorders = state.orders.map((order) => {
        if (order.id === updateorder.id) {
          return updateorder;
        }
        return order;
      });
      return {
        ...state,
        orders: updateorders,
      };

    default:
      return state;
  }
};
