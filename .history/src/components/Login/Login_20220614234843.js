import "./Login.css";
import axios from "axios";
import React, { useState} from "react";
import { useCookies } from 'react-cookie';
function Login(props) {
  const [username, setUsername] = useState();
  const [cookie,setCookie]= useCookies(['role']);
  const [password, setPassword] = useState();
  const handleLogin=(e)=>{
    e.preventDefault();
    if(username==null || password==null){
      alert("Moi nhap thong tin");
    }
    axios.post("http://localhost:4000/Login/",{username:username,password:password})
    .then((res)=>{
      console.log(res.data);
      setCookie(['role'],res.data)
      
    }).catch((err)=>{
      console.log(err);
      alert(err.response.data.message);
    })
  }
  return (
    <div class="wrapper">
      <form class="login">
        <p class="title">Log in</p>
        <input onChange={e=>{ setUsername(e.target.value)}} type="text" placeholder="Username" autofocus />
        <i class="fa fa-user"></i>
        <input onChange={e=>{ setPassword(e.target.value)}}type="password" placeholder="Password" />
        <i class="fa fa-key"></i>
        <button onClick={e=>{handleLogin(e)}}>
        <L
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
    </div>
  );
}
export default Login;
