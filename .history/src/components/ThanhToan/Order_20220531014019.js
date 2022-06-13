import './ThanhToan.css'
import React, { useState,useEffect} from "react";
import axios from "axios";
function Order(props) {
  const [foodsChoose,setFoodsChoose]=useState(props.props);
  const changeMoneyFormat = (number) => {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
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
 const displayFoodsChoosen= (data) =>{
  return Object.keys(data).map((item, i) => {
    return (
      <li key={foodsChoose[item].IDMon}>
      <div className="order-item">
        <span className="item-number">1.</span>
        <span style={{width:"100px"}}>
          <span className="item-name">{foodsChoose[item].TenMon}</span>
          <p className="item-price">{foodsChoose[item].GiaBan}</p>
        </span>
        <span className="item-quantity">
          <button className="change-quantity" id="minus" onClick={e => Decrease(e)}>-</button>
          <input className="quantity" type="text" name="quantity" min={1} defaultValue={1} />
          <button className="change-quantity" id="plus" onClick={e => Increment(e)}>+</button>
        </span>
        <span className="item-total">40.000đ</span>
        <span> <button className="btn-clearfood">X</button></span>
      </div>
      </li>
    )})
 }
 useEffect(()=>{
   setFoodsChoose(props.props)
 })
  return (    
   <div className="col-lg-5">
  <div className="order-wrapper">
    <div className="desk">
      <a href=" ">Chọn bàn</a>
      <i className="fas fa-solid fa-angle-right" />
    </div>
    <hr />
    <div className="order">
    <ul>
      {displayFoodsChoosen(foodsChoose)}
    </ul>
      
      
    </div>
    <div className="purchase">
      <span>Thành tiền:</span>
      <span id="total">80.000đ</span>
      <div style={{display: 'flex'}}>
        <button className="btn-purchase" id="save">LƯU</button>
        <button className="btn-purchase" id="done">THANH TOÁN</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Order;
