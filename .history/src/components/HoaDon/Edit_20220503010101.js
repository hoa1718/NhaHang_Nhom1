
function Edit({ open, close }) {
    const addMonAn = () => {
      let MonAn = document.querySelector("#MonAn").cloneNode(true);
      document.getElementById("ThucDon").appendChild(MonAn);
    };
    if (!open) return null;
    return (
      <div>
        <div className="overlay">
          <div className="form-create">
            <h2
              style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
            >
              Cập nhật
              <button onClick={close}>X</button>
            </h2>
            <form method="put" action=" "><div className="wrap-input">
              <p htmlFor="KhachHang" className="create-label">
                Khách hàng *
              </p>
              <input
                type={"text"}
                name="TenMon"
                className="create-input"
                placeholder="Hãy nhập tên khách hàng..."
              ></input>
            </div>
            <div className="wrap-input">
              <p htmlFor="HinhThuc" className="create-label">
                Phân loại *
              </p>
              <select name="HinhThuc" className="create-input">
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
                style={{lineHeight:"20px !important"}}
                name="NgayLap"
                className="create-input"
                placeholder="Hãy nhập giá tiền..."
              ></input>
            </div>
            <div className="wrap-input">
              <p htmlFor="PhuongThuc" className="create-label">
                Phương thức thanh toán *
              </p>
              <select name="PhuongThuc" className="create-input">
                <option value={"cash"}>Trực tiếp</option>
                <option value={"card"}>Thanh toán bằng thẻ</option>
              </select>
            </div>
            <div className="wrap-input" id="ThucDon">
              <p
                className="create-label"
                style={{ fontSize: "20px" }}
              >
                Thực đơn
                <input type={'button'}  onClick={addMonAn} value={"+"} />
              </p>
              <div id="MonAn" style={{marginLeft:"-20px"}}>
                <div className="wrap-input">
                  <p htmlFor="MonAn" className="create-label">
                    Món ăn
                  </p>
                  <input
                    type={"text"}
                    name="MonAn"
                    className="create-input"
                    placeholder="Món ăn..."
                  ></input>
                </div>
                <div className="wrap-input">
                  <p htmlFor="SoLuong" className="create-label">
                    Số lượng
                  </p>
                  <input
                    type={"text"}
                    name="Số lượng"
                    className="create-input"
                    placeholder="Số lượng..."
                  ></input>
                </div>
              </div>
            </div>
            <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
          </div>
        </div>
      </div>
    );
  }
  
  export default Edit;
  