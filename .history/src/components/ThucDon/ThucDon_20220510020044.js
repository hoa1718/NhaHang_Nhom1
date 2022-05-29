import "./ThucDon.css";
import Create from "./FoodCreate";
import Detail from "./FoodDetail";
import Edit from "./FoodEdit";
import React, { useState,useEffect } from "react";
import axios from 'axios';

function ThucDon(props) {
  var foods=[];
  const getFood =()=>{
    axios.get('http://localhost:4000/ThucDon')
    .then(res => {
      foods=res.data.result;
      console.log(foods);
    }).catch(err =>{
      console.log(err);
    })
}
 
  useEffect(()=>{getFood()});
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [isOpenDetail, setOpenDetail] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  return (
    <>
    {foods !=null ?}
      
    </>
  );
}

export default ThucDon;
