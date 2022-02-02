import './modal.css';
import { FiX, FiClipboard } from 'react-icons/fi'


export default function Modal({closeModal}) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal} >
          <FiX size={24} color="#000" />
        </button>
      </div>
      
      <span>
        www.google.com
      </span>

      <button className="modal-link">
        http://www.bit.ly.com
        <FiClipboard size={24} color="#fff" />
      </button>
    </div>
  )
}