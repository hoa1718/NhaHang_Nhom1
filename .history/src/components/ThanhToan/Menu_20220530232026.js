import "./ThanhToan.css";
import React, { useState, useRef } from "react";
import axios from "axios";
function Menu(props) {
  const [foods, setFoods] = useState(props.props);
  const displayFoods = (data) => {
    return Object.keys(data).map((item, i) => {
      return (
        <div className="foods-item col-lg-3">
          <div>
            <img
              className="foods-item-img"
              src={foods[item].Image}
              alt="foods"
            />
          </div>
          <p className="foods-item-name">{foods[item].TenMon}</p>
        </div>
      );
    });
  };
  return (
    <div className="col-lg-7">
      <ul className="category">
        <li className="category-item">
          <a className="category-item-a" href=" ">
            Món chính
          </a>
        </li>
        <li className="category-item">
          <a className="category-item-a" href=" ">
            Món phụ
          </a>
        </li>
        <li className="category-item">
          <a className="category-item-a" href=" ">
            Đồ uống
          </a>
        </li>
      </ul>
      <form action=" " method="get">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Tìm kiếm..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>{" "}
      <div className="row ">{displayFoods(foods)}</div>
    </div>
  );
}

export default Menu;
