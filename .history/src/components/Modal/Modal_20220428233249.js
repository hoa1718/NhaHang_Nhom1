import './Modal.css'

function Modal({open,children}) {
    if (!open) return null;
  return (
   <div className='Modal'>
       <div className='overlay'>{children Hello}</div>
   </div>
  );
}

export default Modal;
