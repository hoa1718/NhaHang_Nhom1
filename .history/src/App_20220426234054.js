
import Sidebar from './components/sidebar/sidebar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
    <Router>
      <Route></Route>
    </Router>
        <Sidebar></Sidebar>
    </div>
  );
}

export default App;
