import "./Login.css";
import React, { useState, useEffect } from "react";
function Login(props) {
  return (
    <div class="wrapper">
      <form class="login">
        <p class="title">Log in</p>
        <input type="text" placeholder="Username" autofocus />
        <i class="fa fa-user"></i>
        <input type="password" placeholder="Password" />
        <i class="fa fa-key"></i>
        <a href="#">Forgot your password?</a>
        <button>
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
    </div>
  );
}
export default Login;
