import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      {contacts.map(contact => (
        <div id={`contact-${contacts.indexOf(contact.name)}`} className="card">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
