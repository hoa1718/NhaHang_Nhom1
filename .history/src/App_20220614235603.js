import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
function App() {
  const [cookie,setCookie]= useCookies();
  console.log(cookie);
  return (
    <div className="App"> 
    {cookie ? <Sidebar></Sidebar> : <Navigate to="/Login" />}
    </div>
    
  );
}

export default App;
