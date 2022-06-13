import "./sb-admin-2.min.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
function App() {
  return (
    // <Router>
      <div className="App">
        <Sidebar></Sidebar>
        <Routes>
        <Route path="/ThanhToan" element={<ThanhToanPage />} ></Route>
        <Route path="/ThucDon" element={<ThucDonPage />} ></Route>
        <Route path="/HoaDon" element={<HoaDonPage />} ></Route>
        <Route path="/ThongKe" element={<ThongKePage />} ></Route>
        <Route path="/DatBan" element={<DatBanPage />} ></Route>
        <Route path="/TonKho" element={<TonKhoPage />} ></Route>
        <Route path="/NhapKho" element={<NhapPage />} ></Route>
        <Route path="/Ban/*" element={<BanPage />} ></Route>
        <Route path="/Ban/IDBan=:id" element={<ThanhToanPage />} ></Route>
    </Routes>
  
      </div>
    // </Router>
  );
}

export default App;
