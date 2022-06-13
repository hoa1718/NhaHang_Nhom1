import "./Ban.css";
import React, { useState, useEffect } from "react";
import ThanhToanPage from "../../pages/ThanhToan"
import { Routes, Route,Link } from "react-router-dom";
import axios from "axios";
function Ban(props) {
  const [soBan, setSoBan] = useState(props.props[0]);
  const [orders,setOrders]= useState(props.props[1])
  const displayBan = () => {
    let table=[];
    for (let i = 1; i <= Number(soBan); i++) {
      table.push(
        <div className="col-lg-3 dining" key={i}>
        <Link to={'/Ban/IDBan='+i}><div className="dining-inner"></div>
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
      <Routes>
        <Route path="Ban/IDBan=:id" element={<ThanhToanPage />}></Route>
      </Routes>

    </div>  
  );
}
export default Ban;
