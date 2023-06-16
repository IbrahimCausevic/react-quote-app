import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const EditNavbar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
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
        <button onClick={home}>Home</button>
      </div>
    </div>
  );
};

export default EditNavbar;
