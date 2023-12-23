import logo from "../Images/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <>
      <div className="logoBox">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
          <h1>Food Villa</h1>
        </Link>
      </div>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // as assigned boolean value we can use it directly for boolean operations
  return (
    <div className="header  shadow-sm border-b">
      <Title />
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="cart">
          <li>Cart</li>
        </Link>
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
