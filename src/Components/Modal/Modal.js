import React from "react";
import "./Modal.css";

export default function Modal({ modalContent, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-div">
        <img src={modalContent.image_url} alt={modalContent.title}></img>
        <h3>{modalContent.title}</h3>
        <p>{modalContent.description}</p>
        <span className="cross" onClick={closeModal}>
          X
        </span>
      </div>
    </div>
  );
}
