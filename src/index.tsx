import React from "react";
import ReactDOM from "react-dom/client";
import { App as AntDApp } from "antd";

import GlobalStyles from "src/components/GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AntDApp>
      <GlobalStyles />
      <App />
    </AntDApp>
  </React.StrictMode>
);
