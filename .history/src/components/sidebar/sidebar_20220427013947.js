import ThanhToanPage from "../../pages/ThanhToan";
import ThucDonPage from "../../pages/ThucDon";
import { Routes, Route,Link } from "react-router-dom";
function Sidebar(props) {
  const toggleSidebar = () => {
    document.body.classList.toggle("sidebar-toggled");
    document.querySelector(".sidebar").classList.toggle("toggled");
    if (document.querySelector(".sidebar").classList.contains("toggled")) {
      document.querySelector(".sidebar .collapse").collapse("hide");
    }
  };
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
          <Link className="nav-link" href="charts.html">
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
              <a className="collapse-item" href="login.html">
                Tồn kho
              </a>
              <a className="collapse-item" href="login.html">
                Xuất kho
              </a>
              <a className="collapse-item" href="register.html">
                Nhập kho
              </a>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={toggleSidebar}
          />
        </div>
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Alerts */}

              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href=" "
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Douglas McGee
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src=" "
                    alt="hinh"
                  />
                </a>
                {/* Dropdown - User Information */}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href=" ">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </a>
                  <a className="dropdown-item" href=" ">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                  </a>
                  <a className="dropdown-item" href=" ">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href=" "
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          {/* End of Topbar */}
        </div>
      </div>
      <Routes>
        <Route path="/Thanhtoan" element={<ThanhToanPage />} ></Route>
        <Route path="/ThucDon" element={<ThucDonPage />} ></Route>
    </Routes>
    </div>
    
  );
}

export default Sidebar;
