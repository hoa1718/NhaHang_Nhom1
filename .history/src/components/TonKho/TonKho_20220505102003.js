import Create from "./Create";
import Nhap from "./Nhap.js";
import Xoa from "./Xoa";
import React, { useState } from "react";
function TonKho(props) {
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenImport, setOpenImport] = useState(false);
  const [isOpenExport, setOpenExport] = useState(false);
  return (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h2 style={{ marginLeft: "25px" }}>Kho</h2>{" "}
        <button
          className="btn-create"
          onClick={() => {
            setOpenCreate(true);
          }}
          style={{ outline: "none", border: "none" }}
        >
         <i class="fa-solid fa-leaf"></i>Thêm nguyên liệu
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
                    <th>Mã nguyên liệu</th>
                    <th>Nguyên liệu</th>
                    <th>Đơn vị</th>
                    <th>Tồn kho</th>
                    <th>Giá nhập</th>
                    <th className="btn-wrapper" />
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Cải trắng</td>
                    <td>Kg</td>
                    <td>10</td>
                    <td>10000</td>
                    <td>
                      <button
                        className="btn-func"
                        onClick={() => {
                          
                        }}
                        style={{
                          outline: "none",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <i class="fas fa-solid fa-plus"></i>
                        <span className="toolTip">Cập nhật</span>
                      </button>
                      |
                      <button
                        className="btn-func"
                        onClick={() => {
                        }}
                        style={{
                          outline: "none",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <i class="fas fa-solid fa-minus"></i>
                        <span className="toolTip">Chi tiết</span>
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
      <Xoa open={isOpenExport} close={() => setOpenExport(false)}></Xoa>
      <Nhap open={isOpenImport} close={() => setOpenImport(false)}></Nhap>
    </>
  );
}

export default TonKho;
