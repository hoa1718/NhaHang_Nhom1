
function Create({ open, close }) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Tạo mới
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" "><div className="wrap-input">
            <p htmlFor="TenNguoiDat" className="create-label">
              Tên người đặt *
            </p>
            <input
              type={"text"}
              name="TenNguoiDat"
              className="create-input"
              placeholder="Hãy nhập tên người đặt..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="NgayDat" className="create-label">
              Ngày đặt *
            </p>
            <input
              type={"date"}
              name="NgayDat"
              className="create-input"
            ></input>
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
              placeholder="Hãy nhập giá bán..."
            ></input>
          </div>
          <div className="wrap-input" style={{ margin: "10px 0" }}>
            <span htmlFor="Image" className="create-label">
              Hình ảnh *
            </span>
            <input type={"file"} name="Image" className="create-input"></input>
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default Create;
