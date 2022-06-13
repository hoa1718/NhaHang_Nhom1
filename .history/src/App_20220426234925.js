
import Sidebar from './components/Sidebar/Sidebar.js';
function App() {
  return (
    <div className="App"> 
    <Router>
      <Route path='/home' component={ Sidebar}></Route>
    </Router>
    </div>
  );
}

export default App;
