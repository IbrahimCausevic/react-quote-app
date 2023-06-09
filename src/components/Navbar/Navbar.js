import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/Login");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <button onClick={Login}>Login</button>
    </div>
  );
};

export default Navbar;
