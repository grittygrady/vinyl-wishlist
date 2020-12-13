import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Nav.css";

const Nav = (props) => {
  console.log(props);

  const logoutHandler = () => {
    props.logoutHandler()
  }

  return (
    <nav>
      <h1>Vinyl Wishlist</h1>
      <ul className="nav-links">
        {props.loggedIn ? (
          <Link to="/">
            <li onClick={logoutHandler}>Logout</li>
          </Link>
        ) : (
          <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
        </>
        )}     
      </ul>
    </nav>
  );
};

export default Nav;
