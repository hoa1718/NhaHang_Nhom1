
import Sidebar from './components/Sidebar/Sidebar.js';
function App() {
  return (
    <div className="App"> 
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'></div>
    </div> 
    </div>
  );
}

export default App;
