
import Sidebar from './components/Sidebar/Sidebar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
