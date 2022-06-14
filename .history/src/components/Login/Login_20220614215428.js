import "./Login.css";
import axios from "axios";
import React, { useState} from "react";
function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin=()=>{
    if(username==null || password==null){
      alert("Moi nhap thong tin");
    }
  }
  return (
    <div class="wrapper">
      <form class="login">
        <p class="title">Log in</p>
        <input onChange={e=>{ setUsername(e.target.value)}} type="text" placeholder="Username" autofocus />
        <i class="fa fa-user"></i>
        <input onChange={e=>{ setPassword(e.target.value)}}type="password" placeholder="Password" />
        <i class="fa fa-key"></i>
        <input t onClick={handleLogin()}>
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </input>
      </form>
    </div>
  );
}
export default Login;
