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
      <button onClick={Home}>Home</button>
    </div>
  );
};

export default LoginNavbar;
