<div>
  import {'{'} useEffect, useState {'}'} from "react";
  import axiosInstance from "../../config/callApi";
  function Detail({'{'} open, close, id {'}'}) {'{'}
  const [chiTiet, setChiTiet] = useState({'{'}{'}'})
  useEffect(() =&gt; {'{'}
  if (open)
  if (id)
  fetchChiTietPhieuNhap(id)
  {'}'}, [open])
  async function fetchChiTietPhieuNhap(id) {'{'}
  try {'{'}
  const resp = await axiosInstance.get('/NhapKho/ChiTiet/' + id);
  console.log("Chi tiet phieu nhap", resp.data);
  setChiTiet(resp.data.result)
  {'}'} catch (err) {'{'}
  console.error(err);
  {'}'}
  {'}'}
  if (!open) return null;
  return (
  <div>
    <div classname="overlay">
      <div classname="form-create">
        <h2 style={{}} color: "white", background: "#4e73df", fontweight: "700" }}>
          Chi tiết
          <button onclick="{close}">X</button>
        </h2>
        <form method="put" action=" "><div classname="wrap-input">
            <p htmlfor="NgayNhap" classname="create-label">
              Ngày nhập *
            </p>
            <input defaultValue="{chiTiet.NgayNhap}" type="{&quot;date&quot;}" name="NgayNhap" classname="create-input" />
          </div>
          <div classname="wrap-input" id="Items">
            <p htmlfor="Items" classname="create-label" style={{}} fontsize: "20px" }}>
            </p></div>
        </form></div>
      )){'}'}
    </div>
    <input type="{'submit'}" classname="btn-confirm" defaultValue="{&quot;Xác" nhận"} />
  </div>
  );
  {'}'}
  export default Detail;
</div>
