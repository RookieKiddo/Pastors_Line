import React from "react";
import "./Contact.css";

const Contact = ({ contact, onClick }) => {
  return (
    <div className="contact" onClick={() => onClick(contact.id)}>
      <div className="contact-name">
        {contact.first_name} {contact.last_name}
      </div>
      <div className="contact-phone">{contact.phone_number}</div>
      <div className="contact-email">{contact.email}</div>
    </div>
  );
};

export default Contact;
