import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar({setAuth}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("auth", JSON.stringify(false));
    setAuth(JSON.parse(localStorage.getItem('auth')));
    navigate("/login");
  };
  return (
    <div className="nav">
      <p>
        <Link className="link" to="/">
          Home
        </Link>
      </p>
      <p>
        <Link className="link" to="/about">
          About
        </Link>
      </p>
      <p>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </p>
      <p>
        <Link className="link" to="/chars">
          Characters
        </Link>
      </p>
      <p onClick={() => handleLogout()} className="link">
        Logout
      </p>
    </div>
  );
}

export default Navbar;
