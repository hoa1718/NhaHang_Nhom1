import {use} from "react";

function Sidebar(props) {

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
          <a className="nav-link" href="charts.html">
            <i className="fas fa-solid fa-cash-register" />
            <span>Thanh toán</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-solid fa-calendar-days" />
            <span>Đặt bàn</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-solid fa-chart-line" />
            <span>Thống kê</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href=" ">
            <i className="fas fa-solid fa-burger" />
            <span>Thực đơn</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-solid fa-file-lines" />
            <span>Hoá đơn</span>
          </a>
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
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
