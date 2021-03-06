import "./Modal.css";
import axios from 'axios';
import React, { useState,useEffect} from "react";
function FoodCreate({ open, close }) {
  const [TenMon, setTenMon] = useState('')
  const [GiaBan, setGiaBan] = useState('')
  const [GiaTien, setGiaTien] = useState('')
  const [IDPhanLoai, setIDPhanLoai] = useState(1)
  const [Image, setImage] = useState('')
  const [datalist,setData]= useState();
  const [NguyenLieu,setNguyenLieu]= useState([]);
  const [SoLuong,setSoLuong]= useState([]);
  const addCongThuc = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("CongThuc").appendChild(NguyenLieu);
  };
  const lastID =  axios.get('http://localhost:4000/ThucDon/LastID')
  .then(res => {
   return res.data.result.Length;
  })
  .catch(err =>{
    return -1;
  })
  const getNguyenLieu = () =>{
    axios.get('http://localhost:4000/ThucDon/NguyenLieu')
        .then(res => {
         setData(res.data.result)
         console.log(res.data.result);
        })
        .catch(err =>{
          console.log(err);
        })
  }
  const displayNL = (data) =>{
    return Object.keys(data).map((item, i) => {
      return(
          <option value={datalist[item].IDNguyenLieu}>{datalist[item].TenNguyenLieu} ({datalist[item].DonViTinh})</option>
      );
    })
  }
  const createFood = (event) =>{
    let formData = new FormData();
    formData.append("TenMon",TenMon)
            formData.append("GiaBan",GiaBan)
            formData.append("GiaTien",GiaTien)
            formData.append("IDPhanLoai",IDPhanLoai)
            formData.append("Image",Image)
    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
    }
    axios.post('http://localhost:4000/ThucDon/Create',formData,config)
    .then(res =>{
      console.log(res);
      window.location.reload();
      alert("Them thanh cong")
    }).catch(error => console.log(error.response.data))
  }
  const createCongThuc =() =>{
    const elements = document.querySelectorAll(".NguyenLieu")
    console.log(elements);
  }
  useEffect(()=>getNguyenLieu(),console.log(last);,[]);
  if (!open) return null;
  if (!datalist) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            T???o m???i
            <button onClick={close}>X</button>
          </h2>
          <form method="post" onSubmit={e=>createFood(e)}><div className="wrap-input">
            <p htmlFor="TenMon" className="create-label">
              T??n m??n *
            </p>
            <input
              type={"text"}
              name="TenMon"
              required
              onChange={(e)=>{
              setTenMon(e.target.value)}
              }
              className="create-input"
              placeholder="H??y nh???p t??n m??n..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-label">
              Ph??n lo???i *
            </p>
            <select name="IDPhanLoai"      
                    onChange={(e)=>setIDPhanLoai(e.target.value)} 
                    className="create-input">
              <option value={1}>M??n ch??nh</option>
              <option value={2}>M??n ph???</option>
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-label">
              Gi?? ti???n *
            </p>
            <input
              type={"number"}
              name="GiaTien"
              min="1"
              required
              onChange={(e)=>setGiaTien(e.target.value)}
              className="create-input"
              placeholder="H??y nh???p gi?? ti???n..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-label">
              Gi?? b??n *
            </p>
            <input
              type={"number"}
              min="1"
              name="GiaBan"
              required
              onChange={(e)=>setGiaBan(e.target.value)}
              className="create-input"
              placeholder="H??y nh???p gi?? b??n..."
            ></input>
          </div>
          <div className="wrap-input" style={{ margin: "10px 0" }}>
            <span htmlFor="Image" className="create-label">
              H??nh ???nh *
            </span>
            <input type={"file"}  onChange={(e)=>{setImage(e.target.files[0]);}} 
                   name="Image" className="create-input"  accept="image/*" required></input>
          </div>
          <div className="wrap-input" id="CongThuc">
            <p
              htmlFor="CongThuc"
              className="create-label"
              style={{ fontSize: "20px" }}
            >
              C??ng th???c
              <input type={'button'}  onClick={addCongThuc} value={"+"} />
            </p>
            <div id="NguyenLieu" style={{marginLeft:"-20px"}}>
              <div className="wrap-input">
                <p htmlFor="NguyenLieu" className="create-label">
                  Nguy??n li???u
                </p>
                <select
                  name="NguyenLieu"
                  className="create-input NguyenLieu"
                >{displayNL(datalist)}</select>
              </div>
              <div className="wrap-input">
                <p htmlFor="SoLuong" className="create-label">
                  S??? l?????ng
                </p>
                <input
                  type={"text"}
                  name="SoLuong"
                  className="create-input SoLuong"
                  placeholder="S??? l?????ng..."
                ></input>
              </div>
            </div>
          </div>
          <input type={'submit'} className="btn-confirm" value={"X??c nh???n"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default FoodCreate;
