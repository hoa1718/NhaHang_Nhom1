import Edit from "./Edit";
import Create from "./Create";
import React, { useState } from "react";
function HoaDon(props) {
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  return (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2 style={{ marginLeft: "25px" }}>ĐẶT BÀN</h2><button
          className="btn-create"
          onClick={() => {
            setOpenCreate(true);
          }}
          style={{ outline: "none", border: "none" }}
        >
          <i class="fa-solid fa-plus"></i>Tạo mới
        </button>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search search-form">
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
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search search-form">
          <div className="input-group">
            <input
              type="date"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              p;
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
                    <th>Tên người đặt</th>
                    <th>Ngày đặt</th>
                    <th>Khung giờ</th>
                    <th>Số người</th>
                    <th className="btn-wrapper" />
                  </tr>
                  <tr className="result">
                    <td>Nguyễn Văn A</td>
                    <td>17/6/2021</td>
                    <td>18:00</td>
                    <td>4</td>
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
      </div>
      <Create open={isOpenCreate} close={() => setOpenCreate(false)}></Create>
      <Edit open={isOpenEdit} close={() => setOpenEdit(false)}></Edit>
    </>
  );
}

export default HoaDon;
