import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <div className="options">
        <button onClick={home}>Home</button>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default LoginNavbar;
