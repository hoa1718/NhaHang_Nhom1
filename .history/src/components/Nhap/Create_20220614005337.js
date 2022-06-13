<<<<<<< HEAD

function FoodCreate({ open, close }) {
  const addNguyenLieu = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("Items").appendChild(NguyenLieu);
  };
=======
import { useEffect, useState } from "react"
import axiosInstance from "../../config/callApi"

function FoodCreate({ open, close }) {

  const [nguyenLieu, setNguyenLieu] = useState([])
  const [inputList, setInputList] = useState([])

  useEffect(() => {
    if (open) {


      fetchNguyenLieu()

    }

  }, [open])


  const addNguyenLieu = () => {
    console.log("Add nguyen lieu", inputList)
    setInputList(inputList.concat(<NguyenLieu xuLyXoa={xuLyXoa} nguyenLieu={nguyenLieu} />))
  }

  const xuLyXoa = (e) => {
    e.preventDefault();
    const list = document.querySelectorAll('#NguyenLieu')
    if (list.length == 1) return
    e.target.parentNode.parentNode.remove()
  }

  async function fetchNguyenLieu() {
    try {
      const resp = await axiosInstance.get('/TonKho/NguyenLieu');
      console.log(resp.data);
      setNguyenLieu(resp.data.result)
    } catch (err) {
      console.error(err);
    }
  }


  const themPhieuNhap = (e) => {
    e.preventDefault()
    const list = document.querySelectorAll('#NguyenLieu')
    const NgayNhap = document.querySelector('.NgayNhap').value

    const date = new Date(NgayNhap)

    const dataNguyenLieu = []

    list.forEach(item => {
      dataNguyenLieu.push({
        IDNguyenLieu: item.querySelector('.IDNguyenLieu').value,
        SoLuong: item.querySelector('.SoLuong').value,
        GiaNhap: item.querySelector('.GiaNhap').value,
      })
    })

    const data = {
      NgayNhap: (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear(),
      dataNguyenLieu,
    }

    fetchThemPhieuNhap(data)

  }

  async function fetchThemPhieuNhap(data) {
    try {
      const resp = await axiosInstance.post('/NhapKho/', { data });
      console.log(resp.data);
      if (resp.data.ok)
        close()
    } catch (err) {
      console.error(err);
    }
  }
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08

  if (!open) return null;
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Tạo mới
<<<<<<< HEAD
            <button onClick={close}>X</button>
          </h2>
          <form method="put" action=" "><div className="wrap-input">
=======
            <button onClick={() => { setInputList([]); close(); }}>X</button>
          </h2>
          <form method="put" action=" " onSubmit={(e) => themPhieuNhap(e)}><div className="wrap-input">
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
            <p htmlFor="NgayNhap" className="create-label">
              Ngày nhập *
            </p>
            <input
              type={"date"}
              name="NgayNhap"
<<<<<<< HEAD
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
                <p htmlFor="GiaNhap" className="create-label">
                  Giá nhập
                </p>
                <input
                  type={"text"}
                  name="GiaNhap"
                  className="create-input"
                  placeholder="Giá nhập..."
                  style={{width:"200px"}}
                ></input>
              </div>
             <div>
 
</div>

            </div>
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
=======
              className="create-input NgayNhap"

            ></input>
          </div>
            <div className="wrap-input" id="Items">
              <p
                htmlFor="Items"
                className="create-label"
                style={{ fontSize: "20px" }}
              >
                Nguyên liệu
                <input type={'button'} onClick={addNguyenLieu} value={"+"} />
              </p>

              {inputList}
            </div>
            <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>
>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======
function NguyenLieu({ nguyenLieu, xuLyXoa }) {

  return (<div id="NguyenLieu" style={{ marginLeft: "-20px" }}>
    <div className="wrap-input">
      <p htmlFor="NguyenLieu" className="create-label">
        Nguyên liệu
      </p>
      <select

        className="create-input IDNguyenLieu"

        style={{ width: "250px" }}
      >
        {nguyenLieu.map(item => (
          <option key={item.IDNguyenLieu} value={item.IDNguyenLieu}>{item.TenNguyenLieu}</option>
        ))}

      </select>

    </div>
    <div className="wrap-input">
      <p htmlFor="SoLuong" className="create-label">
        Số lượng
      </p>
      <input
        type={"text"}
        name="SoLuong"
        className="create-input SoLuong"
        placeholder="Số lượng..."
        style={{ width: "200px" }}
      ></input>
    </div>
    <div className="wrap-input">
      <p htmlFor="GiaNhap" className="create-label">
        Giá nhập
      </p>
      <input
        type={"text"}
        name="GiaNhap"
        className="create-input GiaNhap"
        placeholder="Giá nhập..."
        style={{ width: "200px" }}
      ></input>
    </div>
    <div className="wrap-input">
      <button onClick={(e) => xuLyXoa(e)}>X</button>
    </div>
    <div>

    </div>

  </div>)
}

>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
export default FoodCreate;
