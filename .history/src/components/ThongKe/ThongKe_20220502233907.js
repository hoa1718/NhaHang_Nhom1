import "./ThongKe.css";

function ThongKe(props) {
  
  return (
    <div style={{position:"relative",marginBottom:"20px"}}><h2 style={{display:"inline",marginLeft:"25px"}}>Thực đơn</h2>
    <button
            className="btn-create"
            onClick={() => {
              console.log("Hello");
            }}
            style={{outline:"none",border:"none"}}
          >
            <i class="fa-solid fa-plus"></i>Tạo mới
          </button></div>
  );
}

export default ThongKe;
