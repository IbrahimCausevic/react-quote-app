import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddQuote.css";

const AddQuote = () => {
  const navigate = useNavigate();
  const Edit = () => {
    navigate("/addquote");
  };
  return (
    <div onClick={Edit} className="Edit">
      +
    </div>
  );
};

export default AddQuote;
