import "./Ban.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Ban(props) {
  const [soBan, setSoBan] = useState(props.props);
  const [ban,setBan] = useState(()=>{
      let table=[];
      for (let i = 1; i <= Number(soBan); i++) {
        table.push([{}])
      }
      setBan(table);
  });
  console.log(ban);
  const displayBan = () => {
    let table=[];
    for (let i = 1; i <= Number(soBan); i++) {
      table.push(
        <div className="col-lg-3 dining">
          <div className="dining-inner"></div>
          <img
            src={process.env.PUBLIC_URL + "/restaurant.png"}
            alt="table"
          ></img>   
          <p>Bàn {i}</p>
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
