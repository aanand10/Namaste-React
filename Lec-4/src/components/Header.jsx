import logo from "./Logo.png";
import { useState } from "react";
const Title = () => {
  return (
    <>
      <div className="logoBox">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
          <h1>Food Villa</h1>
        </a>
      </div>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // as assigned boolean value we can use it directly for boolean operations
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      {!isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
            alert("You are  logged in");
          }}
        >
          Log in
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
            alert("you are logged out");
          }}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
