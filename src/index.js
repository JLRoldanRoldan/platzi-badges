import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(
  <Badge
    firstName="Jorge"
    lastName="Roldan-Roldan"
    jobTitle="Full stack web developer"
    twitter="@JLRoldanRoldan"
  />,
  container
);
