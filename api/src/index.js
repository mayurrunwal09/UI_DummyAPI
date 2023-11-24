


import React from "react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { Store } from "./Store";
import App from "./App";

import { createRoot } from "react-dom"; // Import createRoot

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}> {/* Wrap your App with Provider and provide the store */}
    <App />
  </Provider>
);

