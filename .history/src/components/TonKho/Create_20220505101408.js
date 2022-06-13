
function Create({ open, close }) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Tạo nguyên liệu
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" ">
          <div className="wrap-input">
            <p htmlFor="TenNguyenLieu" className="create-label">
              Tên nguyên liệu *
            </p>
            <input
              type={"text"}
              name="TenNguyenLieu"
              className="create-input"
              placeholder="Hãy nhập tên nguyên liệu..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="DonGia" className="create-label">
              Đơn giá *
            </p>
            <input
              type={"text"}
              name="DonGia"
              className="create-input"
              placeholder="Hãy nhập tên người đặt..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="NgayDat" className="create-label">
              Ngày đặt *
            </p>
            <select name="PhuongThuc" className="create-input" disabled>
                  <option value={"cash"}>Trực tiếp</option>
                  <option value={"card"}>Thanh toán bằng thẻ</option>
                </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="KhungGio" className="create-label">
              Khung giờ *
            </p>
            <input
              type={"time"}
              name="KhungGio"
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="SoNguoi" className="create-label">
              Số người
            </p>
            <input
              type={"text"}
              name="SoNguoi"
              className="create-input"
              placeholder="Hãy nhập số người..."
            ></input>
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default Create;
