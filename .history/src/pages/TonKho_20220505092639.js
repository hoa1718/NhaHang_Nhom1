import Topbar from "../components/Topbar";
import ThucDon from "../components/ThucDon/ThucDon.js";
function App() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid ">
        <ThucDon></ThucDon>
      </div>   
    </div>
    </div> 
  );
}

export default App;
