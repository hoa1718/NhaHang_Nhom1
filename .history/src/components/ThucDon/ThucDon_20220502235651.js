import "./ThucDon.css";
import Create from "./FoodCreate";
import Detail from "./FoodDetail";
import Edit from "./FoodEdit";
import React, { useState } from "react";
function ThucDon(props) {
  const [isOpen, setOpenCreate] = useState(false);
  const [isOpenDetail, setOpenDetail] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  return (
    <>
      <div style={{position:"relative",marginBottom:"20px"}}><h2 style={{display:"inline",marginLeft:"25px"}}>Thực đơn</h2>
      <button
              className="btn-create"
              onClick={() => {
                setOpenCreate(true)
              }}
              style={{outline:"none",border:"none"}}
            >
              <i class="fa-solid fa-plus"></i>Tạo mới
            </button></div>

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
                <tbody>
                  <tr>
                    <th>Mã Món</th>
                    <th>Tên Món</th>
                    <th>Phân Loại</th>
                    <th>Hình Ảnh</th>
                    <th>Giá Tiền</th>
                    <th className="btn-wrapper" />
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Gà rán</td>
                    <td>Món chính</td>
                    <td>
                      <img
                        style={{ width: 70, height: 70 }}
                        alt="food"
                        src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                      />
                    </td>
                    <td>20000</td>
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
                        onClick={() => {
                          setOpenDetail(true);
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Create open={isOpen} close={() => setOpenCre(false)}></Create>
        <Edit open={isOpenEdit} close={() => setOpenEdit(false)}></Edit>
        <Detail open={isOpenDetail} close={() => setOpenDetail(false)}></Detail>
      </div>
    </>
  );
}

export default ThucDon;
