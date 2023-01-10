import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showModalA, showModalB } from "../redux/actions/functions";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
// import "./Button.css";

const ButtonComponent = ({ backgroundColor, btnName, showModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    btnName === "All Contact" ? dispatch(showModalA()) : dispatch(showModalB());
    btnName === "All Contact" ? navigate("/modal-a") : navigate("/modal-b");
  };

  return (
    <Button
      className="button"
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {btnName}
    </Button>
  );
};

export default ButtonComponent;
