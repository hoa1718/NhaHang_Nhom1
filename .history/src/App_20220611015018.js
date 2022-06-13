import "./sb-admin-2.min.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
function App() {
  return (
    // <Router>
      <div className="App">
        <Sidebar></Sidebar>
        
      </div>
    // </Router>
  );
}

export default App;
