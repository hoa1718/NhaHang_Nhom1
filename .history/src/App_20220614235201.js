import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import { useCookies } from 'react-cookie';
function App() {
  const [cookie,setCookie]= useCookies();
  return (
    <div className="App"> 
    {}<Sidebar></Sidebar>
    </div>
    
  );
}

export default App;
