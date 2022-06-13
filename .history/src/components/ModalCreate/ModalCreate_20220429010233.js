import "./ModalCreate.css";
import React from "react";
function Modal({ open }) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Tạo mới{" "}
          </h2>
          <div className="wrap-input">
            <p htmlFor="TenMon" className="create-lable">
              Tên món *
            </p>
            <input
              type={"text"}
              name="TenMon"
              className="create-input"
              placeholder="Hãy nhập tên món..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-lable">
              Phân loại *
            </p>
            <select name="TenMon" className="create-input">
              <option value={1}>Món chính</option>
              <option value={2}>Món phụ</option>
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-lable">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="GiaTien"
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-lable">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="Giá bán"
              className="create-input"
              placeholder="Hãy nhập giá bán..."
            ></input>
          </div>
          <div className="wrap-input">
            <span htmlFor="Image" className="create-lable">
              Hình ảnh *
            </span>
            <input
              type={"file"}
              name="GiaTien"
              className="create-input"
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="CongThuc" className="create-lable" style={{fontSize:"20px"}}>
              Công thức
            </p>
            <div className="wrap-input">
              <p htmlFor="NguyenLieu" className="create-lable">
                Nguyên liệu
              </p>
              <input
                type={"text"}
                name="NguyenLieu"
                className="create-input"
                placeholder="Hãy nhập giá bán..."
              ></input>
            </div>
            <div className="wrap-input">
              <p htmlFor="SoLuong" className="create-lable">
                Số lượng
              </p>
              <input
                type={"text"}
                name="Số lượng"
                className="create-input"
                placeholder="Hãy nhập giá bán..."
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
