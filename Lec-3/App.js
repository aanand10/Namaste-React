import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTML(DOM)
const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "mainClass",
    key: "h1",
  },
  "Heading 1 from the react element"
);

//JSX : this was formed for the purpose of writing html using JS more effectively by the react developers. It is not a HTML inside js

// JSX ==> React.createElement ==> Object ==> HTML(DOM)
// babel converts the jsx into the React.createElement

const heading2 = (
  <h1 id="title" key="h1" tabIndex="">
    Hello from the JSX
  </h1>
);
console.log(typeof heading2);

const root = ReactDOM.createRoot(document.getElementById("root")); // what ever passed
// passing the react element in the root

// React components
// Functional components - currently been in use
// Class Based components - OLD

let names = ["anand", "jsx", "react", "akshay"];

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {names.map((name, key) => {
        return <h2>{name}</h2>;
      })}
      {/*  component composition : passing components in componenets  */}
      <HeaderComponent2 />
      <h2> namaste react functional component</h2>
      <h2>This is subheading </h2>
    </div>
  );
};
const HeaderComponent2 = () => (
  <div>
    <h1> namaste react functional component</h1>
    <h2>This is subheading </h2>
  </div>
);

// functional component is a normal function which is returning some jsx / react element

root.render(<HeaderComponent />);
