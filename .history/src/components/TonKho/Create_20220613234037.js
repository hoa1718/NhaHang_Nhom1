
function Create({ open, close }) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create" style={{height:"320px"}}>
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
              placeholder="Hãy nhập đơn giá..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="SoLuongTon" className="create-label">
              Số người
            </p>
            <input
              type={"text"}
              name="SoLuongTon"
              className="create-input"
              placeholder="Hãy nhập số lượng..."
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="DonVi" className="create-label">
              Đơn vị *
            </p>
            <select name="DonVi" className="create-input" >
                  <option value={1}>Kg</option>
                  <option value={2}>Bình</option>
                </select>
          </div>
         
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default Create;
