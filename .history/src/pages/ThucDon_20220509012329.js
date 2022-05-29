import Topbar from "../components/Topbar";
import ThucDon from "../components/ThucDon/ThucDon.js";
const axios = require('axios');
function getFood(){
  return axios.get('http://localhost:4000/ThucDon/');
}
function App() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid ">
        <ThucDon props={()=>getFood()}></ThucDon>
      </div>   
    </div>
    </div> 
  );
}

export default App;
