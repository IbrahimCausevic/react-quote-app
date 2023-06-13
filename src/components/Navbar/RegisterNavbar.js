import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const RegisterNavbar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <div className="options">
        <button onClick={home}>Home</button>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default RegisterNavbar;
