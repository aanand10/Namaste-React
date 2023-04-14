import React from "react";
import ReactDOM from "react-dom/client";
import userProfile from "./363633-200.png";
// React.createElement ==> Object ==> HTML(DOM)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "mainClass",
//     key: "h1",
//   },
//   "Heading 1 from the react element"
// );

//JSX : this was formed for the purpose of writing html using JS more effectively by the react developers. It is not a HTML inside js

// JSX ==> React.createElement ==> Object ==> HTML(DOM)
// babel converts the jsx into the React.createElement

// const heading2 = (
//   <h1 id="title" key="h1" tabIndex="">
//     Hello from the JSX
//   </h1>
// );
// console.log(typeof heading2);

const root = ReactDOM.createRoot(document.getElementById("root")); // what ever passed
// passing the react element in the root

// React components
// Functional components - currently been in use
// Class Based components - OLD

let names = ["anand", "jsx", "react", "akshay"];

// const HeaderComponent = () => {
//   return (
//     <div>
//       {heading}
//       {names.map((name, key) => {
//         return <h2>{name}</h2>;
//       })}
//       {/*  component composition : passing components in componenets  */}
//       <HeaderComponent2 />
//       <h2> namaste react functional component</h2>
//       <h2>This is subheading </h2>
//     </div>
//   );
// };
// const HeaderComponent2 = () => (
//   <div>
//     <h1> namaste react functional component</h1>
//     <h2>This is subheading </h2>
//   </div>
// );

// functional component is a normal function which is returning some jsx / react element

// home work question

{
  /* <div>
  <h1 className="title">Title 1</h1>
  <h2 className="title">Title 2</h2>
  <h3 className="title">Title 3</h3>
</div>; */
}

// header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const box = [
  React.createElement(
    "div",
    {
      id: "box",
      className: "container",
      key: "div",
    },
    React.createElement(
      "h1",
      {
        id: "title",
        className: "mainClass",
        key: "h1",
      },
      "Heading 1 from the react element"
    ),
    React.createElement(
      "h2",
      {
        id: "title",
        className: "mainClass",
        key: "h2",
      },
      "Heading 2 from the react element"
    ),
    React.createElement(
      "h3",
      {
        id: "title",
        className: "mainClass",
        key: "h3",
      },
      "Heading 3 from the react element"
    )
  ),
];

// element using JSX
const heading1 = <h1>this is using jsx element</h1>;
const heading2 = <h2>this is using jsx element</h2>;
const heading3 = <h3 style={{ color: "red" }}>this is using jsx element</h3>;
const container = (
  <div>
    {heading1}
    {heading2}
    {heading3}
  </div>
);
const heading11 = () => <h2>this is heading11</h2>;

// Create a functional component of the same with JSX

const header = () => (
  <div>
    <h1 className="title">h1 title using jsx</h1>
    <h2 className="title">h2 title using jsx </h2>
    {/* Composition of Component(Add a component inside another) */}
    <h3 className="title">h3 title using jsx {heading3}</h3>
    {heading11()}
    <heading11></heading11>
  </div>
);

const TopBox = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center ",
        justifyContent: "space-between",
      }}
      className="topbox"
    >
      <h1 className="logo">A</h1>
      <div
        style={{
          border: "1px solid red ",
          padding: "0.5rem 4rem",
          borderRadius: "1rem",
        }}
        className="searchbar"
      >
        SearchBar
      </div>
      <img width={60} height={60} src={userProfile} alt="Logo" />
    </div>
  );
};

const BodyContainer = () => {
  return (
    <>
      <TopBox />
    </>
  );
};
root.render(BodyContainer());
