
import Login from "../components/Login/Login.js";
function App() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid ">
        <Login></Login>
      </div>   
    </div>
    </div> 
  );
}

export default App;