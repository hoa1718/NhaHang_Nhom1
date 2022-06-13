import './sb-admin-2.min.css'
import Sidebar from './components/Sidebar.js';
import ThanhToanPage from "./pages/ThanhToan";
import ThucDonPage from "./pages/ThucDon";
import HoaDonPage from "./pages/HoaDon";
import ThongKePage from "./pages/ThongKe";
import DatBanPage from "./pages/DatBan";
import TonKhoPage from "./pages/TonKho";
import NhapPage from "./pages/Nhap";
import BanPage from "./pages/Ban";
import { BrowserRouter,Routes, Route,Router } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App"> 
    <Sidebar>
      </Sidebar>
    </div>
    
    </Router>
    
  
  );
}

export default App;
