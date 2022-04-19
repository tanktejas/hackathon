import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "tejas-tank.us.auth0.com";
const clientid = "1zOS3qzC8YxS2D8ELdPTg8GijT3kH6ty";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientid}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
