import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import { useCookies } from 'react-cookie';
import { useNavigate} from "react-router-dom";
function App() {
  const [cookie,setCookie]= useCookies();
  let navigate = useNavigate();
  if(cookie ==={}){
    return navigate("/Login");
  }
  return (
    <div className="App"> 
    <Sidebar></Sidebar> 
    </div>
    
  );
}

export default App;
