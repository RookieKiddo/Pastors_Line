import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../redux/actions/functions";
import { Button, Modal } from "react-bootstrap";

const ModalC = () => {
  const dispatch = useDispatch();
  const { showModalC, contacts } = useSelector((state) => state);

  const handleClose = () => {
    dispatch(hideModal());
  };

  if (!contacts) {
    return null;
  }

  return (
    <>
      <div>Aheed</div>
      <Modal show={showModalC} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>First Name: {contacts.first_name}</div>
          <div>Last Name: {contacts.last_name}</div>
          <div>Phone Number: {contacts.phone_number}</div>
          <div>Email: {contacts.email}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalC;
