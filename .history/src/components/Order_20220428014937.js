import './ThanhToan.css'
function Order(props) {
  return (
    <div class="col-lg-5">
    <div class="order-wrapper">
        <div class="table">
            <a href="#">Chọn bàn</a>
            <i class="fas fa-solid fa-angle-right"></i>
        </div>
        <hr />
        <div class="order">
            <div class="order-item">
                <span class="item-number">1.</span>
                <span>
                    <span class="item-name">Gà rán</span>
                    <p class="item-price">20.000đ</p>
                </span>
                <span class="item-quantity">
                    <button class="change-quantity" id="minus">-</button>
                    <input class="quantity" type="text" name="quantity" min="1" value="1">
                    <button class="change-quantity" id="plus">+</button>
                </span>
                <span class="item-total">40.000đ</span>
                <span> <button class="btn-clearfood">X</button></span>
            </div>
            <div class="order-item">
                <span class="item-number">1.</span>
                <span>
                    <span class="item-name">Gà rán</span>
                    <p class="item-price">20.000đ</p>
                </span>
                <span class="item-quantity">
                    <button class="change-quantity" id="minus">-</button>
                    <input class="quantity" type="text" name="quantity" min="1" value="1">
                    <button class="change-quantity" id="plus">+</button>
                </span>
                <span class="item-total">40.000đ</span>
                <span> <button class="btn-clearfood">X</button></span>
            </div>

        </div>
        <div class="purchase">
            <span>Thành tiền:</span>
            <span id="total">80.000đ</span>
            <div style="display:flex">
                <button class="btn-purchase" id="save">LƯU</button>
                <button class="btn-purchase" id="done">THANH TOÁN</button>
            </div>
        </div>

    </div>
</div>
  );
}

export default Order;
