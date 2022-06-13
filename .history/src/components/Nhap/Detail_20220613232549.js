import { useEffect, useState } from "react";
import axiosInstance from "../../config/callApi";

function Detail({ open, close, id }) {
  const [chiTiet, setChiTiet] = useState({})

  useEffect(() => {
    if (open)
      if (id)
        fetchChiTietPhieuNhap(id)
  }, [open])

  async function fetchChiTietPhieuNhap(id) {
    try {
      const resp = await axiosInstance.get('/NhapKho/ChiTiet/' + id);
      console.log("Chi tiet phieu nhap", resp.data);
      setChiTiet(resp.data.result)
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
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Chi tiết
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" "><div className="wrap-input">
            <p htmlFor="NgayNhap" className="create-label">
              Ngày nhập *
            </p>
            <input
              value={chiTiet.NgayNhap}
              type={"date"}
              name="NgayNhap"
              className="create-input"

            ></input>
          </div>
            <div className="wrap-input" id="Items">
              <p
                htmlFor="Items"
                className="create-label"
                style={{ fontSize: "20px" }}
              >
                  </div>

                </div>
              ))}

            </div>
            <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>
        </div>
      </div>
    </div>
  );
}

export default Detail;
