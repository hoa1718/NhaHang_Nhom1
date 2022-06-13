function Sidebar(props){
    
    return (
        <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-solid fa-bowl-food"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Nhóm 1</div>
            </a>
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-solid fa-cash-register"></i>
                    <span>Thanh toán</span>
                </a>
            </li>

            <hr class="sidebar-divider my-0" />
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-solid fa-calendar-days"></i>
                    <span>Đặt bàn</span>
                </a>
            </li>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-solid fa-chart-line"></i>
                    <span>Thống kê</span>
                </a>
            </li>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-solid fa-burger"></i>
                    <span>Thực đơn</span>
                </a>
            </li>
            <hr class="sidebar-divider my-0">

            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-solid fa-file-lines"></i>
                    <span>Hoá đơn</span>
                </a>
            </li>
            <hr class="sidebar-divider my-0" />
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                   aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-solid fa-box"></i>
                    <span>Kho</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="login.html">Xuất kho</a>
                        <a class="collapse-item" href="register.html">Nhập kho</a>
                    </div>
                </div>
            </li>

            <hr class="sidebar-divider d-none d-md-block">
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        </div>
    )
    
    
   }

export default Sidebar;