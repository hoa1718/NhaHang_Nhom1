
function FoodCreate({ open, close }) {
  const addNguyenLieu = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("Items").appendChild(NguyenLieu);
  };

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
            <p htmlFor="NgayNhap" className="create-label">
              Ngày nhập *
            </p>
            <input
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
              Nguyên liệu
              <input type={'button'}  onClick={addNguyenLieu} value={"+"} />
            </p>
            <div id="NguyenLieu" style={{marginLeft:"-20px"}}>
              <div className="wrap-input">
                <p htmlFor="NguyenLieu" className="create-label">
                  Nguyên liệu
                </p>
                <input
                  type={"text"}
                  name="NguyenLieu"
                  className="create-input"
                  placeholder="Nguyên liệu..."
                  style={{width:"250px"}}
                  list="suggest"
                ></input>
                  <datalist id="suggest">
                  <option value="Boston">
                  </option><option value="Cambridge">
                  </option></datalist>
              </div>
              <div className="wrap-input">
                <p htmlFor="SoLuong" className="create-label">
                  Số lượng
                </p>
                <input
                  type={"text"}
                  name="SoLuong"
                  className="create-input"
                  placeholder="Số lượng..."
                  style={{width:"200px"}}
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
                  style={{width:"200px"}}
                ></input>
              </div>
             <div>
 
</div>

            </div>
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default FoodCreate;
