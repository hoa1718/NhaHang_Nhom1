import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
function App() {
  const [cookie,setCookie]= useCookies();
  return (
    <div className="App"> 
    {cookie ?<Sidebar></Sidebar> : <Redirect to="/dashboard" />}
    </div>
    
  );
}

export default App;
