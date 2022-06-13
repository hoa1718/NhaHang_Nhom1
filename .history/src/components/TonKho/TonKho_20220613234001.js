import Create from "./Create.js";
import Nhap from "./Nhap.js";
import Xoa from "./Xoa.js";
import React, { useState } from "react";
function TonKho(props) {
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenImport, setOpenImport] = useState(false);
  const [isOpenExport, setOpenExport] = useState(false);
<<<<<<< HEAD
=======
  const [dsNguyenLieu, setDsNguyenLieu] = useState([]);
  const [idCurrent, setIDCurrent] = useState();
  const [tenNguyenLieu, setTenNguyenLieu] = useState()



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

>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
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
<<<<<<< HEAD
         <i class="fa-solid fa-leaf"></i>Thêm nguyên liệu
=======
          <i class="fa-solid fa-leaf"></i>Thêm nguyên liệu
>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
        </button>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search search-form">
          <div className="input-group">
            <input
<<<<<<< HEAD
              type="text"
=======
              type={"text"}
>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
<<<<<<< HEAD
=======
              value={tenNguyenLieu}
              onChange={(e)=>setTenNguyenLieu(e.target.value)}
>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
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
<<<<<<< HEAD
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
                          setOpenImport(true)
                        }}
                        style={{
                          outline: "none",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <i class="fas fa-solid fa-plus"></i>
                        <span className="toolTip">Thêm</span>
                      </button>
                      |
                      <button
                        className="btn-func"
                        onClick={() => {
                          setOpenExport(true)
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
=======
                  {/* --------------------------- */}
                  {dsNguyenLieu.map(item => (
                    <tr key={item.IDNguyenLieu}>
                      <td>{item.IDNguyenLieu}</td>
                      <td>{item.TenNguyenLieu}</td>
                      <td>{item.DonViTinh}</td>
                      <td>{item.SoLuongTon}</td>
                      <td>{item.DonGia}</td>
                      <td>
                        <button
                          className="btn-func"
                          onClick={() => {
                            setIDCurrent(item.IDNguyenLieu)
                            setOpenImport(true)
                          }}
                          style={{
                            outline: "none",
                            border: "none",
                            background: "none",
                          }}
                        >
                          <i class="fas fa-solid fa-plus"></i>
                          <span className="toolTip">Thêm</span>
                        </button>
                        |
                        <button
                          className="btn-func"
                          onClick={() => {
                            setOpenExport(true)
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
                  ))}

>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Create open={isOpenCreate} close={() => setOpenCreate(false)}></Create>
      <Xoa open={isOpenExport} close={() => setOpenExport(false)}></Xoa>
      <Nhap open={isOpenImport} close={() => setOpenImport(false)}></Nhap>
=======
      <Create open={isOpenCreate} close={() => { setOpenCreate(false); fetchNguyenLieu() }}></Create>
      <Xoa id={idCurrent} open={isOpenExport} close={() => setOpenExport(false)}></Xoa>
      <Nhap id={idCurrent} open={isOpenImport} close={() => { setOpenImport(false); fetchNguyenLieu() }}></Nhap>
>>>>>>> 1e30453ac38da03c3201dcd43b66c2153fddc2f2
    </>
  );
}

export default TonKho;
