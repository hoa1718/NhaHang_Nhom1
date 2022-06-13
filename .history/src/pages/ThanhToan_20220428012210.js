import Topbar from "../components/Topbar";
import Content from "../components/Menu";
function App() {
  return (

    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
        <Content></Content>
      </div>   
    </div>
    </div> 
  );
}

export default App;
