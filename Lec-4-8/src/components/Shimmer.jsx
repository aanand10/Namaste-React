import React from "react";
import foodLoadingAnimation from "../Images/foodLoadingAnimation.gif";

const cardRender = (n) => {
  return Array(n)
    .fill("")
    .map((e, index) => (
      <div className="card" key={index}>
        <img
          className="loadingImg"
          style={{ borderRadius: "0.4rem", margin: "0 auto" }}
          alt="Card Image"
          src={foodLoadingAnimation}
        />
        <h2>Hotel...</h2>
        <h3>Loading.....</h3>
        <p>stars | min | ₹</p>
      </div>
    ));
};

const Shimmer = () => {
  return <>{cardRender(15)}</>;
};

export default Shimmer;
