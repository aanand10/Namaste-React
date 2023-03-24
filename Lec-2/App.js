import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "mainClass",
  },
  "Heading 1 from the parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "mainClass1",
  },
  "Heading 2 to check the server.."
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "containerBox",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root")); // what ever passed
// passing the react element in the root
// async defer
root.render(container);

console.log(heading);
