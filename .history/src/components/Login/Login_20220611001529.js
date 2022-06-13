import "./Login.css";
import React, { useState, useEffect } from "react";
function Login(props) {
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