import "./ModalCreate.css";
import React from "react";
function Modal({ open}) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <div className="wrap-input">
            <h2>Tạo mới </h2>
            <p htmlFor="TenMon" className="create-lable">Tên món</p>
            <input type={"text"} name="TenMon" className="create-input" placeholder="Hãy nhập tên món..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
