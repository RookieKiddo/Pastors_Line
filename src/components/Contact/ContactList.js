import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Contact from "./Contact";
import "./ContactList.css";
import { setContacts, showModalC } from "../../redux/actions/functions";
import ModalC from "../ModalC";

const ContactList = ({ contacts, checked }) => {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const modalC = useSelector((state) => state.showModalC);

  useEffect(() => {
    if (checked) {
      setFilteredContacts(
        Object.values(contacts).filter((contact) => contact.id % 2 === 0)
      );
    } else {
      setFilteredContacts(Object.values(contacts));
    }
  }, [contacts, checked]);

  const getContact = (id) => {
    const res = filteredContacts.filter((contact) => contact.id === id);
    setContact(res[0]);
  };

  const handleClick = (id) => {
    // axios
    //   .get(`https://api.dev.pastorsline.com/api/contacts/${id}.json`, {
    //     headers: {
    //       Authorization:
    //         "",
    //     },
    //   })
    //   .then((res) => {
    //     dispatch({ type: "SHOW_MODAL_C", contact: res.data });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    getContact(id);
    const res = filteredContacts.filter((contact) => contact.id === id);
    dispatch({ type: "SHOW_MODAL_C", contacts: res[0] });
  };

  return (
    <div className={`contact-list ${modalC ? "hide" : ""}`}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onClick={handleClick} />
      ))}
      {Object.keys(contact).length > 0 && modalC && (
        <>
          <ModalC />
        </>
      )}
    </div>
  );
};

export default ContactList;
