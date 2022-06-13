import "./ThanhToan.css";
import React, { useState,useEffect} from "react";
import Order from "./Order";
import axios from "axios";
function Menu(props) {
  const [foods, setFoods] = useState(props.props[0]);
  const [category,setCategory]=useState(props.props[1]);
  const [foodsChoose,setFoodsChoose]=useState([]);
  const getFoodsWithIDCate = (e,id) =>{
    e.preventDefault();
    axios.get('http://localhost:4000/ThucDon/Cate/'+id)
    .then(res => {
        setFoods(res.data.result);
    })
    .catch(err =>{
     console.log(err);
    })
  }
  const chooseFood = (e,data) =>{
    e.preventDefault();
    let checkMatch=foodsChoose.findIndex((item)=>{
      item === data
    });
    if(checkMatch >=1){
      console.log("hello");
    }
    setFoodsChoose([...foodsChoose,data] )
    
  }
  const displayPhanLoai = (data) =>{
    return Object.keys(data).map((item, i) => {
      return (
        <li key={category[item].IDPhanLoai}
            onClick={(e) =>{getFoodsWithIDCate(e,category[item].IDPhanLoai)}}
            className="category-item">
          <div className="category-item-a"  >
          {category[item].TenPhanLoai}
          </div>
        </li>
      )})
  }
  const displayFoods = (data) => {
    return Object.keys(data).map((item, i) => {
      return (
        <div className="foods-item col-lg-3" onClick={(e)=>chooseFood(e,foods[item])}>
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
  useEffect(()=>{const a=setTimeout(console.log(foodsChoose),3000)},[foodsChoose])
  return (
    <>
    <div className="col-lg-7" style={{height:"90vh",overflow:'scroll'}}>
      <ul className="category">
       {displayPhanLoai(category)}
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
      <div className="row foods">{displayFoods(foods)}</div>
    </div>
    <Order props={foodsChoose}></Order>
    </>
  );
}

export default Menu;
