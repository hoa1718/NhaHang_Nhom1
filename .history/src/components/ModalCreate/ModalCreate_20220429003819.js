import "./ModalCreate.css";
import React from "react";
function Modal({ open}) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
        <h2 style={{color:"black"}}>Tạo mới </h2>
          <div className="wrap-input">
            <p htmlFor="TenMon" className="create-lable">Tên món *</p>
            <input type={"text"} name="TenMon" className="create-input" placeholder="Hãy nhập tên món..."></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-lable">Phân loại *</p>
            <select name="TenMon" className="create-input">
              <option value={1}></option>
            </select>
    
          </div>
        </div>
        </div>
    </div>
  );
}

export default Modal;
