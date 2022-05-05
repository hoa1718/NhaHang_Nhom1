import './Modal.css'

function Modal({open}) {
    if (!open) return null;
  return (
   <div className='Modal'>
       <div className='overlay'></div>
   </div>
  );
}

export default Modal;
