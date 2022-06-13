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
  const deleteFood = (e,i) =>{ 
    props.props.splice(i,1);
    setFoodsChoose(props.props)
    const li = document.querySelectorAll(".order-li"); 
    li[i].remove();
  };
 const displayFoodsChoosen= (data) =>{
  return Object.keys(data).map((item, i) => {
    return (
      <>

      </>
      
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
