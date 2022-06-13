<<<<<<< HEAD
function Detail({ open, close }) {
    if (!open) return null;
    return (
        <div>
        <div className="overlay">
          <div className="form-create">
            <h2
              style={{
                color: "white",
                background: "#4e73df",
                fontWeight: "700",
              }}
            >
              Chi tiết
              <button onClick={close}>X</button>
            </h2>
            <form method="put" action=" ">
              <div className="wrap-input">
                <p htmlFor="KhachHang" className="create-label" >
                  Khách hàng *
                </p>
                <input
                  type={"text"}
                  name="TenMon"
                  className="create-input"
                  placeholder="Hãy nhập tên khách hàng..."
                  disabled
                ></input>
              </div>
              <div className="wrap-input">
                <p htmlFor="HinhThuc" className="create-label">
                  Phân loại *
                </p>
                <select name="HinhThuc" className="create-input" disabled>
                  <option value={"ta"}>Đem về</option>
                  <option value={"stay"}>Ở tiệm</option>
                </select>
              </div>
              <div className="wrap-input">
                <p htmlFor="NgayLap" className="create-label">
                  Ngày lập *
                </p>
                <input
                  type={"date"}
                  style={{ lineHeight: "20px !important" }}
                  name="NgayLap"
                  className="create-input"
                  placeholder="Hãy nhập giá tiền..." disabled
                ></input>
              </div>
              <div className="wrap-input">
                <p htmlFor="PhuongThuc" className="create-label">
                  Phương thức thanh toán *
                </p>
                <select name="PhuongThuc" className="create-input" disabled>
                  <option value={"cash"}>Trực tiếp</option>
                  <option value={"card"}>Thanh toán bằng thẻ</option>
                </select>
              </div>
              <div className="wrap-input" id="ThucDon">
                <p className="create-label" style={{ fontSize: "20px" }}>
                  Thực đơn
                  
                </p>
=======
import { useEffect, useState } from "react";
import axiosInstance from "../../config/callApi";

function Detail({ open, close, data }) {
  const [hoaDon, setHoaDon] = useState([])


  useEffect(() => {
    setHoaDon([])
    if (open) {

      fetchChiTiet(data.IDHoaDon)
    }

  }, [open])

  async function fetchChiTiet(id) {
    try {
      const resp = await axiosInstance.get('/HoaDon/' + id);
      console.log(resp.data);
      setHoaDon(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }

  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{
              color: "white",
              background: "#4e73df",
              fontWeight: "700",
            }}
          >
            Chi tiết
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" ">
            <div className="wrap-input">
              <p htmlFor="KhachHang" className="create-label" >
                Khách hàng *
              </p>
              <input
                defaultValue={"NO NAME"}
                type={"text"}
                name="TenMon"
                className="create-input"
                placeholder="Hãy nhập tên khách hàng..."
                disabled
              ></input>
            </div>
            <div className="wrap-input">
              <p htmlFor="HinhThuc" className="create-label">
                Phân loại *
              </p>
              <select name="HinhThuc" className="create-input" value={data.IDBanAn ? 1 : 0} disabled>
                <option value={0}>Đem về</option>
                <option value={1}>Ở tiệm</option>
              </select>
            </div>
            <div className="wrap-input">
              <p htmlFor="NgayLap" className="create-label">
                Ngày lập *
              </p>
              <input
                value={data.NgayLapFormat}
                type={"date"}
                style={{ lineHeight: "20px !important" }}
                name="NgayLap"
                className="create-input"
                placeholder="Hãy nhập giá tiền..." disabled
              ></input>
            </div>
            <div className="wrap-input">
              <p htmlFor="PhuongThuc" className="create-label">
                Phương thức thanh toán *
              </p>
              <select name="PhuongThuc" className="create-input" value={1} disabled>
                <option value={1}>{data.PhuongThuc}</option>
              </select>
            </div>
            <div className="wrap-input" id="ThucDon">
              <p className="create-label" style={{ fontSize: "20px" }}>
                Thực đơn

              </p>

              {hoaDon.map(item => (
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
                <div id="MonAn" style={{ marginLeft: "-20px" }}>
                  <div className="wrap-input">
                    <p htmlFor="MonAn" className="create-label">
                      Món ăn
                    </p>
                    <input
<<<<<<< HEAD
=======
                      defaultValue={item.TenMon}
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
                      type={"text"}
                      name="MonAn"
                      className="create-input"
                      placeholder="Món ăn..."
                      disabled
                    ></input>
                  </div>
                  <div className="wrap-input">
                    <p htmlFor="SoLuong" className="create-label">
                      Số lượng
                    </p>
                    <input
<<<<<<< HEAD
=======
                      value={item.SoLuong}
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
                      type={"text"}
                      name="Số lượng"
                      className="create-input"
                      placeholder="Số lượng..." disabled
                    ></input>
                  </div>
                </div>
<<<<<<< HEAD
              </div>
              <input type={"submit"} className="btn-confirm" value={"Xác nhận"} />
            </form>
          </div>
        </div>
      </div>
    );
=======
              ))}

            </div>
            <input type={"submit"} className="btn-confirm" value={"Xác nhận"} />
          </form>
        </div>
      </div>
    </div>
  );
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
}

export default Detail;
