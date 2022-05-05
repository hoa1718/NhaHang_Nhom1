import Topbar from "../components/Topbar";
import Nhap from "../components/Nhap/Nhap";
function App() {
  return (

    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
        <ThongKe></ThongKe>
      </div>   
    </div>
    </div> 
  );
}

export default App;