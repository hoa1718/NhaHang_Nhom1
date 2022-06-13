import Topbar from "../components/Topbar";
import Ban from "../components/Ban/Ban.js";
function App() {
  return (
      
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
        <Ban></Ban>
      </div>   
    </div>
    </div> 
  );
}

export default App;