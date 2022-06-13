import "./ThanhToan.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Order({props,changeTotal}) {
  const sumMoney = ()=>{
    changeTotal();
  }
  const [foodsChoose, setFoodsChoose] = useState(props[0]);
  const [total, setTotal] = useState(props[1]);
  const changeMoneyFormat = (number) => {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const Increment = (e, GiaBan, i) => {
    let targetElem = e.target.previousElementSibling;
    let total = e.target.parentElement.nextElementSibling;
    let number = Number(targetElem.value);
    targetElem.value = number + 1;
    props[0][i].quantity += 1;
    total.innerText = changeMoneyFormat(
      Number(targetElem.value) * Number(GiaBan)
    );
    console.log(props[0]);
  };
  const Decrease = (e, GiaBan, i) => {
    let targetElem = e.target.nextElementSibling;
    let total = e.target.parentElement.nextElementSibling;
    let number = Number(targetElem.value);
    if (number > 1) {
      targetElem.value = number - 1;
      props[0][i].quantity -= 1;
      total.innerText = changeMoneyFormat(
        Number(targetElem.value) * Number(GiaBan)
      );
    }
  };
  const changQuantity = (e,i, quantity, GiaBan) => {
    let total = e.target.parentElement.nextElementSibling;
    props[0][i].quantity = quantity;
    total.innerText = changeMoneyFormat(quantity * Number(GiaBan));
  };

  const deleteFood = (e, i) => {
    props[0].splice(i, 1);
    e.target.parentElement.parentElement.remove();
    sumMoney();
  };
  const createHoaDon = ()=>{
    let CTHoaDon=[];
    for(var i=0;i<props[0].length;i++){
      CTHoaDon.push(
        {"ID":props[0][i]}
      )
    }
  }
  const displayFoodsChoosen = (data) => {
    return Object.keys(data).map((item, i) => {
      return (
        <li key={props[0][item].IDMon} className="order-li">
          <div className="order-item">
            <span className="item-number">{i + 1}.</span>
            <span style={{ width: "100px" }}>
              <span className="item-name">{props[0][item].TenMon}</span>
              <p className="item-price">
                {changeMoneyFormat(props[0][item].GiaBan)}
              </p>
            </span>
            <span className="item-quantity">
              <button
                className="change-quantity"
                id="minus"
                onClick={(e) => {Decrease(e, props[0][item].GiaBan, i);sumMoney()}}
              >
                -
              </button>
              <input
                onChange={(e) =>{
                  changQuantity(e,i, e.target.value, props[0][item].GiaBan);
                  sumMoney();
                }  
                }
                className="quantity"
                type="text"
                name="quantity"
                min={1}
                defaultValue={1}
              />
              <button
                className="change-quantity"
                id="plus"
                onClick={(e) => {Increment(e, props[0][item].GiaBan, i);sumMoney()}}
              >
                +
              </button>
            </span>
            <span className="item-total">
              {changeMoneyFormat(props[0][item].GiaBan)}
            </span>
            <span>
              {" "}
              <button
                onClick={(e) => deleteFood(e, i)}
                className="btn-clearfood"
              >
                X
              </button>
            </span>
          </div>
        </li>
      );
    });
  };
  useEffect(() => {
    setFoodsChoose(props[0]);
  }, );
  useEffect(()=> { setTotal(props[1])},);
  return (
    <div className="col-lg-5">
      <div className="order-wrapper">
        <div className="desk">
          <Link to="/Ban">Chọn bàn</Link>
          <i className="fas fa-solid fa-angle-right" />
        </div>
        <hr />
        <div className="order">
          <ul>{displayFoodsChoosen(foodsChoose)}</ul>
        </div>
        <div className="customer"> 
          <label>SĐT khách hàng</label>
          <input
          type="text"
          id="Sdt">
          </input>
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="purchase">
          <span>Thành tiền:</span>
          <span id="total">{changeMoneyFormat(total)}</span>
          <div style={{ display: "flex" }}>
            <button className="btn-purchase" id="save">
              LƯU
            </button>
            <button className="btn-purchase" id="done">
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
  
    </div>
 
  );
}

export default Order;
