import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import { useCookies } from 'react-cookie';
import { useNavigate} from "react-router-dom";
function App() {
  const [cookie,setCookie]= useCookies();
  if(cookie ==={}){
    
  }
  return (
    <div className="App"> 
    <Sidebar></Sidebar> 
    </div>
    
  );
}

export default App;
