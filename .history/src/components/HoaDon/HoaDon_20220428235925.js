import "./HoaDon.css";
import Modal from "../Modal/Modal";
import React, { useState } from "react";
function HoaDon(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <h2>Hoá đơn</h2>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-body">
            <button
              className="btn-create"
              onClick={() => {
                setOpen(true);
                console.log("Hello");
              }}
            >
              <i class="fa-solid fa-plus"></i>Tạo mới
            </button>
            <Modal open={is}
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
                    <th>Mã HĐ</th>
                    <th>Ngày lập</th>
                    <th>Trạng thái</th>
                    <th>Hình thức</th>
                    <th className="btn-wrapper" />
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Gà rán</td>
                    <td>Đã trả</td>
                    <td>Ở tiệm</td>
                    <td>
                      <a className="btn-func" href=" ">
                        <i className="fas fa-solid fa-pen-to-square" />
                        <span className="toolTip">Thay đổi</span>
                      </a>
                      |
                      <a className="btn-func" href=" ">
                        <i className="fas fa-solid fa-info" />
                        <span className="toolTip">Chi tiết</span>
                      </a>
                      |
                      <a className="btn-func" href=" ">
                        <i className="fa-solid fa-trash" />
                        <span className="toolTip">Xoá</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoaDon;
