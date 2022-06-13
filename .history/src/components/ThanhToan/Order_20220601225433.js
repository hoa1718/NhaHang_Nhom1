import './ThanhToan.css'
import React, { useState,useEffect} from "react";
import axios from "axios";
function Order(props) {
  const [foodsChoose,setFoodsChoose]=useState(props.props);
  const [total,setTotal]=useState("0đ")
  const changeMoneyFormat = (number) => {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const Increment= (e,GiaBan) =>{
          let targetElem = e.target.previousElementSibling;  
          let total = e.target.parentElement.nextElementSibling;
          let number = Number(targetElem.value);
          targetElem.value = number + 1;
          total.innerText=changeMoneyFormat(Number(targetElem.value)*Number(GiaBan));
  };
  const Decrease = (e,GiaBan) =>{
    let targetElem = e.target.nextElementSibling;
    let total = e.target.parentElement.nextElementSibling;
    let number = Number(targetElem.value);
    if(number >1){
      targetElem.value = number - 1;
      total.innerText=changeMoneyFormat(Number(targetElem.value)*Number(GiaBan));
    }
};
  const changQuantity = (e,quantity,GiaBan) =>{
    let total = e.target.parentElement.nextElementSibling;
    total.innerText=changeMoneyFormat(quantity*Number(GiaBan));
  }
  const changeTotal = ()=>{
    const quantities= document.get
  }
  const deleteFood = (e,i) =>{ 
    props.props.splice(i,1);
    setFoodsChoose(props.props)
    const li = document.querySelectorAll(".order-li"); 
    li[i].remove();
  };
 const displayFoodsChoosen= (data) =>{
  return Object.keys(data).map((item, i) => {
    return (
    <li key={foodsChoose[item].IDMon} className="order-li">
      <div className="order-item">
        <span className="item-number">{i+1}.</span>
        <span style={{width:"100px"}}>
          <span className="item-name">{foodsChoose[item].TenMon}</span>
          <p className="item-price">{changeMoneyFormat(foodsChoose[item].GiaBan)}</p>
        </span>
        <span className="item-quantity">
          <button className="change-quantity" id="minus" onClick={e => Decrease(e,foodsChoose[item].GiaBan)}>-</button>
          <input onChange={e => changQuantity(e,e.target.value,foodsChoose[item].GiaBan)} className="quantity" type="text" name="quantity" min={1} defaultValue={1} />
          <button className="change-quantity" id="plus" onClick={e => Increment(e,foodsChoose[item].GiaBan)}>+</button>
        </span>
        <span className="item-total">{changeMoneyFormat(foodsChoose[item].GiaBan)}</span>
        <span> <button onClick={e=>deleteFood(e,i)} className="btn-clearfood">X</button></span>
      </div>
    </li>    
    )})
 }
 useEffect(()=>{
   setFoodsChoose(props.props);

 },[props.props])
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
      <span id="total">{total}</span>
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
