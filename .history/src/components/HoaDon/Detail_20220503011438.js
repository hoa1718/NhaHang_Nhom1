function Detail({ open, close }) {
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
          <div className="wrap-input">
            <p htmlFor="TenMon" className="create-label">
              Tên món *
            </p>
            <input
              type={"text"}
              name="TenMon"
              className="create-input"
              placeholder="Hãy nhập tên món..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-label">
              Phân loại *
            </p>
            <select name="TenMon" className="create-input">
              <option value={1}>Món chính</option>
              <option value={2}>Món phụ</option>
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-label">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="GiaTien"
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-label">
              Giá bán *
            </p>
            <input
              type={"text"}
              name="Giá bán"
              className="create-input"
              placeholder="Hãy nhập giá bán..."
            ></input>
          </div>
          <div id="MonAn" style={{ marginLeft: "-20px" }}>
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
          </div>
          <input type={"submit"} className="btn-confirm" value={"Xác nhận"} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
