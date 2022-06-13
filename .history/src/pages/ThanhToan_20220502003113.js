import Topbar from "../components/Topbar";
import Menu from "../components/ThanhToan/Menu";
import Order from "../components/Order";
function App() {
  return (

    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
      <div className="row">
        <Menu></Menu>
        <Order></Order>
      </div>
      </div>   
    </div>
    </div> 
  );
}

export default App;
