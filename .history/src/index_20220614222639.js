import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from './App';
import Login from './Login'
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar.js';
import ThanhToanPage from "./pages/ThanhToan";
import ThucDonPage from "./pages/ThucDon";
import HoaDonPage from "./pages/HoaDon";
import ThongKePage from "./pages/ThongKe";
import DatBanPage from "./pages/DatBan";
import TonKhoPage from "./pages/TonKho";
import NhapPage from "./pages/Nhap";
import BanPage from "./pages/Ban";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} ></Route>
      <Route path="/Login" element={<Login />} ></Route>
    </Routes>
    <App></App>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
