import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* OUTLET TO RENDER OTHER CONDITIONAL COMPONENTS  */}
      <Outlet />
      <Footer />
    </>
  );
};

// two types of routing
//  - client side routing
//  - server side routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    // here we can add sub routes
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // we can also write about partentPath/{path}  localhost:1234/about
        // / means from the root 
        element: <About />,
        children: [
          {
            path: "profile", // partentPath/{path}  localhost:1234/about/profile
            // no need of /profile it will show on localhost:1234/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
