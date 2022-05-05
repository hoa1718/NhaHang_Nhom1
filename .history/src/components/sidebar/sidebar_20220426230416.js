import "/NhaHang/client/public";
function Sidebar(props){
    
    return (
        <div id="wrapper">
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="{}">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-solid fa-bowl-food"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Nhóm 1</div>
            </a>
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-solid fa-cash-register"></i>
                    <span>Thanh toán</span>
                </a>
            </li>

            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-solid fa-calendar-days"></i>
                    <span>Đặt bàn</span>
                </a>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-solid fa-chart-line"></i>
                    <span>Thống kê</span>
                </a>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link" href="{}">
                    <i className="fas fa-solid fa-burger"></i>
                    <span>Thực đơn</span>
                </a>
            </li>
            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-solid fa-file-lines"></i>
                    <span>Hoá đơn</span>
                </a>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link collapsed" href="{}" data-toggle="collapse" data-target="#collapsePages"
                   aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-solid fa-box"></i>
                    <span>Kho</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="login.html">Xuất kho</a>
                        <a className="collapse-item" href="register.html">Nhập kho</a>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            </ul>
            <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href=" "
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-search fa-fw"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
     </div>

    )
   }

export default Sidebar;