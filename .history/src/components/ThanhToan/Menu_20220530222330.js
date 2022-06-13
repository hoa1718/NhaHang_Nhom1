import "./ThanhToan.css";
import React, { useState, useRef } from "react";
import axios from "axios";
function Menu(props) {
  const [foods, setFoods] = useState(props.props);
  const displayFoods = (data) => {
    return Object.keys(data).map((item, i) => {
      return (
            <td className="foods-item">
              <a href=" ">
                <img
                  className="foods-item-img"
                  src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                  alt="foods"
                />
                <p className="foods-item-name">Gà rán</p>
              </a>
            </td>
      )})};
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
      <table className="foods">
        <tbody>
          <tr>
            <th />
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <td className="foods-item">
              <a href=" ">
                <img
                  className="foods-item-img"
                  src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                  alt="foods"
                />
                <p className="foods-item-name">Gà rán</p>
              </a>
            </td>
            <td className="foods-item">
              <a href=" ">
                <img
                  className="foods-item-img"
                  src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                  alt="foods"
                />
                <p className="foods-item-name">Gà rán thom ngon</p>
              </a>
            </td>
            <td className="foods-item">
              <a href=" ">
                <img
                  className="foods-item-img"
                  src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                  alt="foods"
                />
                <p className="foods-item-name">Gà rán</p>
              </a>
            </td>
            <td className="foods-item">
              <a href=" ">
                <img
                  className="foods-item-img"
                  src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png"
                  alt="foods"
                />
                <p className="foods-item-name">Gà rán</p>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
