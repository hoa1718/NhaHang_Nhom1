import './Modal.css'
import React from 'react';
function Modal() {
    if (!open) return null;
  return (
   <div className='Modal'>
       <div className='overlay'>{children}Hello</div>
   </div>
  );
}

export default Modal;
