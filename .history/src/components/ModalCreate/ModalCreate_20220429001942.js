import "./ModalCreate.css";
import React from "react";
function Modal({ open}) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2>Tạo mới </h2>
          <div className="wrap-input">
            <label 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
