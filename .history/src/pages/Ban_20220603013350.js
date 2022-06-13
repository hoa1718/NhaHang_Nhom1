import Topbar from "../components/Topbar";
import Ban from "../components/Ban/Ban.js";
import React, { useState,useEffect} from "react";
import ThanhToanPage from ".."
import axios from "axios";
function App() {
  const [soBan,setSoBan]= useState();
  const getBan =()=>{
    axios.get('http://localhost:4000/ThanhToan/Ban')
    .then(res => {
     setSoBan(res.data.result.Length)        
    })
    .catch(err =>{
      console.log(err);
    })
  }  
   useEffect(()=>{getBan()},[]);
  return (    
    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
      {soBan ? <Ban props={soBan}></Ban> : <h1>Loading...</h1>}
      </div>   
    </div>
    </div> 
  );
}

export default App;