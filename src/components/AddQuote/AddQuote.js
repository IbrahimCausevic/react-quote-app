import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddQuote.css";

const AddQuote = () => {
  const navigate = useNavigate();
  const Edit = () => {
    navigate("/edit");
  };
  return (
    <div onClick={AddQuote} className="Edit">
      +
    </div>
  );
};

export default AddQuote;
