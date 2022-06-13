import Topbar from "../components/Topbar";
import Nhap from "../components/Nhap/Nhap";
import Sidebar from "../components/Sidebar"
function App() {
  return (
    <s
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
        <Nhap></Nhap>
      </div>   
    </div>
    </div> 
  );
}

export default App;