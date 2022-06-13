import './ModalCreate.css'
import React from 'react';
function Modal({open,children}) {
    if (!open) return null;
  return (
   <div>
       <div className='overlay'>{children}</div>
       <div className='form-create'>s</div>
   </div>
  );
}

export default Modal;
