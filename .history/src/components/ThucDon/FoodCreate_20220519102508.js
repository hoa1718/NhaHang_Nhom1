import "./Modal.css";
import axios from 'axios';
import React, { useState} from "react";
function FoodCreate({ open, close }) {
  const [TenMon, setTenMon] = useState('')
  const [GiaBan, setGiaBan] = useState('')
  const [GiaTien, setGiaTien] = useState('')
  const [IDPhanLoai, setIDPhanLoai] = useState(1)
  const [Image, setImage] = useState('')
  const addCongThuc = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("CongThuc").appendChild(NguyenLieu);
  };
  const createFood = (event) =>{
    // let formData = new FormData();
    // formData.append("TenMon",TenMon)
    //         .append("GiaBan",GiaBan)
    //         .append("GiaTien",GiaTien)
    //         .append("IDPhanLoai",IDPhanLoai)
    //         .append("Image",Image)
    let food ={
      TenMon:TenMon,
      GiaBan:GiaBan,
      GiaTien:GiaTien,
      IDPhanLoai:IDPhanLoai,
      Image:Image,
    }
    axios.post('http://localhost:4000/ThucDon/Create',food)
    .then(res =>{
      console.log(res);
    }).catch(error => console.log(error))
  }
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Tạo mới
            <button onClick={close}>X</button>
          </h2>
          <form enctype="multipart/form-data" onSubmit={e=>createFood(e)}><div className="wrap-input">
            <p htmlFor="TenMon" className="create-label">
              Tên món *
            </p>
            <input
              type={"text"}
              name="TenMon"
              onChange={(e)=>{console.log(e.target.value)
              setTenMon(e.target.value)}
              }
              className="create-input"
              placeholder="Hãy nhập tên món..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-label">
              Phân loại *
            </p>
            <select name="IDPhanLoai"      
                    onChange={(e)=>setIDPhanLoai(e.target.value)} 
                    className="create-input">
              <option value={1}>Món chính</option>
              <option value={2}>Món phụ</option>
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-label">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="GiaTien"
              onChange={(e)=>setGiaTien(e.target.value)}
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-label">
              Giá bán *
            </p>
            <input
              type={"text"}
              name="GiaBan"
              onChange={(e)=>setGiaBan(e.target.value)}
              className="create-input"
              placeholder="Hãy nhập giá bán..."
            ></input>
          </div>
          <div className="wrap-input" style={{ margin: "10px 0" }}>
            <span htmlFor="Image" className="create-label">
              Hình ảnh *
            </span>
            <input type={"file"}  onChange={(e)=>{setImage(e.target.files[0]);console.log(e.target.files[0])}} name="Image" className="create-input"></input>
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
            <div id="NguyenLieu" style={{marginLeft:"-20px"}}>
              <div className="wrap-input">
                <p htmlFor="NguyenLieu" className="create-label">
                  Nguyên liệu
                </p>
                <input
                  type={"text"}
                  name="NguyenLieu"
                  className="create-input"
                  placeholder="Nguyên liệu..."
                  list="suggest"
                ></input>
                <datalist id="suggest">
                  <option value="Boston">
                  </option><option value="Cambridge">
                  </option></datalist>
              </div>
              <div className="wrap-input">
                <p htmlFor="SoLuong" className="create-label">
                  Số lượng
                </p>
                <input
                  type={"text"}
                  name="SoLuong"
                  className="create-input"
                  placeholder="Số lượng..."
                ></input>
              </div>
            </div>
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default FoodCreate;
