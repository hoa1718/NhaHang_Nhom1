import Topbar from "../components/Topbar";
import ThucDon from "../components/ThucDon/ThucDon.js";
import axios from "axios";
import React, { useState,useEffect } from "react";
function App() {
  const [foods,setFoods]= useState();
  const getFood =()=>{
        axios.get('http://localhost:4000/ThucDon')
        .then(res => {
         setFoods(res.data.result);
         console.log(res.data.res);
         return res.data.result;
        }).catch(err =>{
          console.log(err);
        })
    }
     
      useEffect(()=>{getFood()});
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid ">
        <ThucDon props={()=>{getFood()}}></ThucDon> 
      </div>   
    </div>
    </div> 
  );
}

export default App;
