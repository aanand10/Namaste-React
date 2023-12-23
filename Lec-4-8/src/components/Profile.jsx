import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  return (
    <>
      <h2>Profile Component </h2>
      <h3>name : {props.name} </h3>
      <h4>Count : {count}</h4>
      <button className=" btn " onClick={() => setCount(count + 1)}>
        Count
      </button>
    </>
  );
};
export default Profile;
