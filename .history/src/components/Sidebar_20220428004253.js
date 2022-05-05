import ThanhToanPage from "../pages/ThanhToan";
import ThucDonPage from "../pages/ThucDon";
import HoaDonPage from "../pages/HoaDon";
import { Routes, Route,Link } from "react-router-dom";
function Sidebar(props) {
  // const toggleSidebar = () => {
  //   document.body.classList.toggle("sidebar-toggled");
  //   document.querySelector(".sidebar").classList.toggle("toggled");
  //   if (document.querySelector(".sidebar").classList.contains("toggled")) {
  //     document.querySelector(".sidebar .collapse").collapse("hide");
  //   }
  // };
  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href=" "
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-solid fa-bowl-food" />
          </div>
          <div className="sidebar-brand-text mx-3">Nhóm 1</div>
        </a>
        <li className="nav-item">
          <Link className="nav-link" to="/Thanhtoan">
            <i className="fas fa-solid fa-cash-register" />
            <span>Thanh toán</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Datban">
            <i className="fas fa-solid fa-calendar-days" />
            <span>Đặt bàn</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Thongke">
            <i className="fas fa-solid fa-chart-line" />
            <span>Thống kê</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Thucdon ">
            <i className="fas fa-solid fa-burger" />
            <span>Thực đơn</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Hoadon">
            <i className="fas fa-solid fa-file-lines" />
            <span>Hoá đơn</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=" "
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
            // onClick={toggleSidebar}
          >
            <i className="fas fa-solid fa-box" />
            <span>Kho</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Tonkho">
                Tồn kho
              </Link>
              <Link className="collapse-item" to="/Xuatkho">
                Xuất kho
              </Link>
              <Link className="collapse-item" to="/Nhapkho">
                Nhập kho
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            // onClick={toggleSidebar}
          />
        </div>
      </ul>
      <Routes>
        <Route path="/Thanhtoan" element={<ThanhToanPage />} ></Route>
        <Route path="/ThucDon" element={<ThucDonPage />} ></Route>
        <Route path="/ThucDon" element={<HoaDonPage />} ></Route>
    </Routes>
    </div>
    
  );
}

export default Sidebar;
