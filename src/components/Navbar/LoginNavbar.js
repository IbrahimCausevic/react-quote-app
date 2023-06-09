import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <div className="options">
        <button onClick={Home}>Home</button>
      </div>
    </div>
  );
};

export default LoginNavbar;
