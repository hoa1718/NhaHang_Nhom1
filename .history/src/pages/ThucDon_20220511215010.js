import Topbar from "../components/Topbar";
import ThucDon from "../components/ThucDon/ThucDon.js";
import axios from "axios";
import React, { useState,useEffect } from "react";
function App() {
  // const [foods,setFoods]= useState();
  var foods=[];
  const getFood =()=>{
        axios.get('http://localhost:4000/ThucDon')
        .then(res => {
        //  setFoods(res.data.result);
         console.log(res.data.result);
         return res.data.result;
        }).catch(err =>{
          return null;
        })
    }
     
      useEffect(foods=()=>{getFood()});
  if(foods !)
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid ">
       { foods && <ThucDon props={foods}></ThucDon>} 
      </div>   
    </div>
    </div> 
  );
}

export default App;
