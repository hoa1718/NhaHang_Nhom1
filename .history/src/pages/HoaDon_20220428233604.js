import Topbar from "../components/Topbar";
import HoaDon from "../components/HoaDon/HoaDon";
import Modal from '../componetModal/Modal.js'
import React,{useState} from 'react';
function App() {const[isOpen,setOpen]= useState(false);

  return (

    <div id="content-wrapper" className="d-flex flex-column">
    <div className='content'>
      <Topbar></Topbar>
      <div className="container-fluid">
        <HoaDon></HoaDon>
        <Modal open={isOpen}>Hello</Modal>
      </div>   
    </div>
    </div> 
  );
}

export default App;