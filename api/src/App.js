
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Components/Layout";
import { Provider } from "react-redux";
import { Store } from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;


