
function Menu(props) {
  return (
    <div class="col-lg-7">
    <ul class="category">
        <li class="category-item"><a class="category-item-a" href="#">Món chính</a></li>
        <li class="category-item"><a class="category-item-a" href="#">Món phụ</a></li>
        <li class="category-item"><a class="category-item-a" href="#">Đồ uống</a></li>
    </ul>
<form action="/" class="" method="get">                <div class="input-group">
            <input type="text" class="form-control bg-light border-0 small" placeholder="Tìm kiếm..."
                   aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
            </div>
        </div>
</form>        <table class="foods">
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
        <tr>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
        </tr>
        <tr>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
            <td class="foods-item">
                <a href="#">
                    <img class="foods-item-img" src="/Image/kfc.jpg" />
                    <p class="foods-item-name">G&#224; r&#225;n</p>
                </a>
            </td>
        </tr>
</table>
</div>  
  );
}

export default Menu;
