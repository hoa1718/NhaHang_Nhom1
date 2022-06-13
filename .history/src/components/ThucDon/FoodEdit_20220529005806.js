import axios from 'axios';
import React, { useState,useEffect} from "react";
function FoodEdit({ open, close,props }) {
  const addCongThuc = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("CongThuc").appendChild(NguyenLieu);
  };
  const [TenMon, setTenMon] = useState(props[0].TenMon)
  const [GiaBan, setGiaBan] = useState(props[0].GiaBan)
  const [GiaTien, setGiaTien] = useState(props[0].GiaTien)
  const [IDPhanLoai, setIDPhanLoai] = useState(props[0].IDPhanLoai)
  const [Image, setImage] = useState(props[0].Image)
  const displayPL =(data)=>{
    return Object.keys(data).map((item, i) => {
      return (
        console.log();
        <option value={props[2][item].IDPhanLoai}>{props[2][item].TenPhanLoai}</option>
      )
  })};
  const displayCongThuc = (data) => {
    return Object.keys(data).map((item, i) => {
      return (
        <div id="NguyenLieu" style={{ marginLeft: "-20px" }}>
          <div className="wrap-input">
            <p htmlfor="NguyenLieu" className="create-label">
              Nguyên liệu
            </p>
            <input
              type='{"text"}'
              name="NguyenLieu"
              className="create-input NguyenLieu"
              value={props[1][item].TenNguyenLieu +" ("+ props[1][item].DonViTinh +")"}
            />
          </div>
          <div className="wrap-input">
            <p htmlfor="SoLuong" className="create-label">
              Số lượng
            </p>
            <input
              type='{"text"}'
              name="Số lượng"
              className="create-input SoLuong"
              value={props[1][item].SoLuong}
            />
          </div>
        </div>
      );
    });
  };
  if (!open) return null;
  if (!props) return null
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Cập nhật
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" "><div className="wrap-input">
            <p htmlFor="TenMon" className="create-label">
              Tên món *
            </p>
            <input
              type={"text"}
              name="TenMon"
              className="create-input"
              placeholder="Hãy nhập tên món..."
              value={props[0].TenMon}
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-label">
              Phân loại *
            </p>
            <select name="PhanLoai" className="create-input">
              {displayPL(props[2])}
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-label">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="GiaTien"
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
              value={props[0].GiaTien}
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-label">
              Giá bán *
            </p>
            <input
              type={"text"}
              name="GiaBan"
              className="create-input"
              placeholder="Hãy nhập giá bán..."
              value={props[0].GiaBan}
            ></input>
          </div>
          <div className="wrap-input" style={{ margin: "10px 0" }}>
            <span htmlFor="Image" className="create-label">
              Hình ảnh *
            </span>
            <input type={"file"} name="Image" className="create-input"></input>
          </div>
          <div className="wrap-input" id="CongThuc">
            <p
              htmlFor="CongThuc"
              className="create-label"
              style={{ fontSize: "20px" }}
            >
              Công thức
              <input type={'button'}  onClick={addCongThuc} value={"+"} />
            </p>
            {displayCongThuc(props[1])}
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default FoodEdit;
