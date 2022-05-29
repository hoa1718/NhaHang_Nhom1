import "./ThucDon.css";
import Create from "./FoodCreate";
import Detail from "./FoodDetail";
import Edit from "./FoodEdit";
import React, { useState} from "react";
// import axios from 'axios';

function ThucDon(props) {
  const [id,setID]=useState();
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenDetail, setOpenDetail] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  var foods= props.props; 
  console.log(foods);
  const changeMoneyFormat =(number)=>{
    return(
    number.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }
    )
    )
  }
  const getID = (e) =>{
    console.log();
  }
  const displayFoods = (data) =>{
    return(
      Object.keys(data).map((item,i)=>{      
        return(
                    <tr>
                      <td>{foods[item].IDMon}</td>
                      <td>{foods[item].TenMon}</td>
                      <td>{foods[item].TenPhanLoai}</td>
                      <td>
                        <img
                          style={{ width: 70, height: 70 }}
                          alt="food"
                          src={foods[item].Image}
                        />
                      </td>
                      <td>{changeMoneyFormat(foods[item].GiaBan)}</td>
                      <td>
                        <button
                          className="btn-func"
                          onClick={() => {
                            setOpenEdit(true);

                          }}
                          style={{
                            outline: "none",
                            border: "none",
                            background: "none",
                          }}
                        >
                          <i className="fas fa-solid fa-pen-to-square" />
                          <span className="toolTip">Cập nhật</span>
                        </button>
                        |
                        <button
                          className="btn-func"
                          onClick={(e) => {
                            setOpenDetail(true);       
                            setID(foods[item].IDMon).then(console.log(id);)                    
                            
                          }}
                          style={{
                            outline: "none",
                            border: "none",
                            background: "none",
                          }}
                        >
                          <i className="fas fa-solid fa-info" />
                          <span className="toolTip">Chi tiết</span>
                        </button>
                        |
                        <button
                          className="btn-func"
                          style={{
                            outline: "none",
                            border: "none",
                            background: "none",
                          }}
                        >
                          <i className="fa-solid fa-trash" />
                          <span className="toolTip">Xoá</span>
                        </button>
                      </td>
                    </tr>
         
        )   
        
      })
    )
  };
  return (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
      <h2 style={{  marginLeft: "25px" }}>THỰC ĐƠN
      </h2>
        <button
          className="btn-create"
          onClick={() => {
            setOpenCreate(true);
          }}
          style={{ outline: "none", border: "none" }}
        >
          <i class="fa-solid fa-plus"></i>Tạo mới
        </button>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search search-form"
                  >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
      </div>

      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered table-menu"
                id="dataTable"
                width="100%"
                cellSpacing={0}
                style={{ textAlign: "center", lineHeight: 10 }}
              >
                <tbody className="list-result">
                  <tr>
                    <th>Mã Món</th>
                    <th>Tên Món</th>
                    <th>Phân Loại</th>
                    <th>Hình Ảnh</th>
                    <th>Giá Tiền</th>
                    <th className="btn-wrapper" />
                  </tr>
                
                  {displayFoods(foods)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Create open={isOpenCreate} close={() => setOpenCreate(false)}></Create>
        <Edit open={isOpenEdit} close={() => setOpenEdit(false)}></Edit>
        <Detail open={isOpenDetail} close={() => setOpenDetail(false)} props={id}></Detail>
      </div>
    </>
  );
}

export default ThucDon;
