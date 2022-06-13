<<<<<<< HEAD
import "./ThanhToan.css";

import React, { useState,useEffect} from "react";
import Order from "./Order";
import axios from "axios";
import { useParams } from "react-router-dom";
function Menu(props) {
  let { id } = useParams();
  const[all,setAll]=useState(props.props[0]);
  const [foods, setFoods] = useState(props.props[0]);
  const [total,setTotal] = useState(0);
  const [category,setCategory]=useState(props.props[1]);
  const [foodsChoose,setFoodsChoose]=useState(()=>{
    if( id !== undefined && props.props[3][id] !== null){
      return(props.props[3][id]);
    }
    else { 
      return ([])} ;
  });
  const [keyword, setKeyWord] = useState();
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
  const search = (e, keyword) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/ThucDon/Search/" + keyword)
      .then((res) => {
        setFoods(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const chooseFood = (e,data) =>{
    e.preventDefault();
    let checkMatch=foodsChoose.findIndex((item)=>
      item.IDMon === data.IDMon
    );
    if(checkMatch === -1){
      data.quantity=1
      setFoodsChoose([...foodsChoose,data] )
    } 
    else{
      alert("Đã có trong hoá đơn")
    }
  }
  const changeTotal = async ()=>{
    let temp=0;
     for(let i= 0;i < foodsChoose.length;i++){
       temp+= Number(foodsChoose[i].GiaBan) * Number(foodsChoose[i].quantity);
    }
    setTotal(temp)
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
      for(let j=0; j<props.props[2].length;j++){
        if( foods[item].IDMon == props.props[2][j].IDMon ){
          return(
          <div className="foods-item col-lg-3 "  >
          <div className="cancel"></div>
            <div>
              <img
                className="foods-item-img"
                src={foods[item].Image}
                alt="foods"
              />
            </div>
            
            <p className="foods-item-name">{foods[item].TenMon}</p>
            
          </div> 
          )
        }    
      }
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
  useEffect(()=>{changeTotal()},[foodsChoose])
  return (
    <>
    <div className="col-lg-7" style={{height:"90vh",overflow:'scroll'}}>
      <ul className="category">
      <li
            onClick={(e) =>{setFoods(all)}}
            className="category-item">
          <div className="category-item-a"  >
          Tất cả
          </div>
        </li>
       {displayPhanLoai(category)}
      </ul>

        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Tìm kiếm..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button"
             onClick={(e) => {
                  search(e, keyword);
                }}>
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      <div className="row foods">{displayFoods(foods)}</div>
    </div>
    <Order props={[foodsChoose,total,props.props[2]]} changeTotal={()=>{changeTotal()}}></Order>
    </>
=======
import './ThanhToan.css'
function Menu(props) {
  return (
    <div className="col-lg-7">
  <ul className="category">
    <li className="category-item"><a className="category-item-a" href=" ">Món chính</a></li>
    <li className="category-item"><a className="category-item-a" href=" ">Món phụ</a></li>
    <li className="category-item"><a className="category-item-a" href=" ">Đồ uống</a></li>
  </ul>
  <form action=" "  method="get">                <div className="input-group">
      <input type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          <i className="fas fa-search fa-sm" />
        </button></div>
    </div>
  </form>        <table className="foods">
    <tbody><tr>
        <th />
        <th />
        <th />
        <th />
      </tr>
      <tr>
        <td className="foods-item">
          <a href=" ">
            <img className="foods-item-img" src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png" alt='foods' />
            <p className="foods-item-name">Gà rán</p>
          </a>
        </td>
        <td className="foods-item">
          <a href=" ">
          <img className="foods-item-img" src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png" alt='foods' />
            <p className="foods-item-name">Gà rán thom ngon</p>
          </a>
        </td>
        <td className="foods-item">
          <a href=" ">
          <img className="foods-item-img" src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png" alt='foods' />
            <p className="foods-item-name">Gà rán</p>
          </a>
        </td>
        <td className="foods-item">
          <a href=" ">
          <img className="foods-item-img" src="https://mcdonalds.vn/uploads/2018/2-ga-ran.png" alt='foods' />
            <p className="foods-item-name">Gà rán</p>
          </a>
        </td>
      </tr>
    </tbody></table>
</div>

>>>>>>> b7ec448ecad55dc486ebd8bec01289fd610bbb08
  );
}

export default Menu;
