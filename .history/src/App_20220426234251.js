
import Sidebar from './components/sidebar/sidebar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
    <Router>
      <Route path='/' component={ Sidebar}></Route>
    </Router>
    </div>
  );
}

export default App;
