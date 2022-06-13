<<<<<<< HEAD
function Nhap({ open, close }) {
=======
import { useForm } from "react-hook-form";
import axiosInstance from "../../config/callApi";

function Nhap({ open, close, id }) {
  const { handleSubmit, register } = useForm()

  const onSubmit = data => {
    console.log(data)
    const finalData = {
      SoLuong: data.SoLuongThem,
      IDNguyenLieu: id
    }
    addNguyenLieu(finalData, data.ChangeAll)
  }

  async function addNguyenLieu(data, changeAll) {
    try {
      let uri = "Them"
      if (changeAll) {
        uri = "Thay"
      }
      const resp = await axiosInstance.put('/TonKho/NguyenLieu/' + uri, { ...data })
      console.log(resp.data);
      if (resp.data.ok)
        close()
      // setDvt(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }

>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
  if (!open) return null;
  return (
    <div>
      <div className="overlay">
<<<<<<< HEAD
        <div className="form-create" style={{height:"250px"}}>
=======
        <div className="form-create" style={{ height: "250px" }}>
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
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
<<<<<<< HEAD
          <form method="put" action=" ">
=======
          <form method="put" action=" " onSubmit={handleSubmit(onSubmit)}>
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
            <div className="wrap-input">
              <p htmlFor="SoLuongThem" className="create-label">
                Số lượng thêm *
              </p>
              <input
                type={"text"}
<<<<<<< HEAD
=======
                {...register('SoLuongThem')}
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
                name="SoLuongThem"
                className="create-input"
                placeholder="Hãy nhập số lượng..."
              ></input>
            </div>
            <div className="wrap-input">
<<<<<<< HEAD
              <input name="ChangeAll" type={"checkbox"} ></input>
              <label htmlFor="ChangeAll" style={{marginLeft:"10px"}}>Thay đổi tổng số lượng</label>
=======
              <input name="ChangeAll" type={"checkbox"} {...register('ChangeAll')}></input>
              <label htmlFor="ChangeAll" style={{ marginLeft: "10px" }}>Thay đổi tổng số lượng</label>
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
            </div>
            <input type={"submit"} className="btn-confirm" value={"Xác nhận"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Nhap;
