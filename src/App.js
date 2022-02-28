import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home";
import { GlobalProvider } from "./Context/GlobalState";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </div>
  );
};

export default App;
