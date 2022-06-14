import Create from "./Create.js";
import Nhap from "./Nhap.js";
import Xoa from "./Xoa.js";
import axiosInstance from "../../config/callApi.js";
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
function TonKho(props) {
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenImport, setOpenImport] = useState(false);
  const [isOpenExport, setOpenExport] = useState(false);
  const [dsNguyenLieu, setDsNguyenLieu] = useState([]);
  const [idCurrent, setIDCurrent] = useState();
  const [tenNguyenLieu, setTenNguyenLieu] = useState();
  const [cookie,setCookie]= useCookies();
  useEffect(() => {
    fetchNguyenLieu(tenNguyenLieu)

  }, [tenNguyenLieu])

  async function fetchNguyenLieu(tenNguyenLieu) {
    try {
      let query =''
      if(tenNguyenLieu)
        query = '?TenNguyenLieu='+tenNguyenLieu
      const resp = await axiosInstance.get('/TonKho/NguyenLieu'+query);
      console.log(resp.data);
      setDsNguyenLieu(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    {cookie.role=="admin" ? <div>
  <div style={{}} position: "relative", marginbottom: "20px" }}>
    <h2 style={{}} marginleft: "25px" }}>Kho</h2>{'{'}" "{'}'}
    <button classname="btn-create" onclick="{()" => {'{'}
      setOpenCreate(true);
      {'}'}{'}'}
      style={'{'}{'{'} outline: "none", border: "none" {'}'}{'}'}
      &gt;
      <i className="fa-solid fa-leaf" />Thêm nguyên liệu
    </button>
    <form classname="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search search-form">
      <div classname="input-group">
        <input type="{&quot;text&quot;}" classname="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" defaultValue="{tenNguyenLieu}" onchange="{(e)=" />setTenNguyenLieu(e.target.value){'}'}
        /&gt;
        <div classname="input-group-append">
          <button classname="btn btn-primary" type="button">
            <i classname="fas fa-search fa-sm">
            </i></button><i classname="fas fa-search fa-sm">
          </i></div><i classname="fas fa-search fa-sm">
        </i></div><i classname="fas fa-search fa-sm">
      </i></form></div><i classname="fas fa-search fa-sm">
    <div classname="container-fluid">
      <div classname="card shadow mb-4">
        <div classname="card-body">
          <div classname="table-responsive">
            {'{'}/* --------------------------- */{'}'}
            {'{'}dsNguyenLieu.map(item =&gt; (
            )){'}'}
            <table 10 classname="table table-bordered table-menu" id="dataTable" width="100%" cellSpacing="{0}" style={{}} textalign: "center", lineheight: }}>
              <tbody classname="list-result">
                <tr>
                  <th>Mã nguyên liệu</th>
                  <th>Nguyên liệu</th>
                  <th>Đơn vị</th>
                  <th>Tồn kho</th>
                  <th>Giá nhập</th>
                  <th classname="btn-wrapper">
                  </th></tr><tr key="{item.IDNguyenLieu}">
                  <td>{'{'}item.IDNguyenLieu{'}'}</td>
                  <td>{'{'}item.TenNguyenLieu{'}'}</td>
                  <td>{'{'}item.DonViTinh{'}'}</td>
                  <td>{'{'}item.SoLuongTon{'}'}</td>
                  <td>{'{'}item.DonGia{'}'}</td>
                  <td>
                    <button classname="btn-func" onclick="{()" => {'{'}
                      setIDCurrent(item.IDNguyenLieu)
                      setOpenImport(true)
                      {'}'}{'}'}
                      style={'{'}{'{'}
                      outline: "none",
                      border: "none",
                      background: "none",
                      {'}'}{'}'}
                      &gt;
                      <i className="fas fa-solid fa-plus" />
                      <span classname="toolTip">Thêm</span>
                    </button>
                    |
                    <button classname="btn-func" onclick="{()" => {'{'}
                      setOpenExport(true)
                      {'}'}{'}'}
                      style={'{'}{'{'}
                      outline: "none",
                      border: "none",
                      background: "none",
                      {'}'}{'}'}
                      &gt;
                      <i className="fas fa-solid fa-minus" />
                      <span classname="toolTip">Chi tiết</span>
                    </button>
                  </td>
                </tr></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <create open="{isOpenCreate}" close="{()" => {'{'} setOpenCreate(false); fetchNguyenLieu() {'}'}{'}'}&gt;</create>
    <xoa id="{idCurrent}" open="{isOpenExport}" close="{()" => setOpenExport(false){'}'}&gt;</xoa>
    <nhap id="{idCurrent}" open="{isOpenImport}" close="{()" => {'{'} setOpenImport(false); fetchNguyenLieu() {'}'}{'}'}&gt;</nhap>:<h1>Bạn không có quyền truy cập</h1>{'}'}
  </i></div>

    </>
  );
}

export default TonKho;
