import Topbar from "../components/Topbar";
import Menu from "../components/ThanhToan/Menu";
import Order from "../components/ThanhToan/Order";
import axios from "axios";
import React, { useState,useEffect } from "react";
function App() {
  const [foods,setFoods]= useState();
  const [category,setCategory]=useState();
  const getFood =()=>{
        axios.get('http://localhost:4000/ThucDon')
        .then(res => {
         setFoods(res.data.result);
        })
        .catch(err =>{
          console.log(err);
        })
    }
    const getPhanLoai = () =>{
      axios.get('http://localhost:4000/ThucDon/PhanLoai')
          .then(res => {
           setCategory(res.data.result)          
          })
          .catch(err =>{
            console.log(err);
          })
    }   
      useEffect(()=>{getFood();},[]);
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
      <div className="row">
      { foods ? <Menu props={foods}></Menu>: <h1>Loading...</h1> } 
        <Order></Order>
      </div>
      </div>   
    </div>
    </div> 
  );
}

export default App;
