import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const DetailsNavbar = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const Login = () => {
    navigate("/Login");
  };
  return (
    <div className="Navbar">
      <div className="Logo">ReactQuotes</div>
      <div className="options">
        <button onClick={Home}>Home</button>
        <button onClick={Login}>Login</button>
      </div>
    </div>
  );
};

export default DetailsNavbar;
