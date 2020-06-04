import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges!!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi!"
// );

// const name = "Jorge";
// // const element = React.createElement("h1", {}, `Hola soy ${name}`);
// const jsx = <h1>Hola soy, {name}</h1>;
const container = document.getElementById("app");

const jsx = (
  <div>
    <h1>Soy Jorge</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Jorge"),
  React.createElement("p", {}, "Hola, soy Jorge")
);

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(element, container);
