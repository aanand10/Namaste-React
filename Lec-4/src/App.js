import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
{
  /* 
    Header
        - Logo
        - Nav items 
        - Cart
    Body 
        - SearchBar
        - RestranuntList
            - RestranuntCard 
                - Image
                - Name
                - Rating
                - Cusines tags (chinese , north indian , south indian )
    Footer        
        - Reff. links
        - copy right
    */
}
{
  // creating an obj for style
  // const styleObj = {
  //   backgroundColor: "red",
  // };
  // React.Fragment is a component which is exported by react
  // jsx can only have one parent
  // if i want to have two parents so instead of using ugly and unnecessary div we can use React.Fragment which is a componenet exported by react
  // React.Fragment is like a empty Tag , we can write it like <></>
}
const AppLayout = () => {
  return (
    <>
      <Header />
      <>
        <Body />
      </>
    </>
  );
};

root.render(<AppLayout />);
