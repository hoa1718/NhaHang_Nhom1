import './Modal.css'
import React from 'react';
function Modal({open,children}) {
    if (!open) return null;
  return (
   <div className='modal'>
      {children}Hello
   </div>
  );
}

export default Modal;
