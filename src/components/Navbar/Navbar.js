import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/Login");
  };
  const Register = () => {
    navigate("/Register");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <div className="options">
        <button onClick={Login}>Login</button>
        <button onClick={Register}>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
