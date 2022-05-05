function Nhap({ open, close }) {
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create" style={{height:"250px"}}>
          <h2
            style={{
              color: "white",
              background: "#4e73df",
              fontWeight: "700",
            }}
          >
            Thêm
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" ">
            <div className="wrap-input">
              <p htmlFor="SoLuongThem" className="create-label">
                Số lượng thêm *
              </p>
              <input
                type={"text"}
                name="SoLuongThem"
                className="create-input"
                placeholder="Hãy nhập số lương..."
              ></input>
            </div>
            <div className="wrap-input">
              <input type={"checkbox"}
            </div>
            <input type={"submit"} className="btn-confirm" value={"Xác nhận"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Nhap;
