import "./Ban.css";
import React, { useState, useEffect } from "react";
import ThanhToanPage from "../../pages/ThanhToan"
import { Routes, Route,Link } from "react-router-dom";
import axios from "axios";
function Ban(props) {
  const [soBan, setSoBan] = useState(props.props);
  const [ban,setBan] = useState(()=>{
      let table=[];
      for (let i = 1; i <= Number(soBan); i++) {
        table.push([{}])
      }
      return table;
  });

  const displayBan = () => {
    let table=[];
    for (let i = 1; i <= Number(soBan); i++) {
      table.push(
        <div className="col-lg-3 dining">

        <Link to={'ThanhToan/${id}'}><div className="dining-inner"></div>
          <img
            src={process.env.PUBLIC_URL + "/restaurant.png"}
            alt="table"
          ></img>   
          <p>Bàn {i}</p></Link>
          
        </div>
      );
    }
    return table;
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="row">
          {displayBan()}
        </div>
      </div>
    </div>
  );
}
export default Ban;
