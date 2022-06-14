import "./Login.css";
import axios from "axios";
function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div class="wrapper">
      <form class="login">
        <p class="title">Log in</p>
        <input type="text" placeholder="Username" autofocus />
        <i class="fa fa-user"></i>
        <input type="password" placeholder="Password" />
        <i class="fa fa-key"></i>
        <button>
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
    </div>
  );
}
export default Login;
