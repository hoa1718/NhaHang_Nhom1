import './ThanhToan.css'
function Order(props) {
  const Increment= (e) =>{
          let targetElem = e.target.previousElementSibling;    
          let number = Number(targetElem.value);
          targetElem.value = number + 1;
  };
  const Decrease = (e) =>{
    let targetElem = e.target.nextElementSibling;
    let number = Number(targetElem.value);
    if(number >1){
      targetElem.value = number - 1;
    }
};
  return (    
  <div>
  <div classname="col-lg-5">
    <div classname="order-wrapper">
      <div classname="desk">
        <a href=" ">Chọn bàn</a>
        <i classname="fas fa-solid fa-angle-right">
        </i></div><i classname="fas fa-solid fa-angle-right">
        <hr />
        <div classname="order">
          <ul>
            <li key="{1}">
              <div classname="order-item">
                <span classname="item-number">1.</span>
                <span>
                  <span classname="item-name">Gà rán</span>
                  <p classname="item-price">20.000đ</p>
                </span>
                <span classname="item-quantity">
                  <button classname="change-quantity" id="minus" onclick="{e" => Decrease(e){'}'}&gt;-</button>
                  <input classname="quantity" type="text" name="quantity" min="{1}" defaultvalue="{1}" />
                  <button classname="change-quantity" id="plus" onclick="{e" => Increment(e){'}'}&gt;+</button>
                </span>
                <span classname="item-total">40.000đ</span>
                <span> <button classname="btn-clearfood">X</button></span>
              </div>
            </li>
            <li key="{2}">
              <div classname="order-item">
                <span classname="item-number">1.</span>
                <span>
                  <span classname="item-name">Gà rán</span>
                  <p classname="item-price">20.000đ</p>
                </span>
                <span classname="item-quantity">
                  <button classname="change-quantity" id="minus" onclick="{e" => Decrease(e){'}'}&gt;-</button>
                  <input classname="quantity" type="text" name="quantity" min="{1}" defaultvalue="{1}" />
                  <button classname="change-quantity" id="plus" onclick="{e" => Increment(e){'}'}&gt;+</button>
                </span>
                <span classname="item-total">40.000đ</span>
                <span> <button classname="btn-clearfood">X</button></span>
              </div></li>
          </ul>
        </div>
        <div classname="purchase">
          <span>Thành tiền:</span>
          <span id="total">80.000đ</span>
          <div style={{{{display: ''}} 'flex'}}>
            <button classname="btn-purchase" id="save">LƯU</button>
            <button classname="btn-purchase" id="done">THANH TOÁN</button>
          </div>
        </div>
      </i></div><i classname="fas fa-solid fa-angle-right">
    </i></div><i classname="fas fa-solid fa-angle-right">
    <order />
  </i></div>

  );
}

export default Order;
